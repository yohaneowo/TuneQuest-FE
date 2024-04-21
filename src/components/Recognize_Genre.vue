<template>
  <div class="recognize-page">
    <div class="genre">
      <q-card
        v-for="(genre, index) in genres"
        :key="index"
        :class="{ 'genre-card-active': isActiveGenre(genre) }"
        @click="selectGenre(genre)"
        class="genre-card"
      >
        <q-card-section>{{ genre }}</q-card-section>
      </q-card>
    </div>
    <UploadMusic @upload-success="handleUploadSuccess" />
    <RecognizeGenre :recognized-genre="recognizedGenre" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import UploadMusic from "components/UploadMusic.vue";
import RecognizeGenre from "components/RecognizeGenre.vue";

const genres = ref([
  "Blues",
  "Classical",
  "Country",
  "Disco",
  "Hip-hop",
  "Jazz",
  "Metal",
  "Pop",
  "Reggae",
  "Rock",
]);
const recognizedGenre = ref("Pop");
const selectedGenre = ref("");

const isActiveGenre = (genre) => {
  return genre === recognizedGenre.value || genre === selectedGenre.value;
};

const selectGenre = (genre) => {
  selectedGenre.value = genre;
};

const handleUploadSuccess = (detectedGenre) => {
  recognizedGenre.value = detectedGenre;
};

onMounted(() => {
  // 模擬偵測到 Pop 曲風
  handleUploadSuccess("Pop");
});
</script>

<style lang="scss" scoped>
.recognize-page {
  width: 100%;
  height: 100%;
  display: grid;
  background-color: $primary;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(12, 1fr);
  gap: 5px;
  grid-auto-rows: minmax(100px, auto);
}

.genre {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  grid-column: 18/23;
  grid-row: 5/12;
  border-radius: 10px;
  margin: 10px;
}

.genre-card {
  transition: transform 0.3s;
  transform: scale(0.8);

  &.genre-card-active {
    transform: scale(1);
  }
}
</style>
