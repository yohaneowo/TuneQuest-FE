<template>
  <div class="cover">
    <input type="file" @change="handleFileUpload" accept="image/*" />
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt="Uploaded Image"
      class="uploaded-image"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const imageUrl = ref("");

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    imageUrl.value = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};
</script>

<style lang="scss">
.uploaded-image {
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: 4/3;
}
</style>
