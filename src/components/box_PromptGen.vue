<template>
  <div class="prompt">
    <div class="prompt-content">
      <q-input
        v-model="prompt"
        filled
        clearable
        type="textarea"
        label="請描述欲生成音樂的題詞。 Enter Prompt to Generate "
        hint="輸入文字或點擊下方推薦關鍵字。Enter in your own prompt text or Click the keyword tags "
        :shadow-text="textareaShadowText"
        @keydown="processTextareaFill"
        @focus="processTextareaFill"
        @input="handleInput"
        class="prompt-input"
      />
      <div class="tag-container">
        已選取關鍵字標籤：（點擊標籤可取消）
        <span
          v-for="tag in selectedTags"
          :key="tag"
          class="selected-tag"
          @click="removeTag(tag)"
          >{{ tag }}</span
        >
      </div>
      <div class="messy-tags">
        <span
          v-for="tag in displayedTags"
          :key="tag"
          class="tag"
          @click="addTag(tag)"
          >{{ tag }}</span
        >
      </div>
      <q-btn
        :ripple="{ center: true }"
        label="生成音樂"
        @click="submitPrompt"
        class="submit"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const prompt = ref("");
const tags = [
  "Mystical meditation",
  "cartoon ",
  "Tribal percussion ritual",
  "Ocean",
  "noise",
  "citypop",
  "Joyful holiday",
  "Lush acoustic ballad",
  "Soulful",
  "Groovy retro",
  "cyberpunk dystopia",
  "claps",
  "105 BPM",
  "Warm soft hug",
  "Dreamy Arpeggios",
  "Celestial Choir Voices",
  "Medieval Feast",
  "Vibrant Counterpoint",
  "staccacato",
  "walzer",
  "90bpm",
  "4/4",
  "Soulful Saxophone Solo",
  "Ambient Sound Design",
  "Laid-back Shuffle",
  "Funky Backbeat",
];
const selectedTags = ref([]);

const displayedTags = computed(() => {
  // Get a random subset of 8 tags
  const randomTags = shuffleArray(tags).slice(0, 8);
  return randomTags.filter((tag) => !selectedTags.value.includes(tag));
});

const addTag = (tag) => {
  selectedTags.value.push(tag);
  prompt.value += ` ${tag}`;
};

const removeTag = (tag) => {
  selectedTags.value = selectedTags.value.filter((t) => t !== tag);
  prompt.value = prompt.value.replace(` ${tag}`, "");
};

const handleInput = () => {
  // Update selected tags based on input text
  const inputTags = prompt.value.split(" ").filter((tag) => tag.trim() !== "");
  selectedTags.value = inputTags;
};

// Helper function to shuffle array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const outputComponent = ref(null); // 引用 output 組件的實例
const submitPrompt = () => {
  // Handle submit logic here
  console.log("Submitted prompt:", prompt.value);
  // 觸發 output 組件的 startGeneration 函數
  outputComponent.value.startGeneration();
};
</script>

<style lang="scss">
.prompt-content {
  max-width: 800px; // 設定最大寬度
  width: 100%; // 讓內容物撐滿容器寬度
  padding: 10px; // 設定內間距
  gap: 1rem;
  display: flex;
  flex-direction: column;
}

.prompt-input {
  min-width: 100%;
}
.textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  color: white;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 1rem 0;
  max-width: 100%; // 設定最大寬度
  overflow-x: auto; // 出現水平滾動條
  .selected-tag {
    background-color: $primary;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
}

.messy-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 100%; // 設定最大寬度
  overflow-x: auto; // 出現水平滾動條
  .tag {
    background-color: rgba(31, 36, 41, 0.75);
    padding: 5px 10px;
    border-radius: 15px;
    cursor: pointer;
  }
}

.submit {
  border-radius: 10px;
  position: absolute; // 使用絕對定位
  bottom: 20px;
  right: 60px;
  margin-top: 1rem;
  color: $primary;
  font-weight: 600;
  background: linear-gradient(45deg, rgb(111, 158, 211), rgb(228, 164, 196));
  min-height: 40px;
  min-width: 100px;
}
.prompt-input {
  color: $q-color-box; // 這裡設置的是整個 q-input 的文字顏色

  .q-field--filled {
    padding: 0 12px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    .q-field__control {
      color: $q-color-box; // 這裡設置 textarea 輸入文字的顏色
    }

    .q-field__marginal {
      color: $q-color-box; // 這裡設置 hint 文字的顏色
    }
  }

  .q-field__label {
    color: $q-color-box; // 這裡設置 label 文字的顏色
  }
  .q-field__native {
    color: white;
    font-weight: 400;
  }
  .q-field__messages > div {
    color: $q-color-box;
  }
}
</style>
