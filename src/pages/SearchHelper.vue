<template>
  <div :class="$style.searchHelper">
    <div :class="$style.ellipseParent">
      <div :class="$style.frameChild" />
      <div :class="$style.frameItem" />
      <div :class="$style.frameInner" />
    </div>
    <div :class="$style['search-container']">
      <div :class="$style['search-block']">
        <div :class="$style['text-section']">
          <div :class="$style['text-xl']">提示詞搜尋</div>
          <div :class="$style['text-sm']">
            輸入
            <div :class="$style.textBold">＠remix</div>
            <div :class="$style['text-sm']">使用RAG功能</div>
          </div>
        </div>
        <div :class="$style['search-input']">
          <q-input
            :input-style="{
              minHeight: '300px',
              minWidth: '32.5vw',
              fontSize: '18px',
            }"
            v-model="searchText"
            type="textarea"
            placeholder="輸入你想要的提示詞"
          />
        </div>
        <div :class="$style['buttons-container']">
          <button :class="$style['search-button']" @click="clearSearchText">
            清除
          </button>
          <button :class="$style['search-button']">搜尋</button>
        </div>
      </div>

      <div :class="$style['search-block']">
        <div :class="$style['text-section']">
          <div :class="$style['text-xl']">提示詞搜尋結果</div>
          <div :class="$style['text-sm']"></div>
        </div>
        <div :class="$style['search-input']">
          <q-input
            :input-style="{
              minHeight: '300px',
              minWidth: '32.5vw',
              fontSize: '18px',
            }"
            v-model="searchResult"
            type="textarea"
            placeholder="您的提示詞建議將顯示在這裡"
          />
        </div>
        <button :class="$style['search-button']">使用</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const searchText = ref("");
const searchResult = ref("");

function clearSearchText() {
  searchText.value = "";
}
</script>

<style module>
.searchHelper {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("src/assets/BG_Test.webp");
  background-size: cover;
  background-position: center;
  background-color: #101111;
}

.search-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.search-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background-color: rgb(15, 6, 23, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 20px 25px 20px 25px;
  margin: 0 10px;
}

.search-input {
  width: 37.5vw;
  height: 40vh;
  border-radius: 10px;
  background-color: rgba(235, 243, 255, 0.75);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid #ccc;
  padding: 25px;
  margin-bottom: 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.q-field__control {
  display: flex;
  align-items: center;
  height: 200px;
  font-size: 18px;
  width: 33vw;
}

.text-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;
}

.text-xl {
  font-size: 28px;
  font-weight: bold;
  color: #dde9fa;
}

.textBold {
  font-size: 22px;
  color: #d9e3f1;
  font-weight: 500;
}

.text-sm {
  font-size: 16px;
  color: #bdcee7;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

.buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin: 0 25px;
}

.search-button {
  width: stretch;
  height: 50px;
  border-radius: 16px;
  background-color: #869cc0;
  color: #fff;
  font-size: 24px;
  border: none;
  cursor: pointer;
}

.search-button:hover {
  width: stretch;
  height: 50px;
  border-radius: 16px;
  background-color: #7990af;
  transition: background-color 0.2s ease; /* Smooth transition */
  color: #fff;
  font-size: 24px;
  border: none;
  cursor: pointer;
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
</style>
