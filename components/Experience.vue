<template>
  <div class="flex flex-wrap w-full">
    <Item
      v-for="experience of experiences"
      :key="experience.name"
      :data="experience"
      block-size="big"
    />
  </div>
</template>

<script setup lang="ts">
const experiences = ref([
  {
    name: "NCtfU",
    icon: "nctfu.jpg",
    subtitle: "2022 副社長",
    linkUrl: "https://www.facebook.com/nctfu",
  },
  {
    name: "GDSC NCU",
    icon: "gd_dsc_lockup_vertical_color.png",
    subtitle: "2021 Core Team",
    linkUrl: "https://www.facebook.com/GDSCNCU",
  },
  {
    name: "CYIC 22nd",
    icon: "CYIC.jpg",
    subtitle: "教學長兼任公關活動",
    linkUrl: "https://www.facebook.com/ILOVECYIC",
  },
]);
</script>
