<template>
  <div class="row justify-evenly">
    <div class="col-1">
      <q-btn
        round
        @click="playPause"
        color="primary"
        :icon="isPlaying ? 'pause' : 'play_arrow'"
      />
    </div>
    <div class="col-10">
      <div ref="waveform"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import WaveSurfer from "wavesurfer.js";
import { QBtn } from "quasar";

const waveform = ref(null);
const isPlaying = ref(false);

let waveSurfer = null;

onMounted(() => {
  waveSurfer = WaveSurfer.create({
    container: waveform.value,
    waveColor: "violet",
    progressColor: "purple",
    height: 70,
    barWidth: 2,
  });
  waveSurfer.load("src/assets/testAudio.mp3"); // Replace with your audio file path
  waveSurfer.on("play", () => {
    isPlaying.value = true;
  });
  waveSurfer.on("pause", () => {
    isPlaying.value = false;
  });
  waveSurfer.on("finish", () => {
    isPlaying.value = false;
  });
});

function playPause() {
  waveSurfer.playPause();
}
</script>

<style>
/* You can add styles for your music player here */
</style>
