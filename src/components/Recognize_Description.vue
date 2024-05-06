<template>
  <div class="description">
    <div class="wrap_input">
      <q-input
        v-model="prompt"
        filled
        clearable
        clear-icon="close"
        type="textarea"
        color="second"
        label="歌曲描述 Prompt "
        hint="請輸入歌曲的描述題詞。 Enter the description prompt of the song to upload. "
        :shadow-text="textareaShadowText"
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
const prompt = ref("");
const textareaShadowText = ref("");

watch(prompt, (newVal) => {
  store.update_user_uploaded_music_prompt(newVal);
});
</script>
<style lang="scss">
.input {
  width: 90%;
  border-radius: 10%;
}
.wrap_input {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
