<template>
  <div>
    <nav class="flex h-full items-center mt-6">
      <img src="@/static/Logo.png" srcset="@/static/Logo@2x.png 2x, @/static/Logo@3x.png 3x" class="Logo ml-6 interactive" alt="Grainer's logo" @click="goHome" />

      <div class="ml-6">
        <ul class="flex flex-row">
          <svg class="inline absolute top-0" width="500" height="12">
            <rect x="0" y="0" :style="`${computedTranslate}; transition: all 0.3s ease-out;`" width="51" height="12" fill="#014734" />
            <rect x="0" y="0" :style="`${computedTranslate}; transition: all 0.5s ease-out;`" width="51" height="12" fill="#02F6B6" />
          </svg>
          <li class="interactive">
            <nuxt-link to="/#home" prefetch class="mx-10 font-sh">Home</nuxt-link>
          </li>
          <li class="interactive">
            <nuxt-link to="/about" prefetch class="mx-10 font-sh">About Us</nuxt-link>
          </li>
          <li class="interactive">
            <nuxt-link to="/career" prefetch class="mx-10 font-sh">Career</nuxt-link>
          </li>
        </ul>
      </div>
      <button class="absolute right-0 px-6 py-2 rounded-lg rounded-tr-none border-gr-green-light border-2 mr-12 font-sh outline-none slide interactive" @click="goToContact">
        Contact Us
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    computedTranslate() {
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
      this.$store.commit('goto', '#home')
    },
    goToContact() {
      this.$router.push('/')
      this.$store.commit('goto', '#contact')
    }
  }
}
</script>

<style>
.logo {
  width: 161.3px;
  height: 72.6px;
  object-fit: contain;
}

/* And from the left */
.slide:hover,
.slide:focus {
  box-shadow: inset 12em 0 0 0 #02f6b6;
  color: #011b14;
}

.slide {
  transition: 0.25s;
}
</style>
