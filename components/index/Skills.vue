<template>
  <div class="md:flex flex-wrap max-w-5xl">
    <div
      class="
        w-1/5
        border-2 border-gray-300
        flex flex-col
        items-center
        hover:border-green-500
        duration-300
      "
      v-for="skill of skills"
      :key="skill.name"
    >
      <div class="w-1/2">
        <img :src="skill.icon" />
      </div>
      <div class="text-2xl">
        {{ skill.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      skills: [
        {
          name: 'Python 3',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        },
        {
          name: 'Java',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          name: 'C++',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        },
        {
          name: 'HTML 5',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        },
        {
          name: 'CSS 3',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        },
        {
          name: 'JavaScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
          name: 'Vue.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        },
        {
          name: 'tailwindcss',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        },
        {
          name: 'Bootstrap 4',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        },
        {
          name: 'php',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        },
        {
          name: 'Laravel',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
        },

        {
          name: 'Server',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        },
        {
          name: 'Docker',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
