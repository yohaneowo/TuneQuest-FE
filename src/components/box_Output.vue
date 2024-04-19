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
  grid-row: 3 / 4;
}
/*
.container {
  display: grid;
  grid-template-rows: auto minmax(50px, auto) 1fr;
  margin: 0 auto; //水平居中
  transform: scale(0.8);
  transform-origin: center;
}*/
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.waveform {
  width: 100%;
  display: flex;
  justify-content: center;
}

#waveform {
  max-width: 100%;
}
.control-bar {
  display: flex;
  justify-content: center;
  grid-template-columns: repeat(3, auto); /* 改为自动宽度 */
}
.control-bar img {
  width: 30px; /* 调小图标宽度 */
  height: 30px; /* 调小图标高度 */
}
/*
.control-bar {
  grid-row: 2/3; //control-bar 在第二行
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 三个相等的列
  justify-content: space-between; // 图片水平均匀分布
  align-items: center; // 图片垂直居中
  //width: 100%; // 设置宽度为容器的 100%
  //transform: scale(0.4);
  //transform-origin: center;
}

.control-bar img {
  width: 100%; // 图片宽度占据其网格项的 100%
  height: auto; // 自动调整高度以保持宽高比
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  //transform: scale(0.8);
  //transform-origin: center;
}
*/
</style>
