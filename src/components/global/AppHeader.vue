<template>
  <div class="mt-5 flex justify-center">
    <Menubar class="h-20 p-menubar">
      <template #start>
        <div class="flex mr-5">
          <div class="flex items-center">
            <div class="px-5">
              <Avatar shape="circle" class="p-colorAvatar" size="large" />
            </div>
          </div>

          <div class="flex flex-col itms-center justify-center">
            <h3 class="font-semibold">Bem-vido Samuel Ribeiro!</h3>
            <p class="text-xs opacity-65">Top@gmail</p>
          </div>
          
        </div>
      </template>
      <!-- <div class="text-4xl font-semibold pl-5 flex items-center]">{{ router.meta.title || 'Nome Padrão App' }}</div>-->
      <template #end>

        <Button type="button" :icon="isToggle ? 'pi pi-angle-up' : 'pi pi-angle-down'" @click="toggle"
          aria-haspopup="true" aria-controls="overlay_menu"
          style="color: white; background-color: transparent; border: none" size="large" class="t" />

        <Menu ref="menu" :model="items" :popup="true" @show="isToggle = true" @hide="isToggle = false" />

      </template>
    </Menubar>
  </div>

  <!-- Menu Mobile-->
  <div class="lg:hidden">
    <Menubar>
      <template #start> </template>
    </Menubar>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";

const router = useRoute();
const menu = ref();
const isToggle = ref(false);

const toggle = (event: object) => {
  menu.value.toggle(event);
  isToggle.value = !isToggle.value;
};

const items = [
  {
    label: "Perfil",
    icon: "pi pi-user",
    command: () => {
      console.log("Ir para perfil");
    },
  },
  {
    label: "Configurações",
    icon: "pi pi-cog",
  },
  {
    separator: true,
  },
  {
    label: "Sair",
    icon: "pi pi-sign-out",
  },
];
</script>

<style scoped>
.p-menubar {
  background-color: #112338;
  border: none;
  width: 97%;
  border-radius: 1rem;
}

.p-colorAvatar {
  background-color: white;
}

.t {
  transition: 0.5s ease-in-out;
}
</style>
