<!-- box_history.vue -->
<template>
  <div class="history-box q-pa-md">
    <q-scroll-area style="height: 100%; max-width: 100%" class="test">
      <q-list>
        <q-item
          v-for="item in store.historyItems"
          :key="item.file_name"
          class="q-mb-sm"
        >
          <q-item-section avatar top>
            <q-btn
              round
              flat
              dense
              icon="play_arrow"
              @click="playItem(item.file_name)"
              class="play-btn"
            />
            <q-img :src="item.coverImage" square> </q-img>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
            <q-item-label caption>{{
              truncatePrompt(item.prompt)
            }}</q-item-label>
            <div class="row justify-between">
              <span>{{ formatDuration(item.duration) }}</span>
              <q-btn
                round
                flat
                dense
                icon="download"
                @click="downloadBtn(item.file_name)"
              />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import axios from "axios";
import { useMusicGenStore } from "../store/musicGenStore";
import { watch } from "vue";

const store = useMusicGenStore();
// Sample data for history items

// const historyItems = ref([
//   // {
//   //   id: 1,
//   //   coverImage: "https://via.placeholder.com/150",
//   //   title: "Rock Revolutioin",
//   //   prompt:
//   //     "Energetic rock song with strong guitar riffs and enthusiastic choruses",
//   //   duration: 30,
//   // },
//   // {
//   //   id: 2,
//   //   coverImage: "https://via.placeholder.com/150",
//   //   title: "A cool music I just created",
//   //   prompt: "drum and bass",
//   //   duration: 35,
//   // },
//   // {
//   //   id: 3,
//   //   coverImage: "https://via.placeholder.com/150",
//   //   title: "Metal Fury",
//   //   prompt: "Heavy metal music with fast guitar riffs and powerful druming",
//   //   duration: 30,
//   // },
//   // {
//   //   id: 4,
//   //   coverImage: "https://via.placeholder.com/150",
//   //   title: "Thunderous Metal Charge",
//   //   prompt:
//   //     "An aggressive metal track with thundering drums and shredding guitar",
//   //   duration: 28,
//   // },
//   // Add more sample data as needed
// ]);

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
const playItem = (item_filename) => {
  console.log("play button clicked");
  store.update_play_button_activated(item_filename);
  console.log(`Playing item with id: ${item_filename}`);

  // Add your logic to play the item here
};

onMounted(() => {
  store.fetchCollectionData();
  console.log(store.historyItems);
  // console.log("historyItems.value.length:", historyItems.value.length);
  // fetchCollectionData();
});
// const fetchCollectionData = async () => {
//   try {
//     // 这里的URL需要替换成实际的MongoDB Atlas的API endpoint
//     const response = await axios.get(
//       "http://127.0.0.1:9988/musicgen_generate_music/music_storage/all"
//     );
//     historyItems.value = response.data;
//     console.log(historyItems.value.length);
//     console.log("History items fetched:", response.data);
//   } catch (error) {
//     console.error("Error fetching collection data:", error);
//   }
// };

const downloadBtn = async (fileName) => {
  const encodedFileName = encodeURIComponent(fileName);
  try {
    const response = await axios.get(
      `http://127.0.0.1:9988/musicgen_generate_music/music_storage/${encodedFileName}`,
      {
        responseType: "blob", // 设置响应类型为 blob，以便正确处理二进制数据
      }
    );
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName; // 使用原始文件名作为下载文件的名称
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading the file:", error);
  }
};
</script>

<style lang="scss" scoped>
.history-box {
  height: 100%;
  //max-width: 150px; // 最大寬度
  // height: auto; // 高度自適應內容
  background: transparent;
  padding: 20px;
  margin-bottom: 0;
  gap: 0;
}

.play-btn {
  // position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.q-mb-sm {
  margin-bottom: 0px;
}

.test {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 10px;
  color: white;
  max-width: 100%;
  max-height: 100%;
}
</style>
