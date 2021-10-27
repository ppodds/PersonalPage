<template>
  <div class="flex flex-wrap w-full">
    <item
      :data="experience"
      blockSize="medium"
      v-for="experience of experiences"
      :key="experience.name"
    />
  </div>
</template>

<script lang="ts">
import Item from './Item.vue'
export default {
  components: { Item },
  data() {
    return {
      experiences: [
        {
          name: 'GDSC NCU',
          icon: require('../../assets/index/gd_dsc_lockup_vertical_color.png'),
          subtitle: '2021 Core Team',
          linkUrl: 'https://www.facebook.com/GDSCNCU',
        },
        {
          name: 'CYIC 22nd',
          icon: require('../../assets/index/CYIC.jpg'),
          subtitle: '教學長兼任公關活動',
          linkUrl: 'https://www.facebook.com/ILOVECYIC',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
