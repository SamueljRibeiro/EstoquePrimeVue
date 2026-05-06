<template>
  <div
    class="card h-screen hidden lg:block bg-gradient-to-b from-[#072e63] to-[#0050C16] w-56 rounded-r-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.25)]"
  >
    <div class="flex justify-between flex-col h-screen">
      <div class="flex flex-col gap-5">
        <div class="flex justify-center">
          <div
            class="flex items-center justify-center flex-col mt-10 mb-5"
          >
            <h1 class="font-bold text-xl">Financial Control</h1>
          </div>
        </div>
        <div class="flex flex-col gap-3 ml-5">
          <div v-for="modulo in modulos" :key="modulo.to" class="">
            <SidebarItens
              :to="modulo.to"
              :icon="modulo.icon"
              :label="modulo.label"
            />
          </div>
        </div>
      </div>
      <!--
      <div class="p-4 w-full flex flex-col items-center gap-2">
        <Divider />

        <div class="flex flex-col items-center cursor-pointer">
          <i class="pi pi-sign-out" style="font-size: 1rem"></i>
          <span class="text-sm font-semibold">Sair</span>
        </div>
      </div>-->
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
