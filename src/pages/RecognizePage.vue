<template>
  <q-page class="recognize-page q-pa-md">
    <box_Profile></box_Profile>
    <div class="history">
      <box_History></box_History>
      <box_History></box_History>
      <box_History></box_History>
    </div>
    <div class="cover"><box_Cover></box_Cover></div>
    <div class="upload">
      <UploadMusic @upload-success="handleUploadSuccess" />
    </div>
    <DisplayMusic></DisplayMusic>
    <Recognize_Title></Recognize_Title>
    <Recognize_Description></Recognize_Description>
    <div class="genre"><Genre_new></Genre_new></div>
    <div class="addToDB"><Add_ToDB></Add_ToDB></div>
    <!--
    <div class="addToDB" v-if="text && prompt && selectedGenre">
      <Add_ToDB
        :text="text"
        :prompt="prompt"
        :genre="selectedGenre"
        @upload-success="handleUploadToDB"
      ></Add_ToDB>
    </div>-->
  </q-page>
</template>

<script setup>
import box_Profile from "src/components/box_Profile.vue";
import box_Cover from "src/components/box_Cover.vue";
import box_History from "src/components/box_History.vue";
import UploadMusic from "src/components/UploadMusic.vue";
import DisplayMusic from "src/components/DisplayMusic.vue";
import Recognize_Title from "src/components/Recognize_Title.vue";
import Recognize_Description from "src/components/Recognize_Description.vue";
import Genre_new from "src/components/Genre_new.vue";
import Add_ToDB from "src/components/Add_ToDB.vue";
//import Recognize_Genre from "src/components/Recognize_Genre.vue";
/*
const handleUploadSuccess = (file) => {
  console.log("上傳成功:", file);
};

const text = ref("");
const prompt = ref("");
const selectedGenre = ref("");

const isActiveGenre = (genre) => {
  return genre === selectedGenre.value;
};

const selectGenre = (genre) => {
  selectedGenre.value = genre;
};

const handleUploadToDB = () => {
  console.log("上傳到資料庫成功");
};
*/
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
  background-color: rgba(25, 30, 35);
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
  background-color: rgba(245, 188, 142, 0.75);
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 3/8;
  grid-row: 5/11;
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
  grid-column: 12/20;
  grid-row: 2/5;
  border-radius: 10px;
  margin: 10px;
}
.upload {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 20/23;
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
  grid-row: 7/11;
  border-radius: 10px;
  margin: 10px;
}
.genre {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  grid-column: 18/23;
  grid-row: 5/11;
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
