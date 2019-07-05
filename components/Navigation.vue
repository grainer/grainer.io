<template>
  <nav class="flex items-center justify-between">
    <img
      class="w-32 ml-6 mt-6 cursor-pointer"
      src="../static/logo.png"
      alt="Grainer's logo"
      @click="goHome"
    />
    <div class="mn-btn cursor-pointer mt-4 mr-12" @click="menueModal">
      Menue
      <svg class="inline" width="12" height="12">
        <rect x="0" y="0" width="12" height="12" fill="#02F6B6" />
      </svg>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    goHome() {
      // TODO: navigate back to home
      console.log('Go Home')
    },
    menueModal() {
      // TODO: throw an enev to open the menue modal
    }
  }
}
</script>

<style>
</style>
