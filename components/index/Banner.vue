<template>
  <header class="h-screen flex flex-auto justify-center items-center">
    <figure class="md:flex rounded-3xl shadow-2xl bg-white">
      <div class="m-12 flex flex-col items-center justify-center">
        <img class="h-64 w-64" src="~/assets/index/avatar.png" />
        <figcaption class="flex flex-col items-center justify-center">
          <h1 class="text-5xl font-bold">ppodds</h1>
          <blockquote>
            <h2 class="text-4xl font-bold mt-9 mb-5">About</h2>
          </blockquote>
          <blockquote>
            <p class="text-2xl">
              因為興趣而走上資訊的道路，對資訊領域充滿熱忱。平時喜歡做一些沒什麼用的小專案。
            </p>
          </blockquote>
        </figcaption>
      </div>
    </figure>
  </header>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
header {
  background: linear-gradient(to bottom, rgba(51, 51, 51, 0), #ffffff),
    url('~/assets/index/BannerBackground.jpg');
}
</style>
