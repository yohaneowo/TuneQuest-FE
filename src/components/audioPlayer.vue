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
    waveColor: "#A9B3C1",
    progressColor: "#8492A6",
    height: 70,
    barWidth: 2,
    barRadius: 5,
    barGap: 3,
    responsive: true,
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
:root {
  /* Colors */
  --primary-primary800: #47566b;
  --primary-primary900: #384454;
  --color-darkslategray-100: #343c48;
  --color-darkslategray-200: #2f3741;
  --color-darkslategray-300: #2d343e;
  --primary-primary1000: #29313d;
  --color-slategray-100: #6b7c94;
  --primary-primary600: #667b99;
  --color-slategray-200: #5b697e;
  --color-slategray-300: #566376;
  --dark-1: #566375;
  --color-silver: #aeb7c4;
  --color-gray: #0f0f0f;
  --color-darkgray-100: #98a4b4;
  --color-darkgray-200: #98a3b4;
  --color-white: #fff;
  --primary-primary400: #a9b5c6;
  --primary-primary200: #d4dae3;
  --primary-primary: #94a3b8;
  --color-lightslategray-100: #8492a6;
  --color-lightslategray-200: #8190a4;
  --primary-primary100: #eaedf1;
}
</style>
