<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title align="left">
          <router-link to="/" class="no-underline">
            <q-avatar
              ><img
                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
            /></q-avatar>
            TuneQuest
          </router-link>
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
    <!--
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>

        <q-item-label header> Essential Links </q-item-label>

        <router-link to="/generate">
          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="create" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Generate Page</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

        <router-link to="/recognize">
          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="visibility" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Recognize Page</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

      </q-list>
    </q-drawer>
    -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<!--
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
  -->

<style>
.no-underline {
  color: inherit; /* 保留文字顏色 */
  text-decoration: none; /* 移除下劃線 */
}
.q-header {
  background-color: transparent;
  box-shadow: none; /* 去除阴影（如果有） */
}

.q-header__content {
  color: white; /* 设置文本颜色为白色 */
  font-family: "Rubik";

  font-weight: 500;
  font-style: normal;
  font-size: 24px;
}
.q-toolbar {
  position: relative;
  padding: 20px 24px;
  min-height: 50px;
  width: 100%;
}
.q-toolbar__title {
  flex: 1 1 0%;
  min-width: 1px;
  max-width: 100%;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0.01em;
  padding: 12 12px;
  font-family: "Rubik";
}
.q-tab__label {
  font-size: 16px;
  line-height: 1.715em;
  font-weight: 500;
}
.q-page-container {
  padding-top: 0 !important;
}

.flex-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 99%;
}
.q-toolbar {
  position: relative;
  padding: 12px 20px;
  min-height: 50px;
  width: 100%;
}
</style>
