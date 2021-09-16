<template>
  <main>
    <banner />
    <info-block id="skills" title="技能"> <skills /></info-block>

    <page-footer />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Banner from '~/components/index/Banner.vue'
import InfoBlock from '~/components/index/InfoBlock.vue'
import Skills from '~/components/index/Skills.vue'
import PageFooter from '~/components/util/Footer.vue'

export default Vue.extend({
  components: { Banner, PageFooter, InfoBlock, Skills },
})
</script>
