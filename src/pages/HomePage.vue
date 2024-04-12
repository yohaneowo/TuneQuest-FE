<template>
  <div :class="$style.homepage">
    <section :class="$style.ellipseParent">
      <div :class="$style.frameChild" />
      <div :class="$style.frameItem" />
      <div :class="$style.frameInner" />
    </section>
    <section :class="$style.homepageInner">
      <div :class="$style.frameParent">
        <div :class="$style.aRevolutionaryMusicToolParent">
          <div :class="$style.aRevolutionaryMusic">
            A Revolutionary Music Tool.
          </div>
          <div :class="$style.tunequestWrapper">
            <div :class="$style.tunequest">TuneQuest</div>
          </div>
        </div>
        <div :class="$style.textFastWrapper">
          <div :class="$style.textCenter">Our technology performing fast.</div>
        </div>
      </div>
    </section>
    <section :class="$style.themePictureParent">
      <img
        :class="$style.themePicture"
        loading="lazy"
        alt=""
        src="src/assets/themePicture.png"
      />
      <div :class="$style.frameGroup">
        <button
          :class="$style.generateWrapper"
          @click="$router.push('/generate')"
        >
          <div :class="$style.generate">生成 Generate</div>
        </button>
        <button :class="$style.searchWrapper">
          <div :class="$style.search">查詢 Search</div>
        </button>
        <button
          :class="$style.uploadWrapper"
          @click="$router.push('/recognize')"
        >
          <div :class="$style.upload">上傳 Upload</div>
        </button>
      </div>
    </section>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
});
</script>

<style module>
.frameChild {
  height: 462px;
  flex: 1;
  position: relative;
  border-radius: 50%;
  background-color: rgba(133, 147, 232, 0.2);
  filter: blur(200px);
  min-width: 302px;
  max-width: 100%;
}
.frameItem {
  height: 467px;
  flex: 1;
  position: relative;
  border-radius: 50%;
  background-color: rgba(93, 110, 243, 0.2);
  filter: blur(250px);
  min-width: 304px;
  max-width: 100%;
}
.frameInner {
  height: 446px;
  width: 446px;
  position: relative;
  border-radius: 50%;
  background-color: rgba(252, 79, 246, 0.2);
  filter: blur(200px);
  max-width: 100%;
}
.ellipseParent {
  width: 1377px;
  margin: 0 !important;
  position: absolute;
  bottom: -2px;
  left: calc(50% - 688.5px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  row-gap: 20px;
  max-width: 100%;
}
.aRevolutionaryMusic {
  height: 101px;
  position: relative;
  align-items: center;
  justify-content: center;
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
  display: inline-block;
}
.tunequest {
  position: relative;
  letter-spacing: 0.02em;
  font-weight: 500;
}
.tunequestWrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-3xl) 0px var(--padding-xl);
  text-align: left;
}
.aRevolutionaryMusicToolParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.textCenter {
  width: 723px;
  position: relative;
  letter-spacing: 0.72px;
  line-height: 33px;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
}
.textFastWrapper {
  width: 989px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-xl);
  font-family: var(--font-open-sans);
}
.frameParent {
  width: 1008px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  max-width: 100%;
}
.homepageInner {
  width: 1590px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  max-width: 100%;
  flex-shrink: 0;
  text-align: center;
  font-size: var(--font-size-61xl);
  color: var(--color-white);
  font-family: var(--font-outfit);
}
.themePicture {
  height: 619px;
  flex: 1;
  position: relative;
  bottom: 0;
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  z-index: 2;
}
.generate {
  width: 134px;
  position: relative;
  font-size: var(--font-size-xl);
  font-family: var(--font-space-grotesk);
  color: var(--color-white);
  text-align: center;
  display: inline-block;
}
.generateWrapper {
  cursor: pointer;
  border: 2px solid var(--color-fuchsia-100);
  padding: var(--padding-3xl) var(--padding-11xl);
  background-color: var(--color-black);
  width: 198px;
  border-radius: var(--br-81xl);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 129px;
  white-space: nowrap;
  z-index: 2;
}
.generateWrapper:hover {
  background-color: var(--color-darkslategray);
  border: 2px solid var(--color-fuchsia-200);
  box-sizing: border-box;
}
.search {
  width: 113px;
  position: relative;
  font-size: var(--font-size-xl);
  font-family: var(--font-space-grotesk);
  color: var(--color-white);
  text-align: center;
  display: inline-block;
  min-width: 113px;
}
.searchWrapper {
  cursor: pointer;
  border: 2px solid var(--color-white);
  padding: var(--padding-3xl) var(--padding-11xl);
  background-color: var(--color-black);
  width: 177px;
  border-radius: var(--br-81xl);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  z-index: 2;
}
.searchWrapper:hover {
  background-color: var(--color-darkslategray);
  border: 2px solid #e6e6e6;
  box-sizing: border-box;
}
.upload {
  width: 113px;
  position: relative;
  font-size: var(--font-size-xl);
  font-family: var(--font-space-grotesk);
  color: var(--color-white);
  text-align: center;
  display: inline-block;
  min-width: 113px;
}
.uploadWrapper {
  cursor: pointer;
  border: 2px solid var(--color-fuchsia-100);
  padding: var(--padding-3xl) var(--padding-11xl);
  background-color: var(--color-black);
  width: 177px;
  border-radius: var(--br-81xl);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  z-index: 3;
}
.uploadWrapper:hover {
  background-color: var(--color-darkslategray);
  border: 2px solid var(--color-fuchsia-200);
  box-sizing: border-box;
}
.frameGroup {
  width: 586px;
  margin: 0 !important;
  position: absolute;
  top: -9px;
  left: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 17px;
  max-width: 100%;
  z-index: 3;
}
.themePictureParent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 100%;
  flex-shrink: 0;
  z-index: 2;
}
.homepage {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: var(--color-black);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 256px 59px 545px;
  box-sizing: border-box;
  gap: 40px;
  line-height: normal;
  letter-spacing: normal;
  z-index: 1;
}

@media screen and (max-width: 1225px) {
  .homepage {
    height: auto;
  }
}
@media screen and (max-width: 1050px) {
  .homepage {
    padding-left: var(--padding-10xl);
    padding-right: var(--padding-10xl);
    box-sizing: border-box;
  }
}
@media screen and (max-width: 750px) {
  .aRevolutionaryMusic {
    font-size: var(--font-size-21xl);
  }

  .tunequest {
    font-size: var(--font-size-21xl);
  }
}
@media screen and (max-width: 450px) {
  .aRevolutionaryMusic {
    font-size: var(--font-size-5xl);
  }

  .tunequest {
    font-size: var(--font-size-5xl);
  }

  .ourTechnologyPerforming {
    font-size: 16px;
    line-height: 26px;
  }

  .homepage {
    gap: 20px;
  }
}

body {
  margin: 0;
  line-height: normal;
}

:root {
  /* fonts */
  --font-space-grotesk: "Space Grotesk";
  --font-open-sans: "Open Sans";
  --font-outfit: Outfit;

  /* font sizes */
  --font-size-xl: 20px;
  --font-size-61xl: 68px;
  --font-size-5xl: 24px;
  --font-size-21xl: 40px;

  /* Colors */
  --color-black: #000;
  --color-fuchsia-100: #ff3bff;
  --color-fuchsia-200: #e621e6;
  --color-darkslategray: #333;
  --color-white: #fff;

  /* Paddings */
  --padding-10xl: 29px;
  --padding-3xl: 22px;
  --padding-11xl: 30px;
  --padding-xl: 20px;

  /* Border radiuses */
  --br-81xl: 100px;
}
</style>
