<template>
  <div class="cover">
    <div class="parent">
      <label for="file-upload">
        <img
          ref="upload"
          src="/src/assets/upload.png"
          alt="upload"
          class="upload_icon"
          @click="handleFileUpload"
          v-if="!showImage"
        />
      </label>
      <input
        id="file-upload"
        type="file"
        @change="handleFileUpload"
        accept="image/*"
      />
      <label for="upload" class="uploadStyle" v-if="!showImage">
        點擊上傳封面
      </label>
      <img
        v-if="showImage && imageUrl"
        :src="imageUrl"
        alt="Uploaded Image"
        class="uploaded-image"
        @dblclick="removeImage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const imageUrl = ref("");
const showImage = ref(false);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    imageUrl.value = reader.result;
    showImage.value = true;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};

const removeImage = () => {
  imageUrl.value = "";
  showImage.value = false;
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
.uploaded-image {
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: 4/3;
  //margin: 10%;
}
.upload_icon {
  transform: scale(0.9);
  max-width: 100px; /* 最大寬度 */
  max-height: 100px; /* 最大高度 */
  width: auto; /* 自動調整寬度 */
  height: auto; /* 自動調整高度 */
}
input[type="file"] {
  display: none;
}
.uploadStyle {
  /* label的樣式 */
}
</style>
