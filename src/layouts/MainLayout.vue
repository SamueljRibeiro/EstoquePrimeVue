<template>
  <div class="flex h-screen">
    <app-sidebar />

    <div class="flex-1 overflow-x-hidden">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from "../components/global/AppSidebar.vue";
</script>
