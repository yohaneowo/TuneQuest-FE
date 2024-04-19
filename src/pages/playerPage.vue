<script setup>
import { defineAsyncComponent, ref } from "vue";
import audioPlayer from "src/components/audioPlayer.vue";

// Using defineAsyncComponent to handle the dynamic import
const MusicPlayer = defineAsyncComponent(() =>
  import("components/audioPlayer").catch((error) => {
    console.error("Failed to load MusicPlayer component", error);
    // Optionally, return a fallback component or perform some error handling here
  })
);

const isMusicPlayerLoaded = ref(false);

// Example of how to use it in your template with a conditional rendering
// This ref can be toggled based on your application logic, e.g., a button click
function loadMusicPlayer() {
  isMusicPlayerLoaded.value = true;
}
</script>
<template>
  <div>
    <!-- Conditional rendering -->
    <button @click="loadMusicPlayer">Load Music Player</button>
    <div v-if="isMusicPlayerLoaded">
      <audioPlayer />
    </div>
  </div>
</template>
