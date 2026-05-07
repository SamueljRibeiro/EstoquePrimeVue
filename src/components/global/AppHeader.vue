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
            <p class="text-xs opacity-65">{{ date }}</p>
          </div>
        </div>
      </template>
      <!-- <div class="text-4xl font-semibold pl-5 flex items-center]">{{ router.meta.title || 'Nome Padrão App' }}</div>-->
      <template #end>
        <div class="flex gap-4">
          <OverlayBadge
            value="4"
            severity="danger"
            class="inline-flex transition-all duration-150 active:scale-90"
          >
            <Avatar icon="pi pi-bell" shape="circle" />
          </OverlayBadge>

          <Avatar
            icon="pi pi-user-edit"
            shape="circle"
            @click="toggle"
            class="inline-flex transition-all duration-150 active:scale-90"
          />
        </div>
        <Menu ref="menu" :model="items" :popup="true" />
      </template>
    </Menubar>
  </div>

  <div class="px-9">
    <Divider />
  </div>

  <!-- Menu Mobile-->
  <div class="lg:hidden">
    <Menubar>
      <template #start> </template>
    </Menubar>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menu = ref();

const toggle = (event: object) => {
  menu.value.toggle(event);
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
    separator: true,
  },
  {
    label: "Sair",
    icon: "pi pi-sign-out",
  },
];

const date = new Date().toLocaleDateString("pt-br", {
  weekday: "long",
  day: "2-digit",
  month: "long",
});
</script>

<style scoped>
.p-menubar {
  background-color: transparent;
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
