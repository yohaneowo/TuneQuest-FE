<template>
  <div class="duration">
    <div class="lay">
      <p>設定生成歌曲長度</p>
      <div class="timer">
        <!-- <q-input
          ref="mm"
          v-model="minutes"
          type="number"
          filled
          dense
          label="mm"
          :max="4"
          :min="0"
          class="q-mr-sm"
        /> -->
        <q-input
          v-model="seconds"
          type="number"
          filled
          dense
          label="ss"
          :max="30"
          :min="1"
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
import { useMusicGenStore } from "../store/musicGenStore";
import { watch } from "vue";
const store = useMusicGenStore();

const minutes = ref(0);
const seconds = ref(15);
watch(seconds, (newVal) => {
  store.update_duration(newVal);
});
const resetTimer = () => {
  minutes.value = 0;
  seconds.value = 15;
};
</script>

<style lang="scss">
.timer {
  display: flex;
  justify-content: center;
  max-width: 100%;
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
  color: $q-color-box;
}
.q-field--dense.q-field--float .q-field__label {
  color: $q-color-box;
}
.q-field--labeled.q-field--dense .q-field__native,
.q-field--labeled.q-field--dense .q-field__prefix,
.q-field--labeled.q-field--dense .q-field__suffix {
  padding-top: 14px;
  padding-bottom: 2px;
  color: $q-color-box;
}

@media (max-width: 480px) {
  .timer {
    flex-direction: column;
    align-items: center;
  }

  .q-input {
    margin-bottom: 0.5rem;
  }
}
</style>
