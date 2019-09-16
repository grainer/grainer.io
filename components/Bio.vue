<template>
  <section
    style="top: 48em;"
    class="w-full flex flex-row relative items-center content-center justify-start items-start"
  >
    <div class="ml-10">
      <section-header text="We’re an IT company with expertise in Blockchain"></section-header>
      <p class="font-h text-5xl">
        Crafting robust entreprise solutions for your business is our
        <span
          class="text-gr-green"
        >passion</span>
      </p>
    </div>
    <div>
      <img src="@/assets/img/bio.png" />
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
</style>
