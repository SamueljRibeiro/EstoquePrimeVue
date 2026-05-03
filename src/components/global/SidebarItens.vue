<template>
  <router-link :to="to" class="">
    <div
      class="flex gap-2 px-6 py-1.5 rounded-xl items-center"
      :class="
        isActive
          ? 'bg-[#545a67] text-white font-semibold transition-all duration-400  shadow-[0_0_10px_1px_rgba(0,0,0,0.25)]'
          : ' text-gray-400  font-semibold  transition-all duration-400  hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.25)]'
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
