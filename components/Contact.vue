<template>
  <div class="w-full flex flex-row mx-48">
    <MglMap
      v-if="$route.hash === '#contact'"
      class="absolute inset-0 w-screen h-screen z-0"
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      :center="center"
      :zoom="zoom"
      :pitch="pitch"
      :bearing="bearing"
    >
      <svg
        class="relative inline-block"
        style="left: 0; top: 0; right: 0; bottom: 0; height: 100vh;"
        viewBox="0 0 257 150"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="0"
      >
        <path fill="url(#_Linear1)" d="M.408.3h255.6v262.8H.408z" />
        <defs>
          <linearGradient id="_Linear1" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(255.6 0 0 262.8 .408 131.7)">
            <stop offset="0" stop-color="#002018" />
            <stop offset="0.43" stop-color="#002018" stop-opacity=".99" />
            <stop offset=".6" stop-color="#002018" stop-opacity=".75" />
            <stop offset="1" stop-color="#002018" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <MglMarker :coordinates="office" color="#02F6B6" />
    </MglMap>
    <div class="w-1/2 z-10 mt-12">
      <div>
        <h1 class="font-h contact-us">
          {{ title }}
        </h1>
        <div class="w-16 h-3 bg-gr-green-light mt-2"></div>
      </div>
      <p class="font-p pt-2 w-2/3 mt-4">
        Let’s build something awesome together! <br />
        Whether you are looking for a solution or looking to turn your ideas into actual products, we are here to serve you!
      </p>
      <div>
        <form class="py-5" name="contact" method="POST" data-netlify="true">
          <div class="flex flex-col">
            <div class="flex justify-center">
              <input class="input p-4 mr-2 flex-grow" type="text" name="name" placeholder="Name" />
              <input class="input p-4 ml-2 flex-grow" type="email" name="email" placeholder="Email" />
            </div>
            <textarea class="input p-4 mt-4 flex-grow" style="min-height: 102px;" name="message" placeholder="Message"></textarea>
          </div>
          <button class="px-6 py-2 rounded-lg rounded-tr-none border-gr-green-light border-2 mt-10 font-sh outline-none slide interactive" type="submit">Get In Touch</button>
        </form>
      </div>
    </div>
    <div class="w-1/2 z-10 text-gr-green-light flex flex-col-reverse">
      <div class="w-1/2 ml-20 py-5">
        <div class="py-2"><a>+60 16 524 2696</a></div>
        <div class="py-2"><a>info@grainer.io</a></div>
        <div class="py-2 leading-relaxed">Tier 2 Warehouse Wisma Commercedotcom Jalan Tandang 51/204a46050 Petaling Jaya, Selangor, Malaysia</div>
        <div class="pt-2">
          <a href="https://twitter.com/grainerhq" target="_blank"
            ><i class="rounded-lg rounded-tr-none border-gr-green-light border-2 fab fa-twitter mr-2 p-3 slide interactive"></i
          ></a>
          <a href="https://www.instagram.com/grainerhq/" target="_blank"
            ><i class="rounded-lg rounded-tr-none border-gr-green-light border-2 fab fa-instagram mx-2 p-3 slide interactive"></i
          ></a>
          <a href="https://www.linkedin.com/company/grainer-hq" target="_blank"
            ><i class="rounded-lg rounded-tr-none border-gr-green-light border-2 fab fa-linkedin mx-2 p-3 slide interactive"></i
          ></a>
          <a href="https://facebook.com/grainerhq" target="_blank"
            ><i class="rounded-lg rounded-tr-none border-gr-green-light border-2 fab fa-facebook-f mx-2 p-3 slide interactive"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl'
import { MglMap, MglMarker } from 'vue-mapbox'

export default {
  components: {
    MglMap,
    MglMarker
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Contact Us'
    }
  },
  data() {
    return {
      year: new Date().getFullYear(),
      accessToken: 'pk.eyJ1IjoiYW1pbm9hc2lkIiwiYSI6ImNrMHFjOTQ4ajA2Z3kzZXBncmpjenBsNXoifQ.dDKhaMMHy03Eby0TgJtBpQ', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/aminoasid/ck0qylqzi0k7n1cnke0851ja5/draft', // your map style
      center: [101.634, 3.087],
      office: [101.6351756267295, 3.0872339342911914],
      zoom: 18.0,
      pitch: 27.68,
      bearing: 0
    }
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox
  }
}
</script>

<style lang="scss">
.contact-us {
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
}

.input {
  background-color: rgb(1, 43, 32);
}

.input::placeholder {
  color: #00a86b;
}

.mgl-map-wrapper {
  height: 100% !important;
  width: 100% !important;
}

.mapboxgl-map {
  overflow: visible;
}
</style>
