<template>
  <q-layout view="hHh Lpr lff">
    <q-page-container>
      <q-page class="generate-page q-pa-md">
        <q-card class="profile">profile</q-card>
        <q-card class="history">history</q-card>
        <q-card class="cover">cover</q-card>
        <q-card class="prompt">prompt</q-card>
        <q-card class="upload">upload</q-card>
        <q-card class="genre">genre</q-card>
        <q-card class="output">output</q-card>
        <q-card class="duration">duration</q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
defineOptions({
  name: "GeneratePage",
});
</script>

<style scoped lang="scss">
.generate-page {
  width: 100%;
  height: 100%;

  display: grid;
  background-color: $primary;
  grid-template-columns: repeat(23, 1fr);
  grid-template-rows: repeat(11, 1fr);
  gap: 5px;
  grid-auto-rows: minmax(100px, auto);
}
/*
.generate {
  display: grid;
  background-color: $primary;
  grid-template-columns: repeat(23, 1fr);
  grid-template-rows: repeat(11, 1fr);
  gap: 5px;
  grid-auto-rows: minmax(100px, auto);
}
.profile {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 2/7;
  grid-row: 2/5;
  border-radius: 10px;
  margin: 10px;
}
.history {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 2/7;
  grid-row: 5/11;
  border-radius: 10px;
  margin: 10px;
}
.cover {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 7/11;
  grid-row: 2/5;
  border-radius: 10px;
  margin: 10px;
}
.prompt {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 7/17;
  grid-row: 5/11;
  border-radius: 10px;
  margin: 10px;
}
.upload {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 17/23;
  grid-row: 5/8;
  border-radius: 10px;
  margin: 10px;
}
.genre {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 17/23;
  grid-row: 8/11;
  border-radius: 10px;
  margin: 10px;
}
.output {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 11/20;
  grid-row: 2/5;
  border-radius: 10px;
  margin: 10px;
}
.duration {
  background-color: $q-color-box;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 20/23;
  grid-row: 2/5;
  border-radius: 10px;
  margin: 10px;
}
*/
</style>
