<template>
  <div
    class="card h-screen hidden lg:block bg-[#393E46] w-48 rounded-r-xl shadow-[0_0_10px_1px_rgba(0,0,0,0.25)]"
  >
    <div class="flex justify-between flex-col h-screen items-center">
      <div class="flex flex-col gap-20">
        <div class="flex justify-center items-center text-center">
          <div class="flex items-center justify-center flex-col mt-10">
            <Image :src="estoque" alt="image" />
            <h1 class="font-bold text-xl">StockFlow</h1>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div v-for="modulo in modulos" :key="modulo.to" class="">
            <SidebarItens
              :to="modulo.to"
              :icon="modulo.icon"
              :label="modulo.label"
            />
          </div>
        </div>
      </div>

      <div class="p-4 w-full flex flex-col items-center gap-2">
        <Divider />

        <div class="flex flex-col items-center cursor-pointer">
          <i class="pi pi-sign-out" style="font-size: 1rem"></i>
          <span class="text-sm font-semibold">Sair</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import estoque from "../../assets/global/estoque.png";
import DashboardIcon from "../../assets/global/svg/DashboardIcon.vue";
import EstoqueIcon from "../../assets/global/svg/EstoqueIcon.vue";
import SidebarItens from "./SidebarItens.vue";
import { reactive } from "vue";
import type * as TypeInterface from "../../types/TypeInterface";

const modulos = reactive<TypeInterface.Modulos[]>([
  {
    to: "/dashboard",
    icon: DashboardIcon,
    label: "Dashboard",
  },
  {
    to: "/estoque/cadastro",
    icon: EstoqueIcon,
    label: "Estoque",
  },
]);
</script>
