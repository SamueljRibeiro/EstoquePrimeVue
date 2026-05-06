<template>
  <div
    class="card h-screen hidden lg:block bg-gradient-to-b from-[#112338] to-[#0d2a66] w-56 rounded-r-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.25)]">
    <div class="flex justify-between flex-col h-screen">
      <div class="flex flex-col gap-5">
        <div class="flex justify-center">
          <div class="flex items-center justify-center flex-col mt-10 mb-5">
            <Image :src="estoque" width="180" class="" />
          </div>
        </div>
        <div class="flex flex-col gap-3 ml-5">
          <div v-for="modulo in modulos" :key="modulo.to">
            <SidebarItens :to="modulo.to" :icon="modulo.icon" :label="modulo.label" />
          </div>
        </div>
      </div>

      <div class="p-4 w-full flex flex-col  gap-2">

        <div>
          <h3 class="text-sm  font-semibold opacity-80">Suporte</h3>
          <div class="ml-5">
            <a href="https://wa.me/49999431618?text=Olá,%20preciso%20de%20suporte">
              <i class="pi pi-user" style="font-size: 1rem"></i> Suporte
            </a>
          </div>
        </div>

        <div class="p-4 w-full flex flex-col items-center gap-2">
          <Divider />

          <div class="flex flex-col items-center cursor-pointer">

            <span class="text-sm font-semibold opacity-80">Versão: 1.1.1</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import estoque from "../../assets/global/IconSidebar.png";
import DashboardIcon from "../../assets/global/svg/DashboardIcon.vue";
import EstoqueIcon from "../../assets/global/svg/EstoqueIcon.vue";
import ConfiguracaoIcon from "../../assets/global/svg/ConfiguracaoIcon.vue";
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
  {
    to: "/#",
    icon: DashboardIcon,
    label: "Dashboard",
  },
  {
    to: "/estoque/#",
    icon: EstoqueIcon,
    label: "Estoque",
  },
  {
    to: "/#",
    icon: DashboardIcon,
    label: "Dashboard",
  },
  {
    to: "/estoque/#",
    icon: ConfiguracaoIcon,
    label: "Configurações",
  },
]);


</script>
