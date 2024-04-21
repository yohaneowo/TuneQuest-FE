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
            <q-route-tab to="/login" label="登入" />
          </q-tabs>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="recognize-page q-pa-md">
        <box_Profile></box_Profile>
        <div class="history">
          <box_History></box_History>
          <box_History></box_History>
          <box_History></box_History>
        </div>

        <box_Cover></box_Cover>
        <DisplayMusic></DisplayMusic>
        <div class="addToDB">addToDB</div>
        <Recognize_Title></Recognize_Title>
        <Recognize_Description></Recognize_Description>

        <UploadMusic @upload-success="handleUploadSuccess" />
        <!--<UploadMusic /><Audio_Genre></Audio_Genre>
        <div class="genre"><Recognize_Genre></Recognize_Genre></div>
        <RecognizeGenre :recognized-genre="recognizedGenre" />-->
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import box_Profile from "src/components/box_Profile.vue";
import box_Cover from "src/components/box_Cover.vue";
import box_History from "src/components/box_History.vue";
import UploadMusic from "src/components/UploadMusic.vue";
import DisplayMusic from "src/components/DisplayMusic.vue";
import Recognize_Title from "src/components/Recognize_Title.vue";
import Recognize_Description from "src/components/Recognize_Description.vue";
//import Recognize_Genre from "src/components/Recognize_Genre.vue";
//import Audio_Genre from "src/components/Audio_Genre.vue";
</script>
<style lang="scss">
.no-underline {
  color: inherit; /* 保留文字顏色 */
  text-decoration: none; /* 移除下劃線 */
}
.recognize-page {
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
  grid-row: 2/5;
  border-radius: 10px;
  margin: 10px;
}
.history {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 3/8;
  grid-row: 5/12;
  border-radius: 10px;
  margin: 10px;
}
.cover {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 8/12;
  grid-row: 2/5;
  border-radius: 10px;
  margin: 10px;
}
.display_music {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  //justify-content: center;
  grid-column: 12/19;
  grid-row: 2/5;
  border-radius: 10px;
  margin: 10px;
}
.upload {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 19/23;
  grid-row: 2/5;
  border-radius: 10px;
  margin: 10px;
}
.title {
  background-color: $q-color-box;
  display: grid;
  grid-column: 8/15;
  grid-row: 5/7;
  border-radius: 10px;
  margin: 10px;
}
.description {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  grid-column: 8/18;
  grid-row: 7/12;
  border-radius: 10px;
  margin: 10px;
}
.genre {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  grid-column: 18/23;
  grid-row: 5/12;
  border-radius: 10px;
  margin: 10px;
}
.addToDB {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 15/18;
  grid-row: 5/7;
  border-radius: 10px;
  margin: 10px;
}
</style>
