<template>
  <main class="text-white font-p">
    <navigation class="fixed z-50 h-20 w-full inset-x-0 top-0"></navigation>
    <nuxt class="z-0" />
    <!-- Cursor Start-->
    <div class="cursor cursor--small"></div>
    <canvas class="cursor cursor--canvas" resize></canvas>
    <!-- Cursor End-->
  </main>
</template>

<script>
import paper from 'paper'
import SimplexNoise from 'simplex-noise'
import Navigation from '@/components/Navigation'

import '@/plugins/revealer/modernizr-custom'
import '@/plugins/revealer/classie'
import '@/plugins/revealer/main'
import { EventBus } from '@/plugins/eventBus.js'
/* eslint-disable camelcase */

export default {
  components: {
    Navigation
  },
  data() {
    return {
      rightRevealer: undefined,
      leftRevealer: undefined,
      topRevealer: undefined
    }
  },
  mounted() {
    // cursor animation from https://tympanus.net/codrops/2019/01/31/custom-cursor-effects/
    // set the starting position of the cursor outside of the screen
    let clientX = -100
    let clientY = -100
    const innerCursor = document.querySelector('.cursor--small')

    const initCursor = () => {
      // add listener to track the current mouse position
      document.addEventListener('mousemove', (e) => {
        clientX = e.clientX
        clientY = e.clientY
      })

      // transform the innerCursor to the current mouse position
      // use requestAnimationFrame() for smooth performance
      const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`
        // if you are already using TweenMax in your project, you might as well
        // use TweenMax.set() instead
        // TweenMax.set(innerCursor, {
        //   x: clientX,
        //   y: clientY
        // });

        requestAnimationFrame(render)
      }
      requestAnimationFrame(render)
    }

    initCursor()

    let lastX = 0
    let lastY = 0
    let isStuck = false
    // let showCursor = false
    // let fillOuterCursor
    let group, stuckX, stuckY

    const initCanvas = () => {
      const canvas = document.querySelector('.cursor--canvas')
      const shapeBounds = {
        width: 75,
        height: 75
      }
      paper.setup(canvas)
      const strokeColor = 'rgba(2, 246, 182, 1)'
      const strokeWidth = 1
      const segments = 8
      const radius = 15

      // we'll need these later for the noisy circle
      const noiseScale = 150 // speed
      const noiseRange = 4 // range of distortion
      let isNoisy = false // state

      // the base shape for the noisy circle
      const polygon = new paper.Path.RegularPolygon(new paper.Point(0, 0), segments, radius)
      polygon.strokeColor = strokeColor
      polygon.strokeWidth = strokeWidth
      polygon.smooth()
      group = new paper.Group([polygon])
      group.applyMatrix = false

      const noiseObjects = polygon.segments.map(() => new SimplexNoise())
      let bigCoordinates = []

      // function for linear interpolation of values
      const lerp = (a, b, n) => {
        return (1 - n) * a + n * b
      }

      // function to map a value from one range to another range
      const map = (value, in_min, in_max, out_min, out_max) => {
        return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      }

      // the draw loop of Paper.js
      // (60fps with requestAnimationFrame under the hood)
      paper.view.onFrame = (event) => {
        // using linear interpolation, the circle will move 0.2 (20%)
        // of the distance between its current position and the mouse
        // coordinates per Frame
        if (!isStuck) {
          // move circle around normally
          lastX = lerp(lastX, clientX, 0.2)
          lastY = lerp(lastY, clientY, 0.2)
          group.position = new paper.Point(lastX, lastY)
        } else if (isStuck) {
          // fixed position on a nav item
          lastX = lerp(lastX, stuckX, 0.2)
          lastY = lerp(lastY, stuckY, 0.2)
          group.position = new paper.Point(lastX, lastY)
        }

        if (isStuck && polygon.bounds.width < shapeBounds.width) {
          // scale up the shape
          polygon.scale(1.08)
        } else if (!isStuck && polygon.bounds.width > 30) {
          // remove noise
          if (isNoisy) {
            polygon.segments.forEach((segment, i) => {
              segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1])
            })
            isNoisy = false
            bigCoordinates = []
          }
          // scale down the shape
          const scaleDown = 0.92
          polygon.scale(scaleDown)
        }

        // while stuck and big, apply simplex noise
        if (isStuck && polygon.bounds.width >= shapeBounds.width) {
          isNoisy = true
          // first get coordinates of large circle
          if (bigCoordinates.length === 0) {
            polygon.segments.forEach((segment, i) => {
              bigCoordinates[i] = [segment.point.x, segment.point.y]
            })
          }

          // loop over all points of the polygon
          polygon.segments.forEach((segment, i) => {
            // get new noise value
            // we divide event.count by noiseScale to get a very smooth value
            const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0)
            const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1)

            // map the noise value to our defined range
            const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange)
            const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange)

            // apply distortion to coordinates
            const newX = bigCoordinates[i][0] + distortionX
            const newY = bigCoordinates[i][1] + distortionY

            // set new (noisy) coodrindate of point
            segment.point.set(newX, newY)
          })
        }
        polygon.smooth()
      }
    }

    initCanvas()

    const initHovers = () => {
      // find the center of the link element and set stuckX and stuckY
      // these are needed to set the position of the noisy circle
      const handleMouseEnter = (e) => {
        const navItem = e.currentTarget
        const navItemBox = navItem.getBoundingClientRect()
        stuckX = Math.round(navItemBox.left + navItemBox.width / 2)
        stuckY = Math.round(navItemBox.top + navItemBox.height / 2)
        isStuck = true
      }

      // reset isStuck on mouseLeave
      const handleMouseLeave = () => {
        isStuck = false
      }

      // add event listeners to all items
      const linkItems = document.querySelectorAll('.interactive')
      linkItems.forEach((item) => {
        item.addEventListener('mouseenter', handleMouseEnter)
        item.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    initHovers()
    EventBus.$on('inner-routing', () => {
      initHovers()
    })

    // Code related to reveal animation
    const that = this
    EventBus.$on('reveal', (direction) => {
      that.reveal(direction)
    })
    const revealerOpts = {
      // the layers are the elements that move from the sides
      nmbLayers: 3,
      // bg color of each layer
      bgcolor: ['#01D09A', '#016E51', '#011B14'],
      // effect classname
      effect: 'anim--effect-4',
      onStart: function(direction) {
        // next page gets class page--animate-[direction]
        // var nextPage = pages[currentPage === 0 ? 1 : 0]
        // classie.add(nextPage, 'page--animate-' + direction)
      },
      onEnd: function(direction) {
        // remove class page--animate-[direction] from next page
        // var nextPage = pages[currentPage === 0 ? 1 : 0]
        // nextPage.className = 'page'
      }
    }
    // eslint-disable-next-line no-undef
    this.leftRevealer = new Revealer(revealerOpts)
    // eslint-disable-next-line no-undef
    this.rightRevealer = new Revealer(revealerOpts)
    // eslint-disable-next-line no-undef
    this.topRevealer = new Revealer(revealerOpts)
  },
  methods: {
    reveal(direction) {
      const callbackTime = 750
      const callbackFn = () => {
        // classie.remove(pages[currentPage], 'page--current')
        // currentPage = currentPage === 0 ? 1 : 0
        // classie.add(pages[currentPage], 'page--current')
      }

      if (direction === 'right') {
        this.rightRevealer.reveal(direction, callbackTime, callbackFn)
      } else if (direction === 'left') {
        this.leftRevealer.reveal(direction, callbackTime, callbackFn)
      } else if (direction === 'top') {
        this.topRevealer.reveal(direction, callbackTime, callbackFn)
      }
    }
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

/* Cursor Styling */
.cursor {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
}
.cursor--small {
  width: 5px;
  height: 5px;
  left: -2.5px;
  top: -2.5px;
  border-radius: 50%;
  z-index: 11000;
  background: rgba(2, 246, 182, 0.3);
}
.cursor--canvas {
  width: 100vw;
  height: 100vh;
  z-index: 12000;
}

body,
body a {
  cursor: none;
}
/* Reavealer */

.revealer {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  pointer-events: none;
}

.revealer--cornertopleft,
.revealer--cornertopright,
.revealer--cornerbottomleft,
.revealer--cornerbottomright {
  top: 50%;
  left: 50%;
}

.revealer--top,
.revealer--bottom {
  left: 0;
}

.revealer--right,
.revealer--left {
  top: 50%;
  left: 50%;
}

.revealer--top {
  bottom: 100%;
}

.revealer--bottom {
  top: 100%;
}

.revealer__layer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ddd;
}

/* Effects  */

/* 1 */

.anim--effect-1 .codrops-header__subbox {
  color: #605bd4;
}

.anim--effect-1 .custom-select,
.anim--effect-1 .codrops-links,
.anim--effect-1 .pater {
  background: #605bd4;
}

/* 2 */

.anim--effect-2 .codrops-header__subbox {
  color: #9cdab1;
}

.anim--effect-2 .custom-select,
.anim--effect-2 .codrops-links,
.anim--effect-2 .pater {
  background: #9cdab1;
}

/* 4 */

.anim--effect-4 .codrops-header__subbox {
  color: #999;
}

.anim--effect-4 .custom-select,
.anim--effect-4 .codrops-links,
.anim--effect-4 .pater {
  background: #16161d;
}

.anim--effect-4 .custom-select select {
  color: white;
}

.anim--effect-4 .custom-select select option {
  color: black;
}

.anim--effect-4 .custom-select::after {
  border-top-color: white;
}
.anim--effect-3 .page:nth-child(2) {
  background: #f3a3d3;
}

.anim--effect-3 .revealer--animate .revealer__layer {
  animation: anim-effect-3-1 1.5s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
}

.anim--effect-3 .revealer--animate .revealer__layer:nth-child(2) {
  animation-name: anim-effect-3-2;
}

.anim--effect-3 .revealer--animate .revealer__layer:nth-child(3) {
  animation-name: anim-effect-3-3;
}

@keyframes anim-effect-3-1 {
  0% {
    transform: translate3d(0, 0, 0);
  }
  25%,
  75% {
    transform: translate3d(0, -100%, 0);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: translate3d(0, -200%, 0);
  }
}

@keyframes anim-effect-3-2 {
  0%,
  12.5% {
    transform: translate3d(0, 0, 0);
  }
  37.5%,
  62.5% {
    transform: translate3d(0, -100%, 0);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  87.5%,
  100% {
    transform: translate3d(0, -200%, 0);
  }
}

@keyframes anim-effect-3-3 {
  0%,
  25% {
    transform: translate3d(0, 0, 0);
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  75%,
  100% {
    transform: translate3d(0, -200%, 0);
  }
}

/* Revealer effects */

/* One layer effect (effect-1) */

.anim--effect-1 .page:first-child {
  background: #605bd4;
}

.anim--effect-1 .page:nth-child(2) {
  background: #ff6eae;
}

.anim--effect-1 .revealer--animate .revealer__layer {
  -webkit-animation: anim-effect-1 1.5s cubic-bezier(0.2, 1, 0.3, 1) forwards;
  animation: anim-effect-1 1.5s cubic-bezier(0.2, 1, 0.3, 1) forwards;
}

@-webkit-keyframes anim-effect-1 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  35%,
  65% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

@keyframes anim-effect-1 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  35%,
  65% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

/* Two layer effect (effect-2) */

.anim--effect-2 .page:first-child {
  background: #9cdab1;
}

.anim--effect-2 .page:nth-child(2) {
  background: #f9c969;
}

.anim--effect-2 .revealer--animate .revealer__layer {
  -webkit-animation: anim-effect-2-1 1.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
  animation: anim-effect-2-1 1.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
}

.anim--effect-2 .revealer--animate .revealer__layer:nth-child(2) {
  -webkit-animation-name: anim-effect-2-2;
  animation-name: anim-effect-2-2;
}

@-webkit-keyframes anim-effect-2-1 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  30%,
  70% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  }
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

@keyframes anim-effect-2-1 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  30%,
  70% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  }
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

@-webkit-keyframes anim-effect-2-2 {
  0%,
  14.5% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  37.5%,
  62.5% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  }
  85.5%,
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

@keyframes anim-effect-2-2 {
  0%,
  14.5% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  37.5%,
  62.5% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  }
  85.5%,
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

/* Three layer effect (effect-3) */

.anim--effect-3 .page:nth-child(2) {
  background: #ecf3a3;
}

.anim--effect-3 .revealer--animate .revealer__layer {
  -webkit-animation: anim-effect-3-1 1.5s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
  animation: anim-effect-3-1 1.5s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
}

.anim--effect-3 .revealer--animate .revealer__layer:nth-child(2) {
  -webkit-animation-name: anim-effect-3-2;
  animation-name: anim-effect-3-2;
}

.anim--effect-3 .revealer--animate .revealer__layer:nth-child(3) {
  -webkit-animation-name: anim-effect-3-3;
  animation-name: anim-effect-3-3;
}

@-webkit-keyframes anim-effect-3-1 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  25%,
  75% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

@keyframes anim-effect-3-1 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  25%,
  75% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

@-webkit-keyframes anim-effect-3-2 {
  0%,
  12.5% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  37.5%,
  62.5% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  87.5%,
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

@keyframes anim-effect-3-2 {
  0%,
  12.5% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  37.5%,
  62.5% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  87.5%,
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

@-webkit-keyframes anim-effect-3-3 {
  0%,
  25% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  75%,
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

@keyframes anim-effect-3-3 {
  0%,
  25% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  75%,
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

/* Forth effect */

.anim--effect-4 .page:first-child {
  background: #28282d;
}

.anim--effect-4 .page:nth-child(2) {
  background: #011b14;
}

.anim--effect-4 .page--animate-top .quote {
  -webkit-animation: moveQuoteTop 1.5s forwards;
  animation: moveQuoteTop 1.5s forwards;
}

@-webkit-keyframes moveQuoteTop {
  0%,
  65% {
    -webkit-transform: translate3d(0, -75px, 0);
    transform: translate3d(0, -75px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes moveQuoteTop {
  0%,
  65% {
    -webkit-transform: translate3d(0, -75px, 0);
    transform: translate3d(0, -75px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.anim--effect-4 .page--animate-bottom .quote {
  -webkit-animation: moveQuoteBottom 1.5s forwards;
  animation: moveQuoteBottom 1.5s forwards;
}

@-webkit-keyframes moveQuoteBottom {
  0%,
  65% {
    -webkit-transform: translate3d(0, 75px, 0);
    transform: translate3d(0, 75px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes moveQuoteBottom {
  0%,
  65% {
    -webkit-transform: translate3d(0, 75px, 0);
    transform: translate3d(0, 75px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.anim--effect-4 .page--animate-left .quote {
  -webkit-animation: moveQuoteLeft 1.5s forwards;
  animation: moveQuoteLeft 1.5s forwards;
}

@-webkit-keyframes moveQuoteLeft {
  0%,
  65% {
    -webkit-transform: translate3d(-75px, 0, 0);
    transform: translate3d(-75px, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes moveQuoteLeft {
  0%,
  65% {
    -webkit-transform: translate3d(-75px, 0, 0);
    transform: translate3d(-75px, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.anim--effect-4 .page--animate-right .quote {
  -webkit-animation: moveQuoteRight 1.5s forwards;
  animation: moveQuoteRight 1.5s forwards;
}

@-webkit-keyframes moveQuoteRight {
  0%,
  65% {
    -webkit-transform: translate3d(75px, 0, 0);
    transform: translate3d(75px, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes moveQuoteRight {
  0%,
  65% {
    -webkit-transform: translate3d(75px, 0, 0);
    transform: translate3d(75px, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.anim--effect-4 .page--animate-cornertopright .quote {
  -webkit-animation: moveQuoteCornerTopRight 1.5s forwards;
  animation: moveQuoteCornerTopRight 1.5s forwards;
}

@-webkit-keyframes moveQuoteCornerTopRight {
  0%,
  65% {
    -webkit-transform: translate3d(50px, -50px, 0);
    transform: translate3d(50px, -50px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes moveQuoteCornerTopRight {
  0%,
  65% {
    -webkit-transform: translate3d(50px, -50px, 0);
    transform: translate3d(50px, -50px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.anim--effect-4 .page--animate-cornertopleft .quote {
  -webkit-animation: moveQuoteCornerTopLeft 1.5s forwards;
  animation: moveQuoteCornerTopLeft 1.5s forwards;
}

@-webkit-keyframes moveQuoteCornerTopLeft {
  0%,
  65% {
    -webkit-transform: translate3d(-50px, -50px, 0);
    transform: translate3d(-50px, -50px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes moveQuoteCornerTopLeft {
  0%,
  65% {
    -webkit-transform: translate3d(-50px, -50px, 0);
    transform: translate3d(-50px, -50px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.anim--effect-4 .page--animate-cornerbottomright .quote {
  -webkit-animation: moveQuoteCornerBottomRight 1.5s forwards;
  animation: moveQuoteCornerBottomRight 1.5s forwards;
}

@-webkit-keyframes moveQuoteCornerBottomRight {
  0%,
  65% {
    -webkit-transform: translate3d(50px, 50px, 0);
    transform: translate3d(50px, 50px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes moveQuoteCornerBottomRight {
  0%,
  65% {
    -webkit-transform: translate3d(50px, 50px, 0);
    transform: translate3d(50px, 50px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.anim--effect-4 .page--animate-cornerbottomleft .quote {
  -webkit-animation: moveQuoteCornerBottomLeft 1.5s forwards;
  animation: moveQuoteCornerBottomLeft 1.5s forwards;
}

@-webkit-keyframes moveQuoteCornerBottomLeft {
  0%,
  65% {
    -webkit-transform: translate3d(-50px, 50px, 0);
    transform: translate3d(-50px, 50px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes moveQuoteCornerBottomLeft {
  0%,
  65% {
    -webkit-transform: translate3d(-50px, 50px, 0);
    transform: translate3d(-50px, 50px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.anim--effect-4 .revealer--animate .revealer__layer {
  -webkit-animation: anim-effect-4-1 1.5s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
  animation: anim-effect-4-1 1.5s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
}

.anim--effect-4 .revealer--animate .revealer__layer:nth-child(2) {
  -webkit-animation-name: anim-effect-4-2;
  animation-name: anim-effect-4-2;
  -webkit-animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
}

.anim--effect-4 .revealer--animate .revealer__layer:nth-child(3) {
  -webkit-animation-name: anim-effect-4-3;
  animation-name: anim-effect-4-3;
  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
}

@-webkit-keyframes anim-effect-4-1 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  35%,
  65% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

@keyframes anim-effect-4-1 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  35%,
  65% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

@-webkit-keyframes anim-effect-4-2 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  45%,
  55% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

@keyframes anim-effect-4-2 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  45%,
  55% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

@-webkit-keyframes anim-effect-4-3 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  45%,
  55% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}

@keyframes anim-effect-4-3 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  45%,
  55% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  100% {
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
}
</style>
