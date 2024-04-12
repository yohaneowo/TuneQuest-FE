<template>
  <q-page class="index">
    <div class="q-pa-md">
      <q-card clickable>
        <q-card-section>
          <div class="text-h6">Generate Page</div>
        </q-card-section>
        <q-card-actions>
          <router-link to="/generate">
            <q-btn color="primary">Go to Generate</q-btn>
          </router-link>
        </q-card-actions>
      </q-card>

      <q-card clickable>
        <q-card-section>
          <div class="text-h6">Recognize Page</div>
        </q-card-section>
        <q-card-actions>
          <router-link to="/recognize">
            <q-btn color="primary">Go to Recognize</q-btn>
          </router-link>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>

<!-- 預設載入圖片
<q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
-->
