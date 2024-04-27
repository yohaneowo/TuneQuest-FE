<template>
  <div class="parent">
    <label for="file-upload" class="file-upload">
      <img
        ref="all-upload-icon"
        src="/src/assets/upload.png"
        alt="All-upload"
        class="all_upload_icon"
        @click="uploadToDB"
        v-if="!showAudio"
      />
    </label>
    <label> 點擊上傳至資料庫 </label>
  </div>
</template>
<script setup>
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
.parent {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  justify-content: center;
  align-items: center; /* 水平置中 */
  flex-wrap: wrap;
}
.file-upload {
  z-index: 1; /* 确保 file-upload 在顶部 */
  //opacity: 0; /* 隐藏 file-upload 的内容 */
  display: flex;
  justify-content: center;
}
.all_upload_icon {
  transform: scale(0.7);
  max-width: 100px; /* 最大寬度 */
  max-height: 100px; /* 最大高度 */
  width: auto; /* 自動調整寬度 */
  height: auto; /* 自動調整高度 */
}
</style>
