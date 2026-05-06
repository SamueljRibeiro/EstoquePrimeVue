<template>
  <router-link :to="to" class="">
    <div
      class="flex gap-1  px-6 py-2.5 rounded-l-full  items-center text-md "
      :class="
        isActive
          ? 'bg-gradient-to-r from-[#0E76F6] to-[#073370] text-white font-semibold transition-all duration-500  shadow-[0_0_10px_1px_rgba(0,0,0,0.25)]'
          : ' text-gray-300  font-semibold  transition-all duration-500 hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.25)]'
      "
      v-tooltip="label"
    >
      <component class="" :is="icon" />

      <span>
        {{ label }}
      </span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  to: { type: String, required: true },
  icon: { type: Object, required: true },
  label: { type: String, required: true },
});

const router = useRoute();

const isActive = computed(() => {
  return router.path.startsWith(props.to);
});
</script>
