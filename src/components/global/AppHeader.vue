<template>

  <div class="mt-5">
    <Menubar class="h-20 p-menubar">
      <template #start>
        <div>
          <h2 class="text-2xl font-semibold pl-5 flex items-center">Bem-vindo Samuel!</h2>
        </div>
      </template>
      <!-- <div class="text-4xl font-semibold pl-5 flex items-center]">{{ router.meta.title || 'Nome Padrão App' }}</div>-->>
      <template #end>
        <div class="flex items-center">
          <div class="flex gap-2">
            <Avatar class="cursor-pointer hover: " icon="pi pi-cog" shape="circle"
              style="background-color: cornflowerblue;" />
            <Avatar class="cursor-pointer" icon="pi pi-cog" shape="circle" style="background-color: cornflowerblue;" />
          </div>

          <div class="px-5">
            <Avatar shape="circle" class="p-colorAvatar" size="large" />
          </div>
        </div>
      </template>
    </Menubar>
  </div>


  <!-- Menu Mobile-->
  <div class=" lg:hidden">
    <Menubar>
      <template #start>

      </template>
    </Menubar>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const router = useRoute()

</script>


<style scoped>
.p-menubar {
  background-color: transparent;
  border: none;
}


.p-colorAvatar {
  background-color: white;
}
</style>