<template>
  <a
    :href="data.linkUrl"
    :class="{
      'w-1/5': blockSize === 'small',
      'w-1/2': blockSize === 'big',
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
    <div class="w-full">
      <img :src="data.icon" />
    </div>
    <div class="text-2xl">
      {{ data.name }}
    </div>
    <div v-if="data.subtitle" class="text-xl">{{ data.subtitle }}</div>
  </a>
</template>

<script>
export default {
  props: {
    blockSize: String,
    data: { name: String, icon: Object, subtitle: String, linkUrl: String },
  },
}
</script>

<style></style>
