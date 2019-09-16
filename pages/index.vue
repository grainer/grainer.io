<template>
  <section class="flex flex-col content-center justify-center items-center mt-16 mb-48 inset-0">
    <div id="trigger1"></div>
    <parallax-logo></parallax-logo>
    <bio></bio>
    <div id="trigger2" class="relative"></div>
    <services></services>
    <scratch></scratch>
    <rethink></rethink>
    <tech></tech>
  </section>
</template>

<script>
import disintegrate from 'disintegrate'

import ParallaxLogo from '@/components/ParallaxLogo'
import Bio from '@/components/Bio'
import Services from '@/components/Services'
import Scratch from '@/components/Scratch'
import Rethink from '@/components/Rethink'
import Tech from '@/components/Tech'
// import _ from 'lodash-es'

export default {
  name: 'Index',
  components: {
    ParallaxLogo,
    Bio,
    Services,
    Scratch,
    Rethink,
    Tech
  },
  mounted() {
    disintegrate.init()
    /* eslint-disable no-unused-vars, nuxt/no-env-in-hooks */
    // scroll magic
    // init controller
    const ScrollMagic = require('scrollmagic')
    const controller = new ScrollMagic.Controller()
    const logoScroll = new ScrollMagic.Scene({
      triggerElement: '#trigger1',
      duration: 800,
      triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
      reverse: true
    })
      .setPin('#logo')
      .setClassToggle('#tagline', 'text-blur-out') // add class toggle
      .addTo(controller)

    const servicehScroll = new ScrollMagic.Scene({
      triggerElement: '#trigger2',
      triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
      reverse: true
    })
      .setClassToggle('.service-head', 'slide-right') // add class toggle
      .addTo(controller)
    const servicebScroll = new ScrollMagic.Scene({
      triggerElement: '#trigger2',
      duration: 800,
      triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
      reverse: true
    })
      .setClassToggle('.serice-body', 'slide-left') // add class toggle
      .addTo(controller)
  }
}
</script>

<style>
.debug {
  background-color: red;
  width: 100%;
  height: 2px;
}
#log {
  pointer-events: all;
}

#trigger2 {
  top: 12rem !important;
}
</style>
