<template>
  <div class="w-full flex flex-row">
    <div v-show="index === 0" class="fixed inset-0 w-screen h-screen">
      <video class="w-full" preload="auto" autoplay="true" loop="true">
        <source src="@/assets/vid/seed-cp.webm" type="video/webm" />

        <source src="@/assets/vid/seed-cp.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="w-1/2 z-10">
      <h1 class="font-h start-line ml-48">
        Everything Starts With an
        <span class="idea px-4">idea</span>
      </h1>
    </div>
    <div class="w-1/2"></div>
  </div>
</template>

<script>
export default {
  computed: {
    index() {
      return this.$store.getters.getIndex
    }
  }
}
</script>

<style>
.start-line {
  font-size: 100px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 2.5px;
  text-align: left;
}
.idea {
  color: #011b14;
  background-color: #02f6b6;
}
</style>
