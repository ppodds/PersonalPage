<template>
  <footer class="h-w-auto bg-black">
    <div class="p-4">
      <div class="text-right flex flex-row-reverse">
        <a :href="link.url" v-for="link of links" :key="link.text"
          ><div class="m-3 bg-white rounded-lg">
            <p class="m-3">{{ link.text }}</p>
          </div></a
        >
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      links: [
        {
          url: 'https://ppodds.github.io/',
          text: 'Blog',
        },
        {
          url: 'https://github.com/ppodds/',
          text: 'GitHub Profile',
        },
      ],
    }
  },
}
</script>

<style></style>
