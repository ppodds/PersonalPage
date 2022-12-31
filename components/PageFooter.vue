<template>
  <footer class="h-w-auto bg-black">
    <div class="p-4">
      <div class="text-right flex flex-row-reverse">
        <a v-for="link of links" :key="link.text" :href="link.url"
          ><div class="m-3 bg-white rounded-lg">
            <p class="m-3">{{ link.text }}</p>
          </div></a
        >
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = ref([
  {
    url: "https://ppodds.github.io/",
    text: "Blog",
  },
  {
    url: "https://github.com/ppodds/",
    text: "GitHub Profile",
  },
]);
</script>
