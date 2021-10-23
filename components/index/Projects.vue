<template>
  <div class="flex flex-wrap w-full">
    <item
      :data="project"
      blockSize="big"
      v-for="project of projects"
      :key="project.name"
    />
  </div>
</template>

<script lang="ts">
import Item from './Item.vue'
export default {
  components: { Item },
  data() {
    return {
      projects: [
        {
          name: 'Discord Bot Yue',
          icon: require('../../assets/index/Yue.png'),
          subtitle:
            '用於NCU CSIE Discord伺服器的多功能Bot，有一些獨特的娛樂功能。',
          linkUrl: 'https://github.com/ppodds/YueJS',
        },
        {
          name: 'Cool Generator',
          icon: require('../../assets/index/CoolGenerator.png'),
          subtitle:
            '看到朋友做的奇怪圖片有感而發，在一天之內做出來的玩具圖片產生器。',
          linkUrl: 'https://github.com/ppodds/CoolGenerator',
        },
        {
          name: 'Star Burst Block',
          icon: require('../../assets/index/StarBurstBlock.JPG'),
          subtitle:
            '大一計算機實習課的JavaFX Final Project，基本上是一個俄羅斯方塊遊戲，但是有被徹底改寫過的遊戲規則。',
          linkUrl: 'https://github.com/ppodds/StarBurstBlock',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
