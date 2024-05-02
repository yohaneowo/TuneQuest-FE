<template>
  <div class="display_music">
    <div class="wave-container">
      <div id="waveform" ref="waveform"></div>
    </div>
    <div class="control-container">
      <div class="control-bar">
        <img
          ref="stopBtn"
          src="/src/assets/stop.png"
          alt="stop"
          title="Stop"
          @click="stopPlayback"
        />
        <img
          ref="playBtn"
          src="/src/assets/play.png"
          alt="play"
          title="Play / Pause"
          @click="togglePlayPause"
        />
        <img
          ref="volumeBtn"
          src="/src/assets/volume.png"
          alt="volume"
          title="Mute / Unmute"
          @click="toggleMute"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import WaveSurfer from "wavesurfer.js";

const waveform = ref(null);
const playBtn = ref(null);
const volumeBtn = ref(null);
let wavesurfer;

onMounted(() => {
  wavesurfer = WaveSurfer.create({
    container: waveform.value,
    waveColor: "rgb(255, 255, 255, 0.7)",
    progressColor: "rgb(255, 255, 255, 0.7)",
    barWidth: 4,
    barRadius: 5,
    responsive: true,
    hideScrollbar: true,
    barGap: 3,
    barHeight: 0.75,
  });
  wavesurfer.load("src/assets/cello.wav");
});

const togglePlayPause = () => {
  wavesurfer.playPause();
  togglePlayPauseIcon();
};

const togglePlayPauseIcon = () => {
  playBtn.value.src = playBtn.value.src.includes("play")
    ? "src/assets/pause.png"
    : "src/assets/play.png";
};

const stopPlayback = () => {
  wavesurfer.stop();
  playBtn.value.src = "src/assets/play.png";
};

const toggleMute = () => {
  wavesurfer.toggleMute();
  toggleVolumeIcon();
};

const toggleVolumeIcon = () => {
  volumeBtn.value.src = volumeBtn.value.src.includes("volume")
    ? "src/assets/mute.png"
    : "src/assets/volume.png";
};
</script>
<style lang="scss">
.wave-container {
  width: 100%;
  transform: scale(0.9);
  transform-origin: center;
}
.control-container {
  display: flex;
  justify-content: center;
}
.control-bar {
  display: flex;
  //justify-content: center;
  //grid-template-columns: repeat(3, auto); /* 改为自动宽度 */
}
.control-bar img {
  width: 30px; /* 调小图标宽度 */
  height: 30px; /* 调小图标高度 */
  cursor: pointer;
}
</style>
