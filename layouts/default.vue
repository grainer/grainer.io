<template>
  <div class="text-white max-w-full w-full max-h-full inset-0 absolute font-p">
    <navigation class="fixed z-50 h-20 w-full inset-x-0 top-0"></navigation>
    <nuxt class="z-0" />
    <footer
      class="w-full h-64 relative bg-gray-800 inset-x-0 bottom-0"
      :style="{ 'margin-top': height + 'px' }"
    >This is a footer</footer>
  </div>
</template>

<script>
import navigation from '@/components/Navigation'
export default {
  components: {
    navigation
  },
  data() {
    return {
      height: 750
    }
  },
  mounted() {
    const that = this
    window.addEventListener('load', () => {
      that.height = document.documentElement.scrollHeight
    })
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
