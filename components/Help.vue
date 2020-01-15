<template>
  <div class="w-full h-full flex flex-row justify-center items-center">
    <div class="w-1/3 relative">
      <div class="w-3 h-16 bg-gr-green-light ml-48 mt-2"></div>
      <h1 class="font-h craft-line ml-56 -mt-20  absolute">
        How Can We Help You?
      </h1>
    </div>
    <div class="w-2/3 h-full flex justify-center items-center">
      <div class="swiper-inner h-full w-full flex justify-center items-start flex-col relative overflow-hidden">
        <swiper :options="swiperOption" @slideChange="setStyle">
          <swiper-slide>
            <h2>Consulting</h2>
          </swiper-slide>
          <swiper-slide>
            <h2>Development</h2>
          </swiper-slide>
          <swiper-slide>
            <h2>Innovation Hub</h2>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 50,
          shadowScale: 1
        },
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  mounted() {
    this.setStyle()
  },
  methods: {
    setStyle() {
      const paginations = document.getElementsByClassName('swiper-pagination-bullet')

      for (let i = 0; i < paginations.length; i++) {
        const bullet = paginations[i]
        bullet.style = `width: 7em !important;
                      height: 0.5em !important;
                      margin: 0 0 !important;
                      border-radius: 0 !important;`
      }
      const highlitedPagination = document.getElementsByClassName('swiper-pagination-bullet-active')
      highlitedPagination[0].style = `width: 7em !important;
                                    height: 0.5em !important;
                                    margin: 0 0 !important;
                                    border-radius: 0 !important;
                                    opacity: 1;
                                    background: #02f6b6 !important;`
    }
  }
}
</script>

<style scoped>
.swiper-inner {
  width: 504.3px;
  height: 650px;
}
.swiper-slide {
  opacity: 0.53;
  background-color: rgb(0, 66, 46);
}
.swiper-container {
  width: 504.3px !important;
  height: 603px !important;
  position: absolute;
  margin-left: 4em;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background: #02f6b6 !important;
}
</style>
