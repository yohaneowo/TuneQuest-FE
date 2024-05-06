<template>
  <div class="parent">
    <label for="music-file-upload">
      <img
        ref="music-upload"
        src="/src/assets/music-upload.png"
        alt="music-upload"
        class="music-upload_icon"
        @click="handleFileUpload"
        v-if="!showAudio"
      />
      <!--<span class="material-icons">attach_file</span>-->
    </label>
    <input
      id="music-file-upload"
      type="file"
      @change="handleFileUpload"
      accept="audio/wav"
    />
    <label for="upload" class="uploadStyle" v-if="!showAudio">
      點擊上傳音樂
    </label>
    <div v-if="showAudio && audioUrl" class="file-info">
      <span class="file-name">{{ fileName }}</span>
      <div class="file-actions">
        <!-- <span class="material-icons" @click="changeFile">attach_file</span> -->
        <span class="material-icons" @click="removeFile">close</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";

import { ref } from "vue";
import { useMusicGenStore } from "../store/musicGenStore";
const store = useMusicGenStore();
import axios from "axios";
const audioUrl = ref("");

const showAudio = ref(false);
const fileName = ref("");
const file_alt = ref("");
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  file_alt.value = file;
  console.log("file_alt:", file_alt.value);
  console.log("file:", file);
  const reader = new FileReader();

  reader.onload = async () => {
    audioUrl.value = reader.result;
    showAudio.value = true;
    fileName.value = file.name;
    // TODO: 在這裡呼叫後端 API 來進行音樂辨識,並觸發 @upload-success 事件
    // Simulated backend API call for music recognition
    // Assume the recognition result is "pop"
    console.log("file:", file);
    console.log("reader:", reader.result);
    console.log(audioUrl.value);
    const formData = new FormData();
    formData.append("file", file);
    getAudioDuration(file)
      .then((duration) => {
        console.log(`The duration of the file is ${duration} seconds.`);
        store.update_user_uploaded_file_duration(duration);
        // 在这里可以调用其他函数，例如API调用，传递文件和时长
      })
      .catch((error) => {
        console.error(error);
      });
    try {
      const response = await axios.post(
        "http://127.0.0.1:9988/musicgen_generate_music/music_storage/uploadTempMusic_to_classification/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { message, file_path, genre, file_name } = response.data;
      console.log(message);
      console.log(file_path);
      console.log(genre);
      const detectedGenre = genre;
      console.log(detectedGenre);
      store.update_uploadMusicFile_genreDetect(detectedGenre);
      store.update_user_selected_genre(detectedGenre);
      store.update_latest_audiofile_name(file_name);
      store.update_user_uploaded_file(file_alt.value);

      // const prompt2 = store.user_uploaded_music_prompt;
      // const formData2 = new FormData();
      // // formData2.append("prompt", prompt2);
      // formData2.append("file", event.target.files[0]);

      // const formData2 = new FormData();
      // formData2.append("prompt", prompt.value);
      // formData2.append("file", file.value);
      // const response2 = await axios.post(
      //   "http://127.0.0.1:9988/musicgen_generate_musicmusic_storage/upload/",
      //   formData2,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );
      // console.log(response2.data);
      // store.update_latest_audiofile_name(response2.data.file_name);
      // 处理完后的逻辑
    } catch (error) {
      console.error("Error uploading file:", error);
    }

    // Trigger the @upload-success event with the recognition result
    handleUploadSuccess(detectedGenre);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};
const changeFile = () => {
  audioUrl.value = "";
  showAudio.value = false;
  fileName.value = "";
};

const removeFile = () => {
  audioUrl.value = "";
  showAudio.value = false;
  fileName.value = "";
};

const getAudioDuration = (file) => {
  return new Promise((resolve, reject) => {
    // 创建一个隐藏的audio元素
    const audio = document.createElement("audio");
    audio.preload = "metadata"; // 预加载音频元数据

    // 创建一个读取文件的FileReader
    const reader = new FileReader();
    reader.onload = (e) => {
      audio.src = e.target.result;

      // 当音频元数据加载完成时，读取持续时间
      audio.onloadedmetadata = () => {
        resolve(Math.round(audio.duration));
      };

      // 处理文件读取错误
      audio.onerror = () => {
        reject("Error loading audio file.");
      };
    };

    // 文件读取错误处理
    reader.onerror = (e) => {
      reject("Error reading file.");
    };

    // 读取文件作为URL
    reader.readAsDataURL(file);
  });
};
</script>

<style lang="scss">
.parent {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  justify-content: center;
  align-items: center; /* 水平置中 */
  flex-wrap: wrap;
}
.music-upload_icon {
  //transform: scale(0.9);
  max-width: 100px; /* 最大寬度 */
  max-height: 100px; /* 最大高度 */
  width: auto; /* 自動調整寬度 */
  height: auto; /* 自動調整高度 */
  cursor: pointer;
}

input[type="file"] {
  display: none;
}

.uploadStyle {
  /* label的樣式 */
}
</style>
