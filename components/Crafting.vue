<template>
  <div class="w-full flex flex-row">
    <div class="w-1/2">
      <h1 class="font-h craft-line ml-48 mt-24">
        Crafting Robust Enterprise
        <span class="highlight px-4">IT Solutions</span> Is Our Commitment & Passion!
      </h1>
      <div class="w-32 h-3 bg-gr-green-light ml-48 mt-2"></div>
      <button class="px-6 py-2 rounded-lg rounded-tr-none border-gr-green border-2 ml-48 mt-24 font-sh outline-none slide interactive" @click="goToAbout">About Us</button>
    </div>
    <div class="w-1/2"></div>
  </div>
</template>

<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push('/about')
    }
  }
}
</script>

<style>
.craft-line {
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: 1.25px;
  text-align: left;
}
.highlight {
  color: #011b14;
  background-color: #02f6b6;
}
</style>
