<template>
  <a
    :href="data.linkUrl"
    :class="{
      'w-1/2 md:w-1/5': blockSize === 'small',
      'w-1/2 md:w-1/4': blockSize === 'medium',
      'w-full md:w-1/2': blockSize === 'big',
      'border-2': true,
      'border-gray-300': true,
      flex: true,
      'flex-col': true,
      'items-center': true,
      'hover:border-green-500': true,
      'duration-300': true,
      'p-3': true,
    }"
  >
    <div class="w-full h-fit">
      <img class="h-64 mx-auto" :src="data.icon" />
    </div>
    <div class="text-sm md:text-2xl">
      {{ data.name }}
    </div>
    <div v-if="data.subtitle" class="text-xs md:text-xl">
      {{ data.subtitle }}
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  blockSize: string;
  data: { name: string; icon: any; subtitle?: string; linkUrl?: string };
}>();
</script>
