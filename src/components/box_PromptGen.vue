<template>
  <div
    class="prompt"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="prompt-content">
      <div v-if="isHovered" class="hover-border"></div>
      <q-input
        v-model="prompt"
        filled
        clearable
        type="textarea"
        color="second"
        label="Enter Prompt to Generate"
        hint="Enter in your own prompt text or Click the keyword tags "
        :shadow-text="textareaShadowText"
        @keydown="processTextareaFill"
        @focus="processTextareaFill"
        @input="handleInput"
      />
      <div class="tag-container">
        Selected keyword tags:
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
        color="$q-color-box"
        text-color="$primary"
        label="submit"
        @click="submitPrompt"
        class="submit"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const isHovered = ref(false);
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

const submitPrompt = () => {
  // Handle submit logic here
  console.log("Submitted prompt:", prompt.value);
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
</script>

<style lang="scss">
.prompt-content {
  max-width: 800px; // 設定最大寬度
  width: 100%; // 讓內容物撐滿容器寬度
  padding: 10px; // 設定內間距
}
.hover-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid $primary;
  border-radius: 10px;
  pointer-events: none;
}

.textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
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
    background-color: $q-color-box;
    padding: 5px 10px;
    border-radius: 15px;
    cursor: pointer;
  }
}

.submit {
  border-radius: 10px;
  position: absolute; // 使用絕對定位
  bottom: 20px;
  right: 105px;
}
</style>
