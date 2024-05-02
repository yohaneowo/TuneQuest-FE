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
        <span class="material-icons" @click="changeFile">attach_file</span>
        <span class="material-icons" @click="removeFile">close</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const audioUrl = ref("");
const showAudio = ref(false);
const fileName = ref("");

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    audioUrl.value = reader.result;
    showAudio.value = true;
    fileName.value = file.name;
    // TODO: 在這裡呼叫後端 API 來進行音樂辨識,並觸發 @upload-success 事件
    // Simulated backend API call for music recognition
    // Assume the recognition result is "pop"
    const detectedGenre = "pop";

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
