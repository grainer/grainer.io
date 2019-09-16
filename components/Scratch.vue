<template>
  <section
    class="w-full flex flex-row relative items-center content-center justify-start items-start scratch"
  >
    <div class="ml-10 w-full">
      <section-header text="We can onboard your buisness on Blockchain"></section-header>
      <h2 class="font-h text-5xl">Strating from scratch?</h2>
      <p class="font-sh text-2xl">No worries, we got your back!</p>
    </div>
    <div>
      <img width="1700" src="@/assets/img/scratch.gif" />
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
.scratch {
  top: 55em;
  background-color: #162f40;
}
</style>
