<template>
  <div class="md:flex w-full flex justify-between">
    <a
      :href="contact.linkUrl"
      class="
        w-1/4
        border-2 border-gray-300
        flex
        items-center
        hover:border-green-500
        duration-300
        p-3
        m-1
      "
      v-for="contact of contacts"
      :key="contact.name"
    >
      <div class="w-1/4">
        <img :src="contact.icon" />
      </div>
      <div class="text-2xl ml-5">
        {{ contact.name }}
      </div>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      contacts: [
        {
          name: 'GitHub',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          linkUrl: 'https://github.com/ppodds',
        },
        {
          name: 'Email',
          icon: require('../../assets/index/envelope-solid.svg'),
          linkUrl: 'mailto:oscar20020629@gmail.com',
        },
        {
          name: 'Telegram',
          icon: require('../../assets/index/telegram-brands.svg'),
          linkUrl: 'https://t.me/ppodds',
        },
        {
          name: 'Facebook',
          icon: require('../../assets/index/facebook-square-brands.svg'),
          linkUrl: 'https://facebook.com/ppodds',
        },
      ],
    }
  },
}
</script>

<style></style>
