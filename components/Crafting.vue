<template>
  <div class="w-full flex mx-48 flex-row">
    <div class="w-1/2 z-10">
      <h1 class="font-h craft-line mt-3">
        <div>Crafting Robust</div>
        <div>
          Enterprise
          <span class="highlight px-4">IT Solutions</span>
        </div>Is Our Commitment & Passion!
      </h1>
      <div class="w-16 h-3 bg-gr-green-light mt-2"></div>
      <p
        class="font-p mt-5"
      >We are an IT company with expertise in Blockchain and Artificial Intelligence.</p>
      <button
        class="px-6 py-2 rounded-lg rounded-tr-none border-gr-green-light border-2 mt-10 font-sh outline-none slide interactive"
        @click="goToAbout"
      >About Us</button>
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
