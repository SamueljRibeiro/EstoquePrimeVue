<template>
  <router-link :to="to" class="">
    <div class="flex gap-2">
      <component
        class="md:w-6"
        :is="icon"
        :class="isActive ? 'text-[#1556F5]' : 'text-white'"
      />

      <span class="md:w-6" :class="isActive ? 'text-[#1556F5]' : 'text-white'">
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
