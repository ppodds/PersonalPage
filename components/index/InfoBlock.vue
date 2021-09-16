<template>
  <section>
    <h2 class="text-4xl font-bold text-center m-4">{{ title }}</h2>
    <hr />
    <div class="flex justify-center m-4">
      <slot> </slot>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
  },
}
</script>

<style></style>
