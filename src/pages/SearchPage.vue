<template>
  <div :class="$style.desktop21Dark">
    <div :class="$style.backgroundImg">
      <div :class="$style.ellipseParent">
        <div :class="$style.frameChild" />
        <div :class="$style.frameItem" />
        <div :class="$style.frameInner" />
      </div>
      <section :class="$style.frameParent">
        <div :class="$style.frameGroup">
          <div :class="$style.searchBarWrapper">
            <div :class="$style.searchBar">
              <q-input
                :class="$style.customInput"
                v-model="text"
                :dense="dense"
                @keyup.enter="handleEnter"
              />
              <q-btn-toggle
                :class="$style.searchToggle"
                v-model="model"
                no-caps
                rounded
                unelevated
                toggle-color="primary"
                color="white"
                text-color="primary"
                size="lg"
                :options="[
                  { label: '語意', value: 'one' },
                  { label: '關鍵字', value: 'two' },
                ]"
              />
            </div>
          </div>
          <div :class="$style.resultBlock">
            <div
              v-for="(result, index) in store.searchResults.slice(0, 5)"
              :key="index"
              :class="$style.textSection"
            >
              <div @click="handleResultClick(result)">
                {{ result.name }}
              </div>
            </div>

            <div :class="$style.textSection" v-if="store.showDummy">
              Result 1...
            </div>
            <div :class="$style.textSection" v-if="store.showDummy">
              Result 2...
            </div>
            <div :class="$style.textSection" v-if="store.showDummy">
              Result 3...
            </div>
            <div :class="$style.textSection" v-if="store.showDummy">
              Result 4...
            </div>
            <div :class="$style.textSection" v-if="store.showDummy">
              Result 5...
            </div>
          </div>
        </div>
        <div :class="$style.musicCover" id="musicCover">
          <div
            style="
              background-color: rgba(0, 0, 0, 0.5);
              height: 100%;
              width: 100%;
              justify-content: center;
              border-radius: 45px;
            "
          >
            <div
              class="upload-bg"
              style="background-color: rgba(0, 0, 0, 0.5); border-radius: 45px"
            >
              <UploadMusic @upload-success="handleUploadSuccess" />
            </div>
            <!-- <q-uploader
            :class="$style.uploadBotton"
            align="center"
            style="max-width: 300px; border-radius: 15px"
            url="http://127.0.0.1:9988/musicgen_generate_music/music_storage/upload/"
            label="Restricted to Audio"
            dark
            accept=".wav, audio/*"
            @rejected="onRejected"
            @uploaded="handleAudioSearch"
          /> -->
            <audioPlayer :class="$style.audioPlayer" />
          </div>
        </div>
      </section>
      <section :class="$style.promptBlock">
        <div :class="$style.promptBlockContainer">
          <div :class="$style.descriptionText">{{ desc }}</div>
          <q-btn
            unelevated
            rounded
            dense
            label="使用"
            :class="$style.promptButton"
            @click="goGenerate(store.prompt)"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "SearchPage",
});
import UploadMusic from "src/components/UploadMusic.vue";
import { useRouter } from "vue-router";
const router = useRouter();

import axios from "axios";
import { useMusicGenStore } from "../store/musicGenStore";
const store = useMusicGenStore();
const desc = ref("Prompt ..........");
import { watch, onMounted } from "vue";
import { defineAsyncComponent, ref } from "vue";
import audioPlayer from "src/components/audioPlayer.vue";

// const searchResults = ref([]);
// Using defineAsyncComponent to handle the dynamic import
const MusicPlayer = defineAsyncComponent(() =>
  import("components/audioPlayer").catch((error) => {
    console.error("Failed to load MusicPlayer component", error);
    // Optionally, return a fallback component or perform some error handling here
  })
);

onMounted(() => {
  console.log("mounted");
  watch(store.latest_audiofile_name == "classical.00000.wav", (newVal) => {
    if (newVal) {
      console.log(newVal);
    }
    console.log("handleAudioSearch");
    store.update_showDummy(false);
    store.searchResults = dummyAudioSearchResult;
    showReal.value = true;
    console.log("showReal:", showReal.value);
  });
});

const text = ref("");
const ph = ref("");
const dense = ref(false);
const model = ref("one");

// watch(model, (newVal) => {
//   if (newVal) {
//     console.log(newVal);
//   }
// });

// watch(text, (newVal) => {
//   if (newVal) {
//     console.log(newVal);
//   }
// });

const handleEnter = () => {
  console.log("Enter pressed");

  if (model.value === "one") {
    searchItemsBySemestic();

    store.update_showDummy(false);
    console.log("showReal:", showReal.value);
  } else {
    searchItemsByPrompt();

    store.update_showDummy(false);
    console.log("showReal:", showReal.value);
  }
  searchItemsBySemestic();
};

const searchItemsBySemestic = async () => {
  console.log("searchItemsBySemestic");
  try {
    // 发起 API 请求
    const response = await axios.get(
      `http://127.0.0.1:9988/sematic_search/items/${text.value}`,
      {
        params: {
          limit: 10,
        },
      }
    );

    // 处理成功的响应
    store.searchResults = response.data;
    console.log(store.searchResults);
  } catch (error) {
    // 处理错误
    console.error("Error searching items:", error);
  }
};

const searchItemsByPrompt = async () => {
  console.log("searchItemsByPrompt");
  try {
    // 发起 API 请求
    const response = await axios.get(
      `http://127.0.0.1:9988//sematic_search/items/prompt/semantic/${text.value}`,
      {
        params: {
          limit: 10,
        },
      }
    );

    // 处理成功的响应
    store.searchResults = response.data;
    console.log(store.searchResults);
  } catch (error) {
    // 处理错误
    console.error("Error searching items:", error);
  }
};

const handleResultClick = (result) => {
  console.log("Result clicked:", result);
  desc.value = result.prompt;
  console.log(result.file_name);
  store.update_prompt(result.prompt);
  store.update_latest_audiofile_name(result.file_name);
};

const goGenerate = (prompt_value) => {
  store.update_searchHelper_submitPrompt(prompt_value);
  console.log("goGenerate");
  console.log(prompt_value);
  router.push({ path: "/generate", state: { prompt_value: prompt_value } });
};
</script>

<style module>
.customInput {
  width: stretch;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  bottom: 8%;
  color: white;
  font-size: var(--font-size-18xl);
}
.searchToggle {
  width: auto;
  min-width: 175px;
  align-self: stretch;
  bottom: 5%;
  margin-right: 1%;
  position: relative;
  color: white;
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
  height: 76px;
  flex: 1;
  border-radius: var(--br-21xl);
  background-color: rgba(211, 220, 235, 0.8);
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--color-darkslategray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-mini) 0 var(--padding-mini) var(--padding-31xl-6);
  position: relative;
  max-width: 100%;
}
.searchBarWrapper {
  align-self: stretch;
  height: 76px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  padding: 0px 0px 0px var(--padding-10xs);
  box-sizing: border-box;
  max-width: 100%;
}
.resultBlock {
  align-self: stretch;
  padding: 10px 48px 10px 48px;
  height: 386px;
  position: relative;
  border-radius: var(--br-21xl);
  background-color: rgb(15, 6, 23, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1.5px solid rgba(132, 146, 166, 0.6);
  box-sizing: border-box;
  mix-blend-mode: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  gap: calc((386px-20px-42px * 5) / 4);
}
.textSection {
  color: #d3dceb;
  font-family: "Open Sans";
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
}
.textSection:hover {
  color: white;
  font-family: "Open Sans";
  font-size: 43px;
  font-style: normal;
  font-weight: 700;
}
.descriptionText {
  height: 100%;
  width: 80%;
  margin: auto 20px auto 40px;
  padding: 7px;
  color: white;
  font-family: "Outfit";
  font-size: 36px;
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
  justify-content: space-between;
  max-width: 100%;
}
.promptButton {
  width: 10%;
  font-size: 28px; /* adjust as needed */
  margin-right: 20px;
  background-color: var(--primary-primary400);
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
  opacity: 0.95;
  height: 477px;
  width: 477px;
  position: relative;
  border-radius: var(--spacing-xl);
  background-color: var(--color-darkslategray-100);
  border: 1.5px solid rgba(132, 146, 166, 0.6);
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
  border-radius: 15%;
}
.q-uploader__header {
  border-radius: 15px 15px 0 0;
}
.audioPlayer {
  width: 98%;
  height: auto;
}
.frameParent {
  width: auto;
  /*max-height: 60vh;*/
  margin-top: 2%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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
  height: 95px;
  position: relative;
  border-radius: var(--spacing-xl);
  background-color: var(--color-gray);
  border: 1.5px solid rgba(132, 146, 166, 0.5);
  box-sizing: border-box;
  max-width: 100%;
  background-color: rgb(15, 6, 23, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  animation: slideInTop 1s;
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
.backgroundImg {
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url("src/assets/BG_Test.webp");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*padding: 10vw var(--padding-xl) 4vw;*/
  box-sizing: border-box;
  gap: var(--gap-mini);
  line-height: normal;
  letter-spacing: normal;
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
  justify-content: center;
  /*padding: 10vw var(--padding-xl) 4vw;*/
  box-sizing: border-box;
  gap: var(--gap-mini);
  line-height: normal;
  letter-spacing: normal;
  z-index: 0;
}

@keyframes slideInTop {
  from {
    opacity: 0;
    transform: translateY(-30%);
  }

  to {
    opacity: 100;
    transform: translateY(0%);
  }
}

@media (min-width: 1441px) {
  .promptBlock {
    width: 80vw; /* adjust width for large screens */
    height: 10vh; /* adjust height for large screens */
  }

  .frameParent {
    width: 80vw; /* adjust width for large screens */
  }

  .musicCover {
    width: 50vh; /* adjust width for large screens */
    height: 50vh; /* adjust height for large screens */
  }

  .resultBlock {
    height: calc(50vh - 91px); /* adjust height for large screens */
    gap: calc(({height} - (calc(50vh / 10)) * 5) / 5);
    padding: calc(({height} - (calc(50vh / 10)) * 5) / 5) 48px; /* adjust padding for large screens */
  }

  .textSection {
    font-size: calc(50vh / 10); /* adjust font size for large screens */
  }

  .textSection:hover {
    font-size: calc(50vh / 10); /* adjust font size for large screens */
  }

  .descriptionText {
    font-size: calc(10vh / 3); /* adjust font size for large screens */
  }
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

.upload-bg {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 10px;
  color: white;
  max-width: 100%;
  max-height: 100%;
}
</style>
