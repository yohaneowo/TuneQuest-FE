<template>
  <div class="duration">
    <div class="lay">
      <p>設定生成歌曲長度</p>
      <div class="timer">
        <q-input
          ref="mm"
          v-model="minutes"
          type="number"
          filled
          dense
          label="mm"
          :max="4"
          :min="0"
          class="q-mr-sm"
        />
        <q-input
          v-model="seconds"
          type="number"
          filled
          dense
          label="ss"
          :max="59"
          :min="0"
          class="q-mr-sm"
        />
      </div>
      <q-btn
        round
        dense
        flat
        icon="restart_alt"
        @click="resetTimer"
        class="q-ml-sm"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const minutes = ref(0);
const seconds = ref(15);

const resetTimer = () => {
  minutes.value = 0;
  seconds.value = 15;
};
</script>

<style lang="scss">
.timer {
  display: flex;
  justify-content: center;
}
.lay {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  //margin: 3%;
  gap: 1rem;
}
.q-ml-sm {
  margin-left: 0;
}
</style>
