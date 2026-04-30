<template>
  <div>
    <Menubar>
      <template>
        <Drawer v-model:visible="visible" header="Drawer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Drawer>
      </template>
    </Menubar>
    <Button icon="pi pi-arrow-right" @click="visible = true" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);
</script>
