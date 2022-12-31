<template>
  <div>
    <Banner />
    <main class="flex flex-col items-center justify-center">
      <div class="max-w-xs md:max-w-5xl">
        <InfoBlock id="skills" title="技能"> <Skills /></InfoBlock>
        <InfoBlock id="projects" title="專案"> <Projects /></InfoBlock>
        <InfoBlock id="experience" title="經歷"> <Experience /> </InfoBlock>
        <InfoBlock id="contact" title="聯絡"><Contact /></InfoBlock>
      </div>
    </main>
    <PageFooter />
  </div>
</template>
