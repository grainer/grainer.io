<template>
  <div class="text-white max-w-full w-full max-h-full inset-0 absolute font-p">
    <navigation class="fixed z-50 h-20 w-full inset-x-0 top-0"></navigation>
    <nuxt class="z-0" />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  components: {
    Navigation
  },
  mounted() {
    // const that = this
    // this.$nextTick(() => {
    //   window.addEventListener('load', () => {
    //     that.$nuxt.$loading.finish()
    //   })
    //   that.$nuxt.$loading.start()
    // })
  }
}
</script>

<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100% !important;
  margin: 0;
  background-color: #011b14;
  /* background-color: #122d40; */
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
