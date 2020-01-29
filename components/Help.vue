<template>
  <div class="w-full h-full flex flex-row justify-center items-center">
    <div class="w-1/3 relative">
      <div class="w-3 h-16 bg-gr-green-light ml-48"></div>
      <h1
        class="font-h craft-line ml-56 -mt-20 absolute"
        style="margin-top: -4.8rem"
      >How Can We Help You?</h1>
    </div>
    <div class="w-2/3 h-full flex justify-center items-center">
      <div
        class="swiper-inner h-full w-full mt-10 flex justify-center items-start flex-col relative overflow-hidden"
      >
        <swiper :options="swiperOption" @slideChange="setStyle">
          <swiper-slide>
            <div class="p-10">
              <h1 class="font-h craft-line">Consulting</h1>
              <div class="w-16 h-3 bg-gr-green-light mt-2"></div>
              <p
                class="mt-4"
              >We offer consulting and technology implementation services to businesses that want to re-define their customer success stories through digital transformation.</p>
              <p
                class="mt-4"
              >Our consulting team helps deliver remarkable enterprise architecture designs, business plan development, proof of concept, process automation and more. We help you make sound decisions and evaluate the right solutions for your business.</p>
              <button
                class="px-6 py-2 rounded-lg rounded-tr-none border-gr-green-light border-2 mt-5 font-sh outline-none slide interactive"
                type="submit"
                @click="goToContact"
              >Talk To Us</button>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-10">
              <h1 class="font-h craft-line">Development</h1>
              <div class="w-16 h-3 bg-gr-green-light mt-2"></div>
              <p
                class="mt-4"
              >Our dedicated team of technology experts partner with you and usher you through every step of the way to translate your ideas into robust solutions.</p>
              <p
                class="mt-4"
              >Using cutting edge technologies and best practices, we aim to develop solutions that are scalable, secure, and maintainable, putting you and your company at the forefront of your industry.</p>
              <button
                class="px-6 py-2 rounded-lg rounded-tr-none border-gr-green-light border-2 mt-5 font-sh outline-none slide interactive"
                type="submit"
                @click="goToContact"
              >Get In Touch</button>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-10">
              <h1 class="font-h craft-line">Innovation Hub</h1>
              <div class="w-16 h-3 bg-gr-green-light mt-2"></div>
              <p
                class="mt-4"
              >We constantly research and develop solutions for the right use case and corresponding market. We are passionate about emerging technologies in the areas of blockchain, artificial intelligence (AI), machine learning, advanced security solutions, data analytics, and the Internet of Things.</p>
              <p
                class="mt-4"
              >As part of its vertical innovation strategy, Grainer is always on the lookout for startups in the ideation stage for incubation. We provide you the tools and expertise to take your idea to the next level!</p>
              <button
                class="px-6 py-2 rounded-lg rounded-tr-none border-gr-green-light border-2 mt-5 font-sh outline-none slide interactive"
                type="submit"
                @click="goToContact"
              >Reach Out</button>
            </div>
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

      const shadow = document.getElementsByClassName('swiper-cube-shadow')
      shadow[0].style = `pointer-events: none !important;`
    },
    goToContact() {
      this.$store.commit('goto', '#contact')
    }
  }
}
</script>

<style scoped>
.swiper-inner {
  width: 700px;
  height: 520px;
}
.swiper-slide {
  background-color: rgb(0, 66, 46, 0.53);
}
.swiper-container {
  width: 650px !important;
  height: 500px !important;
  position: absolute;
  margin-left: 0;
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
