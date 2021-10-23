<template>
  <div>
    <banner />
    <main class="flex flex-col items-center justify-center">
      <div class="max-w-xs md:max-w-5xl">
        <info-block id="skills" title="技能"> <skills /></info-block>
        <info-block id="projects" title="專案"> <projects /></info-block>
        <info-block id="experience" title="經歷"> <experience /> </info-block>
        <info-block id="contact" title="聯絡"><contact /></info-block>
      </div>
    </main>
    <page-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Banner from '~/components/index/Banner.vue'
import Contact from '~/components/index/Contact.vue'
import Experience from '~/components/index/Experience.vue'
import InfoBlock from '~/components/index/InfoBlock.vue'
import Projects from '~/components/index/Projects.vue'
import Skills from '~/components/index/Skills.vue'
import PageFooter from '~/components/util/Footer.vue'

export default Vue.extend({
  components: {
    Banner,
    PageFooter,
    InfoBlock,
    Skills,
    Projects,
    Contact,
    Experience,
  },
})
</script>
