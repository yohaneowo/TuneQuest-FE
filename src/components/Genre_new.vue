<template>
  <div class="genre_container">
    <q-scroll-area
      class="scroll-area"
      :thumb-style="thumbStyle"
      :content-style="contentStyle"
      :bar-style="barStyle"
      :visible="true"
    >
      <div class="genre-cards">
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
    </q-scroll-area>
  </div>
</template>

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

const selectedGenre = ref("");

const isActiveGenre = (genre) => {
  return genre === selectedGenre.value;
};

const selectGenre = (genre) => {
  selectedGenre.value = genre;
};

const thumbStyle = {
  right: "4px",
  borderRadius: "5px",
  backgroundColor: "rgb(255,255,255,0.7)",
  width: "5px",
  opacity: 0.75,
};

const barStyle = {
  right: "2px",
  borderRadius: "9px",
  backgroundColor: "rgb(255,255,255,0.7)",
  width: "9px",
  opacity: 0.2,
};

const contentStyle = {
  padding: "0 5px",
};
</script>

<style lang="scss" scoped>
.genre_container {
  margin: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative; // 添加 position 屬性以讓子元素可以相對定位
}

.scroll-area {
  height: 100%;
  width: 100%;
}

.genre-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5% 0;
  /*
  position: absolute; // 使用絕對定位將子元素置於父元素的中心
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  */
}

.genre-card {
  transition: transform 0.3s, opacity 0.3s;
  transform: scale(0.8);
  flex: 0 0 auto;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 2px 0;
  opacity: 0.5; // 初始透明度為 0.5
  font-size: 16px;

  &.genre-card-active {
    transform: scale(1.1);
    opacity: 0.8; // 被選中的卡片透明度為 1
  }
}
</style>
