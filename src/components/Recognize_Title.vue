<template>
  <div class="title">
    <div class="wrap_input">
      <q-input
        clearable
        clear-icon="close"
        v-model="text"
        filled
        autogrow
        label="標題 Title"
        hint="請輸入歌曲名稱 Text the title of the song"
        class="input"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useMusicGenStore } from "../store/musicGenStore";
import { watch } from "vue";

const store = useMusicGenStore();
const text = ref("");

watch(text, (newVal) => {
  store.update_user_uploaded_music_title(newVal);
});
</script>
<style lang="scss">
.input {
  width: 80%;
  border-radius: 10%;
}
.wrap_input {
  display: flex;
  justify-content: center;
  align-items: center;
}

.q-field__control {
  color: $q-color-box; // 這裡設置 textarea 輸入文字的顏色
}

.q-field__marginal {
  color: $q-color-box; // 這裡設置 hint 文字的顏色
}
.q-field__label {
  color: $q-color-box; // 這裡設置 label 文字的顏色
}
.q-field__native {
  color: white;
  font-weight: 400;
}
.q-field__messages > div {
  color: $q-color-box;
}
</style>
