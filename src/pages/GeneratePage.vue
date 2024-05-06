<template>
  <!--<q-page-container>-->
  <q-page class="generate-page q-pa-md">
    <box_Profile></box_Profile>

    <q-card class="history">
      <box_History />
    </q-card>
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
  -webkit-backdrop-filter: blur(5px);
  border: 0.75px solid rgba(175, 175, 175, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(90, 90, 90, 0.3);
  //color: rgb(216 214 214);
  font-weight: 500;
}

.history {
  background: repeating-radial-gradient(
      rgba(36, 87, 159, 0.25),
      transparent 0.0001px
    ),
    rgba(110, 110, 110, 0.45);
  border: 0.75px solid rgba(175, 175, 175, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(90, 90, 90, 0.3);

  // align-items: center;
  // justify-content: center;
  grid-column: 3/8;
  grid-row: 6/12;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  color: rgb(216 214 214);
  font-weight: 500;
}
.cover {
  background: repeating-radial-gradient(
      rgba(36, 87, 159, 0.25),
      transparent 0.0001px
    ),
    rgba(110, 110, 110, 0.45);
  border: 0.75px solid rgba(175, 175, 175, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(90, 90, 90, 0.3);
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 8/12;
  grid-row: 3/6;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  color: rgb(216, 214, 214);
  overflow: hidden;
}
.prompt {
  background: repeating-radial-gradient(
      rgba(36, 87, 159, 0.25),
      transparent 0.0001px
    ),
    rgba(110, 110, 110, 0.45);
  border: 0.75px solid rgba(175, 175, 175, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(90, 90, 90, 0.3);
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
}
.output {
  background: repeating-radial-gradient(
      rgba(36, 87, 159, 0.25),
      transparent 0.0001px
    ),
    rgba(110, 110, 110, 0.45);
  border: 0.75px solid rgba(175, 175, 175, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(90, 90, 90, 0.3);
  display: grid;
  align-items: center;
  grid-column: 12/20;
  grid-row: 3/6;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
.duration {
  background: repeating-radial-gradient(
      rgba(36, 87, 159, 0.25),
      transparent 0.0001px
    ),
    rgba(110, 110, 110, 0.45);
  border: 0.75px solid rgba(175, 175, 175, 0.6);
  box-shadow: inset 0px 0px 50px 0px rgba(90, 90, 90, 0.3);
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 20/23;
  grid-row: 3/6;
  border-radius: 15px;
  margin: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
</style>
