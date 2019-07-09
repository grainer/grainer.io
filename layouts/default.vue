<template>
  <div class="text-white max-w-full w-full max-h-full inset-y-auto inset-x-0 absolute font-p">
    <navigation class="fixed z-50 h-16 w-full inset-x-0 top-0"></navigation>
    <nuxt class="z-0" />
    <footer
      class="w-full h-64 absolute bg-gray-800"
      style="bottom: calc(100vh + 16rem)"
    >This is a footer</footer>
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
}

html,
body {
  width: 100%;
  height: 100% !important;
  margin: 0;
  background-color: #060e0c;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
