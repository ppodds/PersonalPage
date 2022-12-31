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
import gdsc from "~/assets/index/gd_dsc_lockup_vertical_color.png";
import cyic from "~/assets/index/CYIC.jpg";

const experiences = ref([
  {
    name: "GDSC NCU",
    icon: gdsc,
    subtitle: "2021 Core Team",
    linkUrl: "https://www.facebook.com/GDSCNCU",
  },
  {
    name: "CYIC 22nd",
    icon: cyic,
    subtitle: "教學長兼任公關活動",
    linkUrl: "https://www.facebook.com/ILOVECYIC",
  },
]);
</script>
