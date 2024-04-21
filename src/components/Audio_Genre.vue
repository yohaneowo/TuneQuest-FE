<template>
  <div class="genre">
    <div class="wrap">
      <p>Recognized Genre: {{ recognizedGenre }}</p>
      <q-card
        v-for="(genre, index) in genres"
        :key="index"
        @click="selectGenre(genre)"
        class="genre-card"
      >
        <q-card-section>{{ genre }}</q-card-section>
      </q-card>
    </div>
  </div>
</template>
<!-- q-card 裡的:class="{ 'genre-card-active': isActiveGenre(genre) }"-->
<script setup>
import { ref } from "vue";

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
const recognizedGenre = ref("");
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
</script>

<style lang="scss" scoped>
.genre-card {
  transition: transform 0.3s;
  transform: scale(0.8);

  &.genre-card-active {
    transform: scale(1);
  }
}
.wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
