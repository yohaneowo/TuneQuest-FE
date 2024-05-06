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
          <div :class="$style['text-xl']">提詞建議</div>
          <div :class="$style['text-sm']">
            輸入
            <div :class="$style.textBold">＠remix</div>
            <div :class="$style['text-sm']">
              (輸入＠Remix，從生成歷史提供建議)
            </div>
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
            placeholder="輸入一些想法，由LLM來為您產生提詞建議"
          />
        </div>
        <div :class="$style['buttons-container']">
          <button :class="$style['search-button']" @click="clearSearchText">
            清除
          </button>
          <button
            :class="$style['search-button']"
            @click="getPromptSuggestions"
          >
            提交
          </button>
        </div>
      </div>

      <div :class="$style['search-block']">
        <div :class="$style['text-section']">
          <div :class="$style['text-xl']">回覆結果</div>
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
        <button
          :class="$style['search-button']"
          @click="goGenerate(searchResult)"
        >
          使用提示词去生成
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useMusicGenStore } from "../store/musicGenStore";
import { watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const store = useMusicGenStore();
const searchText = ref("");
const searchResult = ref("");
const getPromptSuggestions = async () => {
  try {
    if (searchText.value.includes("@remix")) {
      const response = await axios.post(
        "http://127.0.0.1:9988/prompt_assistant/remix/",
        {
          question: searchText.value, // 不要去除'@remix'
        }
      );
      console.log("result:", response.data);
      searchResult.value = response.data.full_response;
    } else {
      const response = await axios.post(
        "http://127.0.0.1:9988/prompt_assistant/suggest/",
        {
          question: searchText.value,
        }
      );
      console.log("result:", response.data);
      searchResult.value = response.data.full_response;
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
function clearSearchText() {
  searchText.value = "";
}

const goGenerate = (prompt_value) => {
  store.update_searchHelper_submitPrompt(prompt_value);
  console.log("goGenerate");
  console.log(prompt_value);
  router.push({ path: "/generate", state: { prompt_value: prompt_value } });
};
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
  animation: slideInTop 1s;
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
  color: #000;
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
  background-color: #92a6c7;
  color: #fff;
  font-size: 24px;
  border: none;
  cursor: pointer;
  transition: all 0.3s linear;
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
</style>
