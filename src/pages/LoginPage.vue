<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title align="left">
          <router-link to="/home">
            <q-avatar
              ><img
                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
            /></q-avatar>
          </router-link>
          TuneQuest
        </q-toolbar-title>
        <q-tabs align="right">
          <q-route-tab to="/generate" label="生成" />
          <q-route-tab to="/search" label="搜尋" />
          <q-route-tab to="/recognize" label="上傳" />
          <q-route-tab to="/searchhelper" label="題詞小幫手" />
          <q-route-tab to="/login" label="登入" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <div id="app">
      <div class="loginBox">
        <div class="inner">
          <div class="signIn" v-if="signIn">
            <div class="top">
              <img class="logo" src="src/assets/TuneQuest.png" />
              <div class="title">登入</div>
              <div class="subtitle">
                還沒有帳號嗎？
                <span class="subtitle-action" @click="signIn = !signIn">
                  建立一個帳號
                </span>
              </div>
            </div>
            <form>
              <div class="form">
                <input
                  required
                  aria-required="true"
                  aria-invalid="false"
                  aria-label="E-mail"
                  type="email"
                  pattern="^[\w\.-]+@[\w\.-]+\.\w+$"
                  class="w100"
                  :class="{ invalid: email.error }"
                  ref="email"
                  placeholder="Email"
                  autofocus
                  @blur="validateEmail"
                  @keydown="validateEmail"
                  v-model="email.value"
                />

                <input
                  required
                  aria-required="true"
                  type="password"
                  class="w100"
                  :class="{ invalid: password.error }"
                  placeholder="Password"
                  v-model="password.value"
                  @blur="validatePassword"
                  @keydown="validatePassword"
                />
              </div>

              <input
                type="submit"
                value="Submit"
                class="action"
                :class="{ 'action-disabled': !loginValid }"
              />
            </form>
          </div>

          <div class="register" v-else>
            <div class="top">
              <img class="logo" src="src/assets/TuneQuest.png" />
              <div class="title">建立一個帳號</div>
              <div class="subtitle">
                已經有帳號了？
                <span class="subtitle-action" @click="signIn = !signIn">
                  登入
                </span>
              </div>
            </div>

            <div class="form">
              <input
                type="text"
                placeholder="First name"
                autofocus
                v-model="firstName"
                class="w100"
              />

              <input
                type="text"
                placeholder="Last name"
                v-model="lastName"
                class="w100"
              />

              <input
                type="text"
                class="w100"
                placeholder="Email"
                v-model="email.value"
              />
              <input
                type="password"
                class="w100"
                placeholder="Password"
                v-model="password.value"
              />
            </div>

            <button
              class="action"
              :class="{ 'action-disabled': !registerValid }"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script setup>
import { ref, computed } from "vue";

const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

const firstName = ref("");
const lastName = ref("");

const password = ref({
  value: "",
  error: false,
});

const email = ref({
  value: "",
  error: false,
});

const signIn = ref(true);

const validateEmail = () => {
  if (email.value.value == "") email.value.error = true;
  else email.value.error = false;
};

const validatePassword = () => {
  if (password.value.value == "") password.value.error = true;
  else password.value.error = false;
};

const validFirstName = computed(() => firstName.value.length > 0);

const validLastName = computed(() => lastName.value.length > 0);

const emailValid = computed(() => emailRegex.test(email.value.value));

const passwordValid = computed(() => password.value.value.length > 0);

const loginValid = computed(() => emailValid.value && passwordValid.value);

const registerValid = computed(
  () =>
    emailValid.value &&
    passwordValid.value &&
    validFirstName.value &&
    validLastName.value
);
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss">
@mixin box {
  box-shadow: 1px 1px 2px 1px #ccc;
}

@mixin field {
  border: 1px solid #aaa;
  height: 40px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  box-sizing: border-box;
}

input[type="text"] {
  @include field;
}

input[type="email"] {
  @include field;
}

input[type="password"] {
  @include field;
}

.invalid {
  border: 2px solid red !important;
  &::placeholder {
    color: red;
  }
}

.errorMessage {
  color: red;
  margin: 10px;
  top: 5px;
}

.w100 {
  width: 100%;
}

#app {
  display: flex;
  justify-content: center; /* align horizontally in the center */
  align-items: center; /* align vertically in the center */
  height: 100vh; /* take up the full viewport height */
}

.logo {
  width: 300px;
  margin-bottom: 10px;
}

.action {
  height: 40px;
  text-transform: uppercase;
  border-radius: 25px;
  width: 100%;
  border: none;
  cursor: pointer;
  background: green;
  margin-top: 20px;
  color: #fff;
  font-size: 1.2rem;
  @include box;
}

.action-disabled {
  color: #eee;
  background: #aaa;
  cursor: auto;
}

.top {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
}

.title {
  width: 100%;
  font-size: 1.8rem;
  margin-bottom: 10px;
  text-align: center;
}

.subtitle {
  .subtitle-action {
    color: green;
    font-weight: bold;
    cursor: pointer;
  }
}

html {
  background-repeat: no-repeat;
  background: linear-gradient(
    to bottom,
    rgba(47, 55, 65, 1) 0%,
    rgba(63, 76, 107, 1) 100%
  );
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: sans-serif;
}

.loginBox {
  background: #fff;
  border-radius: 15px;
  max-width: 400px;
  padding: 25px 55px;
  animation: slideInTop 1s;
}

@keyframes slideInTop {
  from {
    opacity: 0;
    transform: translateY(-30%);
  }

  to {
    opacity: 100;
    transform: translateY(0%);
  }
}

@media screen and (min-width: 440px) {
  .loginBox {
    @include box;
  }
}

@media screen and (max-width: 440px) {
  html {
    background: #fff;
    align-items: start;
    justify-content: start;
  }

  .loginBox {
    padding: 25px 25px;
    max-width: 100vw;
  }
}
</style>
