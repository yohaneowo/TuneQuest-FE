<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title align="left">
          <router-link to="/">
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
.page-container {
  padding-top: 20px; /* 調整頂部間隙 */
  padding-left: 20px; /* 調整左邊欄間隙 */
}

.flex-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 99%;
}
</style>
