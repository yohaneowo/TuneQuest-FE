<template>
  <div :class="$style.desktop21Dark">
    <div :class="$style.ellipseParent">
      <div :class="$style.frameChild" />
      <div :class="$style.frameItem" />
      <div :class="$style.frameInner" />
    </div>
    <section :class="$style.frameParent">
      <div :class="$style.frameGroup">
        <div :class="$style.searchBarWrapper">
          <div :class="$style.searchBar">
            <div :class="$style.searchBar1" />
            <q-input
              :class="$style.customInput"
              v-model="text"
              :dense="dense"
            />
            <q-btn-toggle
              :class="$style.searchToggle"
              v-model="model"
              class="searchtoggle"
              no-caps
              rounded
              unelevated
              toggle-color="primary"
              color="white"
              text-color="primary"
              size="1.375vw"
              :options="[
                { label: '語意', value: 'one' },
                { label: '關鍵字', value: 'two' },
              ]"
            />
          </div>
        </div>
        <div :class="$style.resultBlock">
          <div :class="$style.textSection">Result 1...</div>
          <div :class="$style.textSection">Result 2...</div>
          <div :class="$style.textSection">Result 3...</div>
          <div :class="$style.textSection">Result 4...</div>
          <div :class="$style.textSection">Result 5...</div>
        </div>
      </div>
      <div :class="$style.musicCover" id="musicCover">
        <q-uploader
          :class="$style.uploadBotton"
          align="center"
          style="max-width: 300px"
          url="http://localhost:4444/upload"
          label="Restricted to Audio"
          dark
          accept=".wav, audio/*"
          @rejected="onRejected"
        />
        <audioPlayer :class="$style.audioPlayer" />
      </div>
    </section>
    <section :class="$style.promptBlock">
      <div :class="$style.promptBlockContainer">
        <div :class="$style.descriptionText">Description...</div>
        <q-btn
          unelevated
          rounded
          color="primary"
          label="使用"
          :class="$style.promptButton"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
defineOptions({
  name: "SearchPage",
});

import { defineAsyncComponent, ref } from "vue";
import audioPlayer from "src/components/audioPlayer.vue";

// Using defineAsyncComponent to handle the dynamic import
const MusicPlayer = defineAsyncComponent(() =>
  import("components/audioPlayer").catch((error) => {
    console.error("Failed to load MusicPlayer component", error);
    // Optionally, return a fallback component or perform some error handling here
  })
);

const isMusicPlayerLoaded = ref(false);

const text = ref("");
const ph = ref("");
const dense = ref(false);
const model = ref("one");
</script>

<style module>
.searchBar1 {
  width: 100%;
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0%;
  right: -0.85%;
  bottom: -7.69%;
  left: 0%;
  border-radius: var(--br-21xl);
  background-color: var(--color-gray);
  border: 1px solid var(--color-darkslategray-100);
  box-sizing: border-box;
  display: none;
  mix-blend-mode: normal;
  z-index: 0;
}
.customInput {
  width: 65%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  bottom: 5%;
  color: white;
  font-size: var(--font-size-26xl);
}
.searchToggle {
  padding: 0 2.5% 0 3%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
  bottom: 0;
  color: white;
  font-size: var(--font-size-26xl);
}
.b {
  width: 47.97%;
  position: absolute;
  margin: 0 !important;
  top: 19.23%;
  left: 7.15%;
  line-height: 120%;
  display: flex;
  align-items: center;
  z-index: 1;
}
.searchBar {
  height: 84px;
  flex: 1;
  border-radius: var(--br-21xl);
  background-color: var(--color-lightslategray-100);
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-darkslategray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mini) 0 var(--padding-mini) var(--padding-31xl-6);
  position: relative;
  max-width: 100%;
}
.searchBarWrapper {
  align-self: stretch;
  height: 78px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-10xs);
  box-sizing: border-box;
  max-width: 100%;
}
.resultBlock {
  align-self: stretch;
  padding-top: 1%;
  height: 406px;
  position: relative;
  border-radius: var(--br-21xl);
  background-color: rgb(15, 6, 23, 0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid var(--color-lightslategray-100);
  box-sizing: border-box;
  mix-blend-mode: normal;
}
.textSection {
  margin-left: 40px;
  padding: 8px;
  color: #6b7c94;
  font-family: "Open Sans";
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
}
.textSection:hover {
  margin-left: 40px;
  padding: 8px;
  color: white;
  font-family: "Open Sans";
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
}
.descriptionText {
  height: 100%;
  width: 80%;
  margin: auto 40px;
  padding: 7px;
  color: white;
  font-family: "Outfit";
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center; /* align text vertically */
  z-index: 1;
}
.promptBlockContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
}
.promptButton {
  width: 10%;
  padding: 10px 20px; /* adjust as needed */
  font-size: 28px; /* adjust as needed */
  margin-right: 1vw;
}
.frameGroup {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lgi);
  min-width: 462px;
  max-width: 100%;
}
.musicCover {
  background-image: url("src/assets/defaultCover.jpg");
  background-size: cover;
  background-position: center;
  height: 500px;
  width: 500px;
  position: relative;
  border-radius: var(--spacing-xl);
  background-color: var(--color-darkslategray-100);
  border: 4px solid var(--color-lightslategray-100);
  box-sizing: border-box;
  min-width: 500px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.uploadBotton {
  width: 100%;
  height: auto;
  margin: 20% 20%;
  gap: var(--gap-mini);
  max-width: 100%;
}
.audioPlayer {
  width: 98%;
  height: auto;
}
.frameParent {
  width: auto;
  /*max-height: 60vh;*/
  margin-top: 7%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-mini);
  max-width: 80%;
  text-align: left;
  font-size: var(--tunequest-fe-ui-1-desktop-headings-heading-3-size);
  color: var(--color-slategray-100);
  font-family: var(--tunequest-fe-ui-1-desktop-headings-heading-3);
}
.promptBlock {
  width: 80%;
  max-width: 100%;
  height: 110px;
  position: relative;
  border-radius: var(--spacing-xl);
  background-color: var(--color-gray);
  border: 1px solid var(--color-lightslategray-100);
  box-sizing: border-box;
  max-width: 100%;
  background-color: rgb(15, 6, 23, 0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
.frameChild {
  width: 464px;
  position: relative;
  border-radius: 50%;
  background-color: #8593e8;
  filter: blur(300px);
  height: 562px;
  opacity: 0.15;
}
.frameItem {
  width: 467px;
  position: relative;
  border-radius: 20%;
  background-color: #5d6ef3;
  filter: blur(350px);
  height: 567px;
  opacity: 0.15;
}
.frameInner {
  width: 446px;
  position: relative;
  border-radius: 50%;
  background-color: #fc4ff6;
  filter: blur(300px);
  height: 546px;
  opacity: 0.15;
}
.ellipseParent {
  margin: 0 !important;
  position: absolute;
  top: 252px;
  left: calc(50% - 688.5px);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  z-index: 0;
}
.desktop21Dark {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: rgb(18, 19, 20);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /*padding: 10vw var(--padding-xl) 4vw;*/
  box-sizing: border-box;
  gap: var(--gap-mini);
  line-height: normal;
  letter-spacing: normal;
}

@media screen and (max-width: 1025px) {
  .musicCover {
    flex: 1;
  }

  .frameParent {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 975px) {
  .b {
    font-size: var(--tunequest-fe-ui-1-desktop-headings-heading-4-size);
    line-height: 38px;
  }
}
@media screen and (max-width: 725px) {
  .frameGroup {
    min-width: 100%;
  }

  .musicCover {
    min-width: 100%;
  }
}
@media screen and (max-width: 450px) {
  .b {
    font-size: var(--tunequest-fe-ui-1-desktop-body-feature-bold-size);
    line-height: 29px;
  }
}

:root {
  /* fonts */
  --tunequest-fe-ui-1-desktop-headings-heading-3: "Open Sans";
  --font-lora: Lora;
  --font-inter: Inter;

  /* font sizes */
  --font-size-sm: 14px;
  --font-size-29xl: 48px;
  --tunequest-fe-ui-1-desktop-headings-heading-3-size: 40px;
  --tunequest-fe-ui-1-desktop-body-feature-bold-size: 24px;
  --tunequest-fe-ui-1-desktop-headings-heading-4-size: 32px;
  --tunequest-fe-ui-1-desktop-headings-heading-1-size: 56px;
  --font-size-15xl: 34px;
  --font-size-26xl: 45px;
  --tunequest-fe-ui-1-desktop-body-hero-bold-size: 28px;
  --font-size-3xl: 22px;
  --font-size-lgi: 19px;
  --tunequest-fe-ui-1-desktop-body-highlight-bold-size: 18px;

  /* Colors */
  --primary-primary800: #47566b;
  --primary-primary900: #384454;
  --color-darkslategray-100: #343c48;
  --color-darkslategray-200: #2f3741;
  --color-darkslategray-300: #2d343e;
  --primary-primary1000: #29313d;
  --color-slategray-100: #6b7c94;
  --primary-primary600: #667b99;
  --color-slategray-200: #5b697e;
  --color-slategray-300: #566376;
  --dark-1: #566375;
  --color-silver: #aeb7c4;
  --color-gray: #0f0f0f;
  --color-darkgray-100: #98a4b4;
  --color-darkgray-200: #98a3b4;
  --color-white: #fff;
  --primary-primary400: #a9b5c6;
  --primary-primary200: #d4dae3;
  --primary-primary: #94a3b8;
  --color-lightslategray-100: #8492a6;
  --color-lightslategray-200: #8190a4;
  --primary-primary100: #eaedf1;

  /* Spacing */
  --spacing-l: 28px;
  --spacing-xl: 40px;
  --spacing-m: 14px;
  --spacing-ml: 20px;

  /* Gaps */
  --gap-xl: 20px;
  --gap-lgi: 19px;
  --gap-64xl-3: 83.3px;
  --gap-23xl: 42px;
  --gap-2xl: 21px;
  --gap-82xl: 101px;
  --gap-6xl: 25px;
  --gap-31xl: 50px;
  --gap-mini: 15px;
  --gap-4xl: 23px;
  --gap-xs: 12px;
  --gap-5xl: 24px;
  --gap-12xl-2: 31.2px;
  --gap-base: 16px;
  --gap-33xl: 52px;
  --gap-7xl: 26px;
  --gap-134xl: 153px;
  --gap-57xl: 76px;

  /* Paddings */
  --padding-65xl: 84px;
  --padding-47xl: 66px;
  --padding-23xl: 42px;
  --padding-14xl: 33px;
  --padding-lgi: 19px;
  --padding-xl: 20px;
  --padding-2xs: 11px;
  --padding-21xl-1: 40.1px;
  --padding-xs: 12px;
  --padding-26xl: 45px;
  --padding-18xl: 37px;
  --padding-3xl: 22px;
  --padding-12xs: 1px;
  --padding-mid: 17px;
  --padding-5xl: 24px;
  --padding-25xl: 44px;
  --padding-93xl: 112px;
  --padding-52xl: 71px;
  --padding-11xs: 2px;
  --padding-91xl: 110px;
  --padding-9xs: 4px;
  --padding-139xl: 158px;
  --padding-32xl: 51px;
  --padding-22xl-2: 41.2px;
  --padding-10xs: 3px;
  --padding-10xl: 29px;
  --padding-smi: 13px;
  --padding-4xl: 23px;
  --padding-mini: 15px;
  --padding-31xl-6: 50.6px;
  --padding-16xl: 35px;
  --padding-4xs: 9px;
  --padding-121xl: 140px;
  --padding-2xl: 21px;
  --padding-22xl: 41px;
  --padding-42xl: 61px;
  --padding-mini-5: 14.5px;
  --padding-56xl: 75px;
  --padding-53xl: 72px;
  --padding-10xs-1: 2.1px;
  --padding-55xl-9: 74.9px;
  --padding-6xl-2: 25.2px;

  /* Border radiuses */
  --br-21xl: 40px;
  --br-9xl: 28px;
  --br-7xs: 6px;
  --br-sm: 14px;
  --br-xl: 20px;
}
</style>
