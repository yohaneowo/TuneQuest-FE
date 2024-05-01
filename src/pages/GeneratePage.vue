<template>
  <!--<q-page-container>-->
  <q-page class="generate-page q-pa-md">
    <box_Profile></box_Profile>
    <q-card class="history"
      ><box_History /><box_History /><box_History
    /></q-card>
    <div class="cover"><box_Cover></box_Cover></div>
    <box_PromptGen></box_PromptGen>
    <!--
        <q-card class="upload">upload</q-card>
        <box_Genre></box_Genre>
        -->
    <box_Output></box_Output>
    <box_Duration></box_Duration>
  </q-page>
  <!--</q-page-container>-->
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
  width: 100vw;
  height: 100vh;
  display: grid;
  background-image: url("src/assets/randombg11_purple.png");
  background-size: cover;
  background-position: center;
  background-color: $primary;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(12, 1fr);
  gap: 15px;
  padding: 0;
  grid-auto-rows: minmax(100px, auto);
  font-family: "Rubik";
  vertical-align: middle;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
}
.profile {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  align-content: flex-start;
  justify-content: flex-start;
  grid-column: 3/8;
  grid-row: 3/6;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 0.75px solid rgba(130, 130, 131, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(172, 185, 214, 0.7);
}
.history {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 3/8;
  grid-row: 6/12;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 0.75px solid rgba(130, 130, 131, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(172, 185, 214, 0.7);
}
.cover {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 8/12;
  grid-row: 3/6;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 0.75px solid rgba(130, 130, 131, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(172, 185, 214, 0.7);
  overflow: hidden;
}
.prompt {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 8/23;
  grid-row: 6/12;
  border-radius: 15px;
  margin: 5px;
  position: relative; // 設置父元素為相對定位
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 0.75px solid rgba(130, 130, 131, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(172, 185, 214, 0.7);
}
.output {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  grid-column: 12/20;
  grid-row: 3/6;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 0.75px solid rgba(130, 130, 131, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(172, 185, 214, 0.7);
}
.duration {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 20/23;
  grid-row: 3/6;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 0.75px solid rgba(130, 130, 131, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(172, 185, 214, 0.7);
}
</style>
