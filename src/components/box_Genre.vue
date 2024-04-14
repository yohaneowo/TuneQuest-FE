<template>
  <div class="genre">
    <div class="carousel-container">
      <q-carousel
        animated
        v-model="selectedGenre"
        arrows
        navigation
        infinite
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        control-color="blue-grey-4"
        navigation-icon="radio_button_unchecked"
        padding
        height="50%"
        class="bg-gray text-black shadow-3 rounded-borders"
      >
        <!--navigation -->
        <q-carousel-slide
          v-for="genre in genres"
          :name="genre"
          :key="genre"
          class="slides"
        >
          <q-icon name="music_note" size="56px" />
          <div class="q-mt-md text-center">{{ genre }}</div>
        </q-carousel-slide>
        <!--q-carousel 的左右按鍵 prev-icon="arrow_left" next-icon="arrow_right"-->
      </q-carousel>
      <q-btn
        class="submit"
        color="primary"
        label="Submit"
        @click="submitSelectedGenre"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const genres = ref([
  "Blues",
  "Classical",
  "County",
  "Disco",
  "Hip-hop",
  "Jazz",
  "Metal",
  "Pop",
  "Reggae",
  "Rock",
]);
const selectedGenre = ref(null);

function submitSelectedGenre() {
  console.log("Selected genre:", selectedGenre.value);
  // 在這裡添加提交選擇音樂類型的邏輯
}
</script>

<style lang="scss" scoped>
.carousel-container {
  height: 100%; // 使用父級容器的高度
  width: 100%;
  padding: 10%;
  //aspect-ratio: 3 / 4; // 設置寬高比為 16:9，可以根據需求調整
  overflow: hidden; // 確保內容不會溢出容器
}

.q-carousel {
  width: 100%; // 使 q-carousel 充滿父級容器
  height: 100%; // 使 q-carousel 充滿父級容器
}

.slides {
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.submit {
  color: white;
  align-self: center;
  justify-self: center;
}
</style>
