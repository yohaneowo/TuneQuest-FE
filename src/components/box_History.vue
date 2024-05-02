<!-- box_history.vue -->
<template>
  <div class="history-box q-pa-md">
    <q-list>
      <q-item v-for="item in historyItems" :key="item.id" class="q-mb-sm">
        <q-item-section avatar top>
          <q-img :src="item.coverImage" square>
            <q-btn
              round
              flat
              dense
              icon="play_arrow"
              @click="playItem(item.id)"
              class="play-btn"
            />
          </q-img>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
          <q-item-label caption>{{ truncatePrompt(item.prompt) }}</q-item-label>
          <div class="row justify-between">
            <span>{{ formatDuration(item.duration) }}</span>
            <q-btn round flat dense icon="download" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Sample data for history items
const historyItems = ref([
  {
    id: 1,
    coverImage: "https://via.placeholder.com/150",
    title: "Rock Revolutioin",
    prompt:
      "Energetic rock song with strong guitar riffs and enthusiastic choruses",
    duration: 30,
  },
  {
    id: 2,
    coverImage: "https://via.placeholder.com/150",
    title: "A cool music I just created",
    prompt: "drum and bass",
    duration: 35,
  },
  {
    id: 3,
    coverImage: "https://via.placeholder.com/150",
    title: "Metal Fury",
    prompt: "Heavy metal music with fast guitar riffs and powerful druming",
    duration: 30,
  },
  {
    id: 4,
    coverImage: "https://via.placeholder.com/150",
    title: "Thunderous Metal Charge",
    prompt:
      "An aggressive metal track with thundering drums and shredding guitar",
    duration: 28,
  },
  // Add more sample data as needed
]);

// Truncate the prompt string and add ellipsis
const truncatePrompt = (prompt) => {
  const maxLength = 20;
  return prompt.length > maxLength
    ? `${prompt.slice(0, maxLength)}...`
    : prompt;
};

// Format the duration in mm:ss
const formatDuration = (durationInSeconds) => {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

// Handle play button click
const playItem = (itemId) => {
  console.log(`Playing item with id: ${itemId}`);
  // Add your logic to play the item here
};
</script>

<style lang="scss" scoped>
.history-box {
  display: flex;
  min-width: 80px; // 最小寬度
  //max-width: 150px; // 最大寬度
  height: auto; // 高度自適應內容
  background: transparent;
  padding: 8px;
  margin-bottom: 0;
  gap: 0;
}

.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.q-mb-sm {
  margin-bottom: 0px;
}
</style>
