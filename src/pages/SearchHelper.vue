<template>
  <div class="search-helper">
    <div class="search-container">
      <div class="search-block">
        <div class="text-section">
          <div class="text-xl">提示詞搜尋</div>
          <div class="text-sm">輸入＠remix使用RAG功能</div>
        </div>
        <div class="search-input">
          <q-input
            :input-style="{ minHeight: '300px' }"
            v-model="searchText"
            type="textarea"
            placeholder="輸入你想要的提示詞"
          />
        </div>
        <div class="buttons-container">
          <button class="search-button" @click="clearSearchText">清除</button>
          <button class="search-button">搜尋</button>
        </div>
      </div>

      <div class="search-block">
        <div class="text-section">
          <div class="text-xl">提示詞搜尋結果</div>
          <div class="text-sm"></div>
        </div>
        <div class="search-input">
          <q-input
            :input-style="{ minHeight: '300px' }"
            v-model="searchResult"
            type="textarea"
            placeholder="您的提示詞建議將顯示在這裡"
          />
        </div>
        <button class="search-button">使用</button>
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

<style>
.search-helper {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("src/assets/colorful_bg_test.jpg");
  background-size: cover;
  background-position: center;
}

.search-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.search-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background-color: rgb(169, 181, 198, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 20px 20px 15px 20px;
  margin: 0 10px;
}

.search-input {
  width: 37.5vw;
  height: 40vh;
  border-radius: 10px;
  background-color: rgba(235, 243, 255, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid #ccc;
  padding: 25px;
  margin-bottom: 15px;
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
  font-size: 20px;
  font-weight: bold;
  color: #343c48;
}

.text-sm {
  font-size: 14px;
  color: #47566b;
}

.buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 10px;
}

.search-button {
  width: 120px;
  height: 50px;
  border-radius: 32px;
  background-color: #566375;
  color: #fff;
  font-size: 24px;
  border: none;
  cursor: pointer;
}

.search-button:hover {
  width: 120px;
  height: 50px;
  border-radius: 32px;
  background-color: #667b99;
  transition: background-color 0.2s ease; /* Smooth transition */
  color: #fff;
  font-size: 24px;
  border: none;
  cursor: pointer;
}
</style>
