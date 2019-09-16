<template>
  <section
    class="w-full flex flex-row relative items-center content-center justify-end items-end rethink"
  >
    <div class="mt-12">
      <img width="1700" src="@/assets/img/rethinking.gif" />
    </div>
    <div class="ml-16 w-full">
      <section-header text="System integration and solution enhacment"></section-header>
      <h2 class="font-h text-5xl">Rethinking your Solution?</h2>
      <p class="font-sh text-2xl">We can help you!</p>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'

export default {
  components: {
    SectionHeader
  }
}
</script>

<style>
.rethink {
  top: 55em;
  background-color: #123d45;
}
</style>
