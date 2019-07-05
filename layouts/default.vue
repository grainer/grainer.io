<template>
  <div class="bg-gr-bg text-white max-w-full w-full max-h-full h-full inset-0 absolute">
    <navigation class="fixed h-16 bg-red-600 w-full inset-x-0 top-0"></navigation>
    <nuxt />
    <footer class="absolute w-full inset-x-0 bottom-0">This is a footer</footer>
  </div>
</template>

<script>
import navigation from '@/components/Navigation'
export default {
  components: {
    navigation
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
  height: 100% !important;
}

body {
  width: 100%;
  height: 100% !important;
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
