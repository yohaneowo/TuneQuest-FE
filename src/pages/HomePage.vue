<template>
  <q-page>
    <div :class="$style.homepage">
      <div :class="$style.ellipseParent">
        <div :class="$style.frameChild" />
        <div :class="$style.frameItem" />
        <div :class="$style.frameInner" />
      </div>
      <img
        :class="$style.homepageChild"
        alt=""
        src="/src/assets/MusicGen-BGremove-ColorInvert_ReOrder.png"
      />
      <div :class="$style.frameParent">
        <div :class="$style.aRevolutionaryMusicToolParent">
          <div :class="$style.aRevolutionaryMusic">
            A Revolutionary Music Tool.
          </div>
          <div :class="$style.tunequest">TuneQuest</div>
        </div>
        <div :class="$style.wrapper">
          <div :class="$style.div">生成屬於您獨一無二的音樂。</div>
        </div>
        <div :class="$style.bottoms">
          <div :class="$style.generateWrapper">
            <div :class="$style.generate" @click="navigateToPage('/generate')">
              生成 Generate
            </div>
          </div>
          <div :class="$style.searchWrapper">
            <div :class="$style.generate" @click="navigateToPage('/search')">
              查詢 Search
            </div>
          </div>
          <div :class="$style.generateWrapper">
            <div :class="$style.generate" @click="navigateToPage('/recognize')">
              上傳 Upload
            </div>
          </div>
          <div :class="$style.searchWrapper">
            <div
              :class="$style.generate"
              @click="navigateToPage('/searchhelper')"
            >
              題詞小幫手 Search Helper
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToPage = (path) => {
  router.push(path);
};
</script>

<style module>
.frameChild {
  width: 464px;
  position: relative;
  border-radius: 50%;
  background-color: #8593e8;
  filter: blur(200px);
  height: 462px;
  opacity: 0.2;
}
.frameItem {
  width: 467px;
  position: relative;
  border-radius: 50%;
  background-color: #5d6ef3;
  filter: blur(250px);
  height: 467px;
  opacity: 0.2;
}
.frameInner {
  width: 446px;
  position: relative;
  border-radius: 50%;
  background-color: #fc4ff6;
  filter: blur(200px);
  height: 446px;
  opacity: 0.2;
}
.ellipseParent {
  margin: 0 !important;
  position: absolute;
  top: 652px;
  left: calc(50% - 688.5px);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  z-index: 0;
}
.homepageChild {
  width: auto;
  height: auto;
  max-width: 90vw; /* viewport width */
  max-height: 86vh; /* viewport height */
  object-fit: contain;
  position: absolute;
  right: 20px;
  bottom: 10px;
  z-index: 1;
}
.aRevolutionaryMusic {
  width: auto;
  align-self: stretch;
  position: relative;
  text-align: left;
  letter-spacing: 0.02em;
  font-weight: 500;
  background: linear-gradient(
    90deg,
    #ff3bff,
    #ecbfbf 38.02%,
    #5c24ff 75.83%,
    #d94fd5
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 5.125vw;
}
.tunequest {
  align-self: stretch;
  position: relative;
  letter-spacing: 0.02em;
  font-weight: 500;
  text-align: left;
  font-size: 4.525vw;
}
.aRevolutionaryMusicToolParent {
  width: auto;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-3xs) var(--padding-3xs)
    var(--padding-51xl);
}
.div {
  position: relative;
  letter-spacing: 0.72px;
  line-height: 33px;
}
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-8xs) 0px var(--padding-8xs) var(--padding-51xl);
  text-align: left;
  font-family: var(--font-open-sans);
  font-size: 1.525vw;
}
.generate {
  position: relative;
}
.generateWrapper {
  border-radius: var(--br-81xl);
  background-color: var(--color-black);
  border: 2px solid var(--color-fuchsia-100);
  box-sizing: border-box;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-13xl);
}
.generateWrapper:hover {
  background-color: rgba(194, 146, 210); /* Change to the color you want */
  transition: background-color 0.4s ease; /* Smooth transition */
}
.searchWrapper {
  border-radius: var(--br-81xl);
  background-color: var(--color-black);
  border: 2px solid var(--color-white);
  box-sizing: border-box;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-13xl);
}
.searchWrapper:hover {
  background-color: rgba(194, 146, 210); /* Change to the color you want */
  transition: background-color 0.4s ease; /* Smooth transition */
}
.bottoms {
  width: auto;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px var(--padding-13xl) var(--padding-51xl);
  gap: 10px;
  font-family: var(--font-space-grotesk);
  z-index: 999;
}
.frameParent {
  width: 100%;
  margin: 0 !important;
  position: relative;
  top: 10%;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
  z-index: 2;
}
.homepage {
  width: 100%;
  position: relative;
  background-color: var(--color-black);
  height: calc(100vh - 50px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-family: var(--font-outfit);
}

:root {
  /* fonts */
  --font-space-grotesk: "Space Grotesk";
  --font-open-sans: "Open Sans";
  --font-outfit: Outfit;

  /* font sizes */
  --font-size-xl: 20px;
  --font-size-61xl: 72px;

  /* Colors */
  --color-black: #000;
  --color-fuchsia-100: #ff3bff;
  --color-white: #fff;

  /* Paddings */
  --padding-mini: 15px;
  --padding-51xl: 70px;
  --padding-13xl: 32px;
  --padding-8xs: 5px;
  --padding-3xs: 10px;

  /* Border radiuses */
  --br-81xl: 100px;
}
</style>
