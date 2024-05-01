<template>
  <div class="profile">
    <div class="wrap">
      <q-item class="item">
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white" fixed-top-left
            >G</q-avatar
          >
        </q-item-section>
        <q-item-section class="none">
          <div>
            <p class="name">Guest</p>
          </div>
          <q-item-label caption>Guest001</q-item-label>
        </q-item-section>
      </q-item>
      <q-item-section class="adjust">
        <router-link to="#" class="button-login">
          <span class="material-icons"> tune </span></router-link
        >
      </q-item-section>

      <div class="coin">
        <q-btn
          align="around"
          class="btn-fixed-width"
          inline
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <div class="q-btn-inner row content-center">
            <!-- 使用 flexbox 类实现居中对齐 -->
            <span class="material-icons" style="font-size: calc(1rem + 0.5vw)"
              >paid</span
            >
            <span style="margin-left: 0.5rem">credit: {{ credit }}</span
            ><!-- 调整图标和文字之间的间距 -->
          </div>
          <div class="message-bubble" v-if="isHovered">refresh in 24 hours</div>
        </q-btn>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const isHovered = ref(false);
const credit = ref(10);
credit.value = 10;
</script>
<style lang="scss">
.profile {
  grid-template-columns: repeat(6, 1fr); // 将 profile 分为 6 列
  grid-template-rows: auto; // 行高自适应内容
}

.wrap {
  display: grid;
  grid-column: 1 / span 6; // 占据整个 .profile 的宽度

  justify-content: center;
  align-items: center;
  color: rgb(216, 241, 247);
}

.item {
  display: grid;
  grid-column: 1 / span 3;
  padding: 1.25rem;
  grid-template-columns: auto 1fr; /* 左侧自适应宽度，右侧占据剩余空间 */
  align-items: center; /* 垂直居中对齐 */
  grid-gap: 0.5rem; /* 设置网格间隔 */
}
.adjust {
  display: grid;
  grid-column: 5 / span 6;
  padding: 1.25rem;
  grid-template-columns: auto 1fr;
  //transform: scale(1.5);
}

.item .q-item__section {
  padding: 0 !important; // 使用 !important 確保覆蓋預設值
}
.avatar-container {
  display: flex;
  align-items: center;
}

.guest-section {
  display: flex;
  flex-direction: column; /* 将内容垂直排列 */
}

.guest-info {
  display: flex;
  flex-direction: column;
}
.name {
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  font-style: normal;
  color: rgb(216, 241, 247);
}
.coin {
  display: grid;
  grid-column: 3 / span 5;
  padding: 0 1rem;
}
.message-bubble {
  position: absolute; /* 絕對定位 */
  top: 100%; /* 從頂部一半位置開始 */
  left: 50%; /* 從左側一半位置開始 */
  transform: translate(
    -50%,
    -50%
  ); /* 使用 translate 函數將元素水平和垂直置中 */
  background-color: rgb(47, 55, 65, 0.9);
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  display: none;
}

.coin:hover .message-bubble {
  display: block;
}

.button-login {
  padding: 0.4rem;
  border-radius: 50%;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s;
}

.button-login:hover {
  background-color: rgb(47, 55, 65, 0.5);
}
.btn-fixed-width {
  background-color: rgb(229, 240, 250, 0.4);
  border-radius: 10px;
}
.q-item__label--caption {
  color: rgb(255 255 255 / 65%);
}
</style>
