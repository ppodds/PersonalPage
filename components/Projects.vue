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
    name: "Relno",
    icon: "relno.png",
    subtitle:
      "提供高度自定義的 release note 產生框架。支援自己的模板語法，並會把參數注入到模板中，讓使用者可以快速生成漂亮的 release note。",
    linkUrl: "https://github.com/ppodds/relno",
  },
  {
    name: "Brick Trader",
    icon: "brick-trader.png",
    subtitle:
      "2022 梅竹黑客松的得獎作品。Brick Trader 讓使用者可以在平台上透過積木來拼出自己的交易策略，並在平台上進行回測，未來會繼續擴展功能。",
    linkUrl: "https://github.com/brick-trader/brick-trader",
  },
  {
    name: "discord.js-message-listener",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg",
    subtitle:
      "可用於監聽 discord.js 的訊息事件並執行設定好的動作，套件內也提供 paginator 的實作。",
    linkUrl: "https://github.com/ppodds/discord.js-message-listener",
  },
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
    name: "AAAAnimation",
    icon: "aaaanimation.png",
    subtitle:
      "可從影片自動產生 ASCII 動畫的程式，底層使用 ffmpeg 做影片解碼，並利用 Qt 來撥放影片對照組。",
    linkUrl: "https://github.com/ppodds/AAAAnimation",
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
