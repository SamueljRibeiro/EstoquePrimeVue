<template>
  <div class="flex h-screen">
    <app-sidebar />

    <div class="flex-1 flex flex-col">
      <AppHeader @toggle-menu="mobile = !mobile" />

      <div class="flex-1 overflow-x-hidden">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from "../components/global/AppSidebar.vue";
import AppHeader from "../components/global/AppHeader.vue";
import { ref } from "vue";

const mobile = ref("false");
</script>
