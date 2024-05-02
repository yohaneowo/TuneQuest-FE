<template>
  <div class="wrap_add">
    <label
      for="file-upload-DB"
      class="file-upload-DB"
      @click="showUploadSuccess"
    >
      <img
        ref="all-upload-icon"
        src="/src/assets/upload.png"
        alt="All-upload"
        class="all_upload_icon"
        @click="uploadToDB"
        v-if="!showAudio"
      /> </label
    ><label v-if="!showSuccessMessage"> 點擊上傳至資料庫 </label>
    <div v-if="showSuccessMessage" class="success-message">上傳成功</div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const showSuccessMessage = ref(false);

const showUploadSuccess = () => {
  console.log("上傳成功");
  showSuccessMessage.value = true;
  setTimeout(() => {
    showSuccessMessage.value = false;
  }, 3000);
};

/*
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  text: String,
  prompt: String,
  genre: String,
});

const emit = defineEmits(["upload-success"]);

const uploadToDB = () => {
  // 在這裡模擬上傳到資料庫的操作
  console.log("上傳到資料庫:", props.text, props.prompt, props.genre);
  emit("upload-success");
};
*/
</script>
<style lang="scss">
.wrap_add {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  justify-content: center;
  align-items: center; /* 水平置中 */
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  cursor: pointer;
}
.file-upload-DB {
  z-index: 1; /* 确保 file-upload 在顶部 */
  //opacity: 0; /* 隐藏 file-upload 的内容 */
  display: flex;
  justify-content: center;
  height: 50%;
  width: 100%;
  cursor: pointer;
}
.all_upload_icon {
  //transform: scale(0.7);
  max-width: 100px; /* 最大寬度 */
  max-height: 100px; /* 最大高度 */
  width: auto; /* 自動調整寬度 */
  height: auto; /* 自動調整高度 */
  object-fit: contain;
}
</style>
