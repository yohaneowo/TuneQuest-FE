<template>
  <div class="title">
    <div class="wrap_input">
      <q-input
        clearable
        clear-icon="close"
        v-model="text"
        filled
        autogrow
        label="Title"
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
  width: 90%;
  border-radius: 10%;
}
.wrap_input {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
