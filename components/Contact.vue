<template>
  <div class="flex w-full flex-col md:flex-row justify-between">
    <a
      v-for="contact of contacts"
      :key="contact.name"
      :href="contact.linkUrl"
      class="w-full md:w-1/4 border-2 border-gray-300 flex items-center hover:border-green-500 duration-300 p-3 m-1"
    >
      <div class="w-1/4 md:w-1/4">
        <img :src="contact.icon" />
      </div>
      <div class="text-xl md:text-2xl ml-5">
        {{ contact.name }}
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
const contacts = ref([
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    linkUrl: "https://github.com/ppodds",
  },
  {
    name: "Email",
    icon: "envelope-solid.svg",
    linkUrl: "mailto:oscar20020629@gmail.com",
  },
  {
    name: "Telegram",
    icon: "telegram-brands.svg",
    linkUrl: "https://t.me/ppodds",
  },
  {
    name: "Facebook",
    icon: "facebook-square-brands.svg",
    linkUrl: "https://facebook.com/ppodds",
  },
]);
</script>
