<template>
  <div :class="$style.homepage">
    <div :class="$style.ellipseParent">
      <div :class="$style.frameChild" />
      <div :class="$style.frameItem" />
      <div :class="$style.frameInner" />
    </div>
    <img
      :class="$style.homepageChild"
      alt=""
      src="src/assets/TuneQuest_HomePage_Pic.png"
    />
    <div :class="$style.frameParent">
      <div :class="$style.aRevolutionaryMusicToolParent">
        <div :class="$style.aRevolutionaryMusic">
          A Revolutionary Music Tool.
        </div>
        <div :class="$style.tunequest">TuneQuest</div>
      </div>
      <div :class="$style.wrapper">
        <div :class="$style.divText">生成屬於您獨一無二的音樂。</div>
      </div>
      <div :class="$style.bottoms">
        <div :class="$style.pagesSection">
          <div :class="$style.pagesTitle">生成 Generate</div>
          <div :class="$style.pagesDescription">
            使用劃時代的MusicGen，來生成屬於您的音樂吧！
          </div>
          <div :class="$style.bottomSection">
            <div :class="$style.searchWrapper">
              <div
                :class="$style.generate"
                @click="navigateToPage('/generate')"
              >
                生成
                <q-icon name="open_in_new" />
              </div>
            </div>
          </div>
        </div>
        <div :class="$style.pagesSection">
          <div :class="$style.pagesTitle">查詢 Search</div>
          <div :class="$style.pagesDescription">
            我們提供兩種搜尋方式，讓您查詢想要的音樂
          </div>
          <div :class="$style.bottomSection">
            <div :class="$style.searchWrapper">
              <div :class="$style.generate" @click="navigateToPage('/search')">
                查詢
                <q-icon name="open_in_new" />
              </div>
            </div>
          </div>
        </div>
        <div :class="$style.pagesSection">
          <div :class="$style.pagesTitle">上傳 Upload</div>
          <div :class="$style.pagesDescription">
            上傳您獨一無二的音樂，讓我們為您辨識曲風！
          </div>
          <div :class="$style.bottomSection">
            <div :class="$style.searchWrapper">
              <div
                :class="$style.generate"
                @click="navigateToPage('/recognize')"
              >
                上傳
                <q-icon name="open_in_new" />
              </div>
            </div>
          </div>
        </div>
        <div :class="$style.pagesSection">
          <div :class="$style.pagesTitle">題詞小幫手</div>
          <div :class="$style.pagesDescription">
            想不到確切的題詞嗎？我們讓您的題詞更符合目的！
          </div>
          <div :class="$style.bottomSection">
            <div :class="$style.searchWrapper">
              <div
                :class="$style.generate"
                @click="navigateToPage('/searchhelper')"
              >
                題詞小幫手
                <q-icon name="open_in_new" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});

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
.divText {
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
  text-align: right;
  font-family: var(--font-open-sans);
  font-size: 1.525vw;
}
.generate {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}
.generateWrapper {
  border-radius: var(--br-81xl);
  border: 1px solid rgba(255, 255, 255, 0.18);
  background-color: transparent;
  box-sizing: border-box;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
}
.generateWrapper:hover {
  background-color: rgba(194, 146, 210); /* Change to the color you want */
  transition: background-color 0.4s ease; /* Smooth transition */
  border: 1px solid var(--color-fuchsia-100);
}
q-icon {
  transition: all 0.3s linear;
}
.searchWrapper {
  border-radius: var(--br-81xl);
  border: 1px solid rgba(255, 255, 255, 0.18);
  background-color: transparent;
  box-sizing: border-box;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  text-decoration: none;
  transition: all 0.5s linear;
}
.searchWrapper:hover {
  background-color: rgba(238, 201, 202); /* Change to the color you want */
  transition: background-color 0.4s ease; /* Smooth transition */
  border: 2px solid var(--color-white);
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
  font-size: 1em;
  z-index: 999;
}

.pagesSection {
  width: 250px;
  height: 250px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background-color: rgba(36, 29, 47, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 20px 20px 15px 20px;
  margin: 0 10px 0 0;
  z-index: 20;
}
.pagesTitle {
  width: auto;
  align-self: stretch;
  position: relative;
  text-align: left;
  letter-spacing: 0.02em;
  font-weight: 500;
  color: #ecbfbf;
  font-size: 2vw;
  margin-bottom: 10px;
}
.pagesDescription {
  width: auto;
  align-self: stretch;
  position: relative;
  letter-spacing: 0.72px;
  line-height: 33px;
  height: 150px;
  font-size: 16px;
  text-align: left;
}
.bottomSection {
  width: 100%;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: right;
  justify-content: end;
  z-index: 999;
}
.frameParent {
  width: 100%;
  margin: 0 !important;
  position: relative;
  top: 9%;
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
  height: 100vh;
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

@media (max-width: 768px) {
  .tunequest {
    font-size: 8vw; /* adjust font size for small screens */
  }

  .aRevolutionaryMusicToolParent {
    padding: var(--padding-3xs); /* adjust padding for small screens */
  }

  .divText {
    line-height: 1.5em; /* adjust line height for small screens */
  }

  .wrapper {
    flex-direction: column; /* stack items vertically on small screens */
    font-size: 4vw; /* adjust font size for small screens */
    padding: var(--padding-3xs); /* adjust padding for small screens */
  }

  .bottoms {
    padding: var(--padding-13xl) 0px var(--padding-13xl) var(--padding-8xs);
    font-size: 0.75em; /* adjust font size for small screens */
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .tunequest {
    font-size: 6vw; /* adjust font size for medium screens */
  }

  .aRevolutionaryMusicToolParent {
    padding: var(--padding-2xs); /* adjust padding for medium screens */
  }

  .divText {
    line-height: 1.2em; /* adjust line height for medium screens */
  }

  .wrapper {
    flex-direction: row; /* align items horizontally on medium screens */
    font-size: 3vw; /* adjust font size for medium screens */
    padding: var(--padding-2xs); /* adjust padding for medium screens */
  }

  .bottoms {
    padding: var(--padding-13xl) 0px var(--padding-13xl) var(--padding-8xs);
    font-size: 0.875em; /* adjust font size for small screens */
  }
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
