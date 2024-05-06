<template>
  <div class="output">
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
    <!-- <div class="progressline">
      <q-linear-progress
        rounded
        :value="progress"
        :buffer="buffer"
        class="q-mt-md"
      />
    </div> -->
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import WaveSurfer from "wavesurfer.js";
import { watch } from "vue";
import { useMusicGenStore } from "../store/musicGenStore";
const store = useMusicGenStore();

const isGenerating = ref(false);
const progress = ref(0.01);
const buffer = ref(0.01);
const isPlaying = ref(false);
let interval, bufferInterval;
let wavesurfer;

const waveform = ref(null);
const playBtn = ref(null);
const volumeBtn = ref(null);

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

onMounted(() => {
  wavesurfer = WaveSurfer.create({
    container: waveform.value,
    waveColor: "rgb(220, 238, 242, 0.7)",
    progressColor: "rgb(220, 238, 242, 0.7)",
    barWidth: 4,
    barRadius: 5,
    responsive: true,
    hideScrollbar: true,
    barGap: 3,
    barHeight: 0.75,
  });
  wavesurfer.load("src/assets/fairy-tale-music.mp3");
  wavesurfer.on("finish", () => {
    isPlaying.value = false;
  });
});

const submitPrompt = () => {
  isGenerating.value = true;
  progress.value = 0;
  buffer.value = 0;

  // Handle submit logic here
  console.log("Submitted prompt:", prompt.value);

  // Simulating song generation progress
  const generateInterval = setInterval(() => {
    progress.value += 10;
    buffer.value = progress.value + 10;

    if (progress.value >= 100) {
      clearInterval(generateInterval);
      isGenerating.value = false;
    }
  }, 200);
};

const togglePlayPause = () => {
  wavesurfer.playPause();
  isPlaying.value = !isPlaying.value;
  togglePlayPauseIcon();
};

// const togglePlayPauseIcon = () => {
//   playBtn.value.src = playBtn.value.src.includes("play")
//     ? "src/assets/pause.png"
//     : "src/assets/play.png";
// };
watch(
  () => isPlaying.value,
  (newVal, oldVal) => {
    console.log(newVal);

    playBtn.value.src = isPlaying.value
      ? "src/assets/pause.png"
      : "src/assets/play.png";
  },
  { deep: true }
);
const stopPlayback = () => {
  wavesurfer.stop();
  // playBtn.value.src = "src/assets/play.png";
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
watch(
  () => store.latest_audiofile_name,
  (newVal, oldVal) => {
    const music_server_url = `http://127.0.0.1:9988/musicgen_generate_music/music_storage/${newVal}`;
    console.log(music_server_url);
    console.log("changed");
    console.log(newVal);
    console.log(oldVal);
    if (newVal) {
      wavesurfer.load(music_server_url);
    }
  },
  { deep: true }
);

watch(
  () => store.play_button_activated,
  (file_name, oldVal) => {
    console.log("play_button_activated", file_name, oldVal);
    if (file_name) {
      const music_server_url = `http://127.0.0.1:9988/musicgen_generate_music/music_storage/${file_name}`;
      console.log(music_server_url);
      wavesurfer.load(music_server_url).then(() => {
        isPlaying.value = true;
        wavesurfer.playPause();
      });
    }
  },
  { deep: true }
);

//defineExpose({ startGeneration });
</script>
<style lang="scss">
.q-linear-progress {
  height: 10px;
  width: 97%;
  margin: 0 0.5rem;
  color: $q-color-box;
}
.progressline {
  //grid-row: 3 / 4;
}

.wave-container {
  width: 100%;
  transform: scale(0.9);
  transform-origin: center;
}
/*
.waveform {
  width: 100%;
  display: flex;
  justify-content: center;
}

#waveform {
  max-width: 100%;
}
*/
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
