<template>
  <q-page class="recognize-page q-pa-md">
    <box_Profile></box_Profile>
    <div class="history">
      <box_History></box_History>
    </div>
    <div class="cover"><box_Cover></box_Cover></div>
    <div class="uploadMusic">
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
import axios from "axios";
import { useMusicGenStore } from "../store/musicGenStore";
import { watch } from "vue";

const store = useMusicGenStore();

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
  width: 100vw;
  height: 100vh;
  display: grid;
  background-image: url("src/assets/randombg11_purple.png");
  background-size: cover;
  background-position: center;
  background-color: rgb(23, 23, 30);
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(12, 1fr);
  gap: 15px;
  padding: 0;
  grid-auto-rows: minmax(100px, auto);
  font-family: "Rubik";
  vertical-align: middle;
  font-weight: 500;
  font-style: normal;
  font-size: 15px;
  color: $q-color-box;
}
.profile {
  background: repeating-radial-gradient(
      rgba(36, 87, 159, 0.25),
      transparent 0.0001px
    ),
    rgba(110, 110, 110, 0.45);
  display: grid;
  align-items: center;
  align-content: flex-start;
  justify-content: flex-start;
  grid-column: 3/8;
  grid-row: 3/6;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(4px);
  border: 0.75px solid rgba(175, 175, 175, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(90, 90, 90, 0.3);
}
.history {
  background: repeating-radial-gradient(
      rgba(36, 87, 159, 0.25),
      transparent 0.0001px
    ),
    rgba(110, 110, 110, 0.45);
  // display: grid;
  // align-items: center;
  // justify-content: center;
  grid-column: 3/8;
  grid-row: 6/12;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(4px);
  border: 0.75px solid rgba(175, 175, 175, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(90, 90, 90, 0.3);
}
.cover {
  background: repeating-radial-gradient(
      rgba(36, 87, 159, 0.25),
      transparent 0.0001px
    ),
    rgba(110, 110, 110, 0.45);
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 8/12;
  grid-row: 3/6;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(4px);
  border: 0.75px solid rgba(175, 175, 175, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(90, 90, 90, 0.3);
  overflow: hidden;
}
.display_music {
  background: repeating-radial-gradient(
      rgba(36, 87, 159, 0.25),
      transparent 0.0001px
    ),
    rgba(110, 110, 110, 0.45);
  display: grid;
  align-items: center;
  //justify-content: center;
  grid-column: 12/20;
  grid-row: 3/6;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(4px);
  border: 0.75px solid rgba(175, 175, 175, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(90, 90, 90, 0.3);
}
.uploadMusic {
  background: repeating-radial-gradient(
      rgba(36, 87, 159, 0.25),
      transparent 0.0001px
    ),
    rgba(110, 110, 110, 0.45);
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 20/23;
  grid-row: 3/6;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(4px);
  border: 0.75px solid rgba(175, 175, 175, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(90, 90, 90, 0.3);
}
.title {
  background: repeating-radial-gradient(
      rgba(36, 87, 159, 0.25),
      transparent 0.0001px
    ),
    rgba(110, 110, 110, 0.45);
  display: grid;
  grid-column: 8/15;
  grid-row: 6/8;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(4px);
  border: 0.75px solid rgba(175, 175, 175, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(90, 90, 90, 0.3);
}
.description {
  background: repeating-radial-gradient(
      rgba(36, 87, 159, 0.25),
      transparent 0.0001px
    ),
    rgba(110, 110, 110, 0.45);
  display: grid;
  align-items: center;
  grid-column: 8/18;
  grid-row: 8/12;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(4px);
  border: 0.75px solid rgba(175, 175, 175, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(90, 90, 90, 0.3);
}
.genre {
  background: repeating-radial-gradient(
      rgba(36, 87, 159, 0.25),
      transparent 0.0001px
    ),
    rgba(110, 110, 110, 0.45);
  display: grid;
  align-items: center;
  grid-column: 18/23;
  grid-row: 6/12;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(4px);
  border: 0.75px solid rgba(175, 175, 175, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(90, 90, 90, 0.3);
}
.addToDB {
  background: repeating-radial-gradient(
      rgba(36, 87, 159, 0.25),
      transparent 0.0001px
    ),
    rgba(110, 110, 110, 0.45);
  display: grid;
  //align-items: center;
  justify-content: center;
  grid-column: 15/18;
  grid-row: 6/8;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(4px);
  border: 0.75px solid rgba(175, 175, 175, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(90, 90, 90, 0.3);
  overflow: visible;
}
</style>
