<template>
  <div>
    <nav class="flex items-center justify-between">
      <img
        class="w-32 ml-6 mt-6 cursor-pointer"
        src="../static/logo.png"
        alt="Grainer's logo"
        @click="goHome"
      />
      <div class="mn-btn cursor-pointer mt-4 mr-12 font-h" @click="menuModal">
        Menu
        <svg class="inline" width="12" height="12">
          <rect x="0" y="0" width="12" height="12" fill="#02F6B6" />
        </svg>
      </div>
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
  methods: {
    goHome() {
      // TODO: navigate back to home
      console.log('Go Home')
    },
    menuModal() {
      this.open = true
    }
  }
}
</script>

<style>
</style>
