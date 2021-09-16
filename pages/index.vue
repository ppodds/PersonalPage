<template>
  <main>
    <banner />

    <page-footer />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Banner from '~/components/index/Banner.vue'
import PageFooter from '~/components/util/Footer.vue'

export default Vue.extend({
  components: { Banner, PageFooter },
})
</script>
