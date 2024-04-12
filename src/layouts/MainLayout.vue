<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> TuneQuest </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <!--
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>

        <q-item-label header> Essential Links </q-item-label>

        <router-link to="/generate">
          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="create" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Generate Page</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

        <router-link to="/recognize">
          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="visibility" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Recognize Page</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

      </q-list>
    </q-drawer>
    -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<!--
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
  -->
