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

const text = ref("");
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
</style>
