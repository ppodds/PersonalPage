<template>
  <div class="flex flex-wrap w-full">
    <Item
      v-for="project of projects"
      :key="project.name"
      :data="project"
      block-size="big"
    />
  </div>
</template>

<script setup lang="ts">
const projects = ref([
  {
    name: "NCU+",
    icon: "ncuplus.png",
    subtitle: "中央大學智慧校園系統，目前已實作選課心得分享的功能。",
    linkUrl: "https://github.com/ncu-plus/",
  },
  {
    name: "Discord Bot Yue",
    icon: "Yue.png",
    subtitle: "用於NCU CSIE Discord伺服器的多功能Bot，有一些獨特的娛樂功能。",
    linkUrl: "https://github.com/ppodds/YueJS",
  },
  {
    name: "Cool Generator",
    icon: "CoolGenerator.png",
    subtitle:
      "看到朋友做的奇怪圖片有感而發，在一天之內做出來的玩具圖片產生器。",
    linkUrl: "https://github.com/ppodds/CoolGenerator",
  },
  {
    name: "Star Burst Block",
    icon: "StarBurstBlock.jpg",
    subtitle:
      "大一計算機實習課的JavaFX Final Project，基本上是一個俄羅斯方塊遊戲，但是有被徹底改寫過的遊戲規則。",
    linkUrl: "https://github.com/ppodds/StarBurstBlock",
  },
]);
</script>
