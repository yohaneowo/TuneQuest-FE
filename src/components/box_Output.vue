<template>
  <div class="output">
    <q-linear-progress
      rounded
      :value="progress"
      :buffer="buffer"
      color="warning"
      class="q-mt-md"
    />
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
</script>
<style lang="scss" scoped>
.q-linear-progress {
  height: 10px;
  width: 100%;
  padding: 0 100px; //頁面縮太窄時會突出去！ 待解決
}
</style>
