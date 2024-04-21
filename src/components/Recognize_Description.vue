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
        label="Enter the description prompt of the audioto upload"
        hint="Text some description. "
        :shadow-text="textareaShadowText"
        class="input"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const prompt = ref("");
const textareaShadowText = ref("");
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
