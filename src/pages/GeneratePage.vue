<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <div class="flex-container">
          <q-toolbar-title align="left">
            <router-link to="/" class="no-underline">
              <q-avatar
                ><img
                  src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
                />
              </q-avatar>
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
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="generate-page q-pa-md">
        <box_Profile></box_Profile>
        <q-card class="history"
          ><box_History /><box_History /><box_History
        /></q-card>
        <box_Cover></box_Cover>
        <box_PromptGen></box_PromptGen>
        <!--
        <q-card class="upload">upload</q-card>
        <box_Genre></box_Genre>
        -->
        <box_Output></box_Output>
        <box_Duration></box_Duration>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
//import box_Genre from "src/components/box_Genre.vue";
import box_Profile from "src/components/box_Profile.vue";
import box_History from "src/components/box_History.vue";
import box_Output from "src/components/box_Output.vue";
import box_Cover from "src/components/box_Cover.vue";
import box_PromptGen from "src/components/box_PromptGen.vue";
import box_Duration from "src/components/box_Duration.vue";
defineOptions({
  name: "GeneratePage",
});
</script>

<style lang="scss">
.no-underline {
  color: inherit; /* 保留文字顏色 */
  text-decoration: none; /* 移除下劃線 */
}
.generate-page {
  width: 100%;
  height: 100%;
  display: grid;
  background-color: $primary;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(12, 1fr);
  gap: 5px;
  grid-auto-rows: minmax(100px, auto);
}
.profile {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  align-content: flex-start;
  justify-content: flex-start;
  grid-column: 3/8;
  grid-row: 1/4;
  border-radius: 10px;
  margin: 10px;
}
.history {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 3/8;
  grid-row: 4/10;
  border-radius: 10px;
  margin: 10px;
}
.cover {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 8/12;
  grid-row: 1/4;
  border-radius: 10px;
  margin: 10px;
}
.prompt {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 8/24;
  grid-row: 4/10;
  border-radius: 10px;
  margin: 10px;
  position: relative; // 設置父元素為相對定位
}
.upload {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 18/24;
  grid-row: 4/10;
  border-radius: 10px;
  margin: 10px;
}
.genre {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 18/24;
  grid-row: 7/10;
  border-radius: 10px;
  margin: 10px;
}
.output {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  grid-column: 12/21;
  grid-row: 1/4;
  border-radius: 10px;
  margin: 10px;
}
.duration {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 21/24;
  grid-row: 1/4;
  border-radius: 10px;
  margin: 10px;
}
</style>
