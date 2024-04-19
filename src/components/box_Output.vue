<template>
  <div class="output">
    <div class="container">
      <div id="waveform" ref="waveform"></div>
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
    <div class="progressline">
      <q-linear-progress
        rounded
        :value="progress"
        :buffer="buffer"
        color="warning"
        class="q-mt-md"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const progress = ref(0.01);
const buffer = ref(0.01);

let interval, bufferInterval;

onMounted(() => {
  interval = setInterval(() => {
    if (progress.value >= 1) {
      progress.value = 0.01;
      buffer.value = 0.01;
      return;
    }

    progress.value = Math.min(1, buffer.value, progress.value + 0.1);
  }, 700 + Math.random() * 1000);

  bufferInterval = setInterval(() => {
    if (buffer.value < 1) {
      buffer.value = Math.min(1, buffer.value + Math.random() * 0.2);
    }
  }, 700);
});

onBeforeUnmount(() => {
  clearInterval(interval);
  clearInterval(bufferInterval);
});
/*
const progressBarWidth = computed(() => {
  if (outputRef.value) {
    const outputWidth = outputRef.value.clientWidth;
    // 這裡可以自由調整進度條與 output 容器寬度之比例
    return `${outputWidth * 0.8}px`; // 進度條寬度為 output 容器寬度的 80%
  }
  return "100%";
});
*/
import WaveSurfer from "wavesurfer.js";

const waveform = ref(null);
const playBtn = ref(null);
const volumeBtn = ref(null);
let wavesurfer;

onMounted(() => {
  wavesurfer = WaveSurfer.create({
    container: waveform.value,
    waveColor: "rgb(47, 55, 65, 0.5)",
    progressColor: "rgb(47, 55, 65, 0.5)",
    barWidth: 4,
    barRadius: 5,
    responsive: true,
    hideScrollbar: true,
    barGap: 3,
    barHeight: 0.75,
  });
  wavesurfer.load("src/assets/fairy-tale-music.mp3");
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
.q-linear-progress {
  height: 10px;
  width: 100%;
  //padding: 0.25rem; //100px; //頁面縮太窄時會突出去！ 待解決
}
.progressline {
  //padding: 0 3% 0 3%;
}
.container {
  display: grid;
  grid-template-rows: auto auto; /* waveform 和 control-bar 垂直排列 */
  padding: 3% 0 0% 0;
}

.waveform {
  grid-row: 1; /* waveform 在第一行 */
  width: 70%;
  height: auto;
  padding: 0 10%;
}

.control-bar {
  grid-row: 2; /* control-bar 在第二行 */
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 三个相等的列 */
  justify-content: space-between; /* 图片水平均匀分布 */
  align-items: center; /* 图片垂直居中 */
  width: 100%; /* 设置宽度为容器的 100% */
  margin: 0;
  padding: 1.5% 5% 0 5%;
}

.control-bar img {
  width: 20%; /* 图片宽度占据其网格项的 100% */
  height: auto; /* 自动调整高度以保持宽高比 */
  cursor: pointer;
}
</style>
