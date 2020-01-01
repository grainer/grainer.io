<template>
  <div>
    <nav class="flex h-full items-center">
      <img
        src="@/static/logo.png"
        srcset="img/logo@2x.png 2x, img/logo@3x.png 3x"
        class="Logo w-32 ml-6 cursor-pointer"
        alt="Grainer's logo"
        @click="goHome"
      />

      <div class="ml-6">
        <ul class="flex flex-row">
          <svg class="inline absolute top-0" width="500" height="12">
            <rect
              x="0"
              y="0"
              :style="`${computedTranslate}; transition: all 0.3s ease-out;`"
              width="51"
              height="12"
              fill="#014734"
            />
            <rect
              x="0"
              y="0"
              :style="`${computedTranslate}; transition: all 0.5s ease-out;`"
              width="51"
              height="12"
              fill="#02F6B6"
            />
          </svg>
          <nuxt-link to="/" tag="li" prefetch class="mx-10 font-sh cursor-pointer">Home</nuxt-link>
          <nuxt-link to="/about" tag="li" prefetch class="mx-10 font-sh cursor-pointer">About Us</nuxt-link>
          <nuxt-link to="/career" tag="li" prefetch class="mx-10 font-sh cursor-pointer">Career</nuxt-link>
        </ul>
      </div>
      <!-- <div class="mn-btn cursor-pointer mr-12 font-h" @click="menuModal">
        Menu
        <svg class="inline" width="12" height="12">
          <rect x="0" y="0" width="12" height="12" fill="#02F6B6" />
        </svg>
      </div>-->
    </nav>
    <gr-menu v-model="open"></gr-menu>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  components: {
    'gr-menu': Menu
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    computedTranslate() {
      console.log(this.$route.path)
      if (this.$route.path === '/') {
        return `transform: translate(2.5em,0)`
      } else if (this.$route.path === '/about') {
        return `transform: translate(10em,0)`
      } else if (this.$route.path === '/career') {
        return `transform: translate(19em,0)`
      }
      return `transform: translate(2.5em,0)`
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    menuModal() {
      this.open = true
    }
  }
}
</script>

<style>
</style>
