<template>
  <div
    style="top: 55em; height: 35em;"
    class="relative inset-x-0 bottom-0 bg-gray-800 flex flex-col footer"
  >
    <div class="flex flex-row h-full">
      <div class="about-us flex flex-col w-full">
        <div class="mx-12 mt-12">
          <!-- <img class="w-32" src="@/static/pure-logo.png" alt="Grainer's logo" /> -->
          <h3 class="font-h text-5xl mb-4 ml-24">Contacts</h3>
          <div class="flex">
            <svg
              class="h-40"
              viewBox="0 0 36 166"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
            >
              <g fill="#00a178" fill-rule="nonzero">
                <path
                  d="M35.387 117.922v-9.877L.206 72.863l.001 9.879 35.18 35.18zM35.387 141.879v-9.877L.206 96.82l.001 9.879 35.18 35.18zM.207 10.772l35.18 35.18v-9.879L.207.893v9.879zM35.387 93.917v-9.88L.207 48.857l-.001 9.878 35.181 35.182zM35.387 165.886v-9.879l-35.18-35.18v9.879l35.18 35.18zM35.387 69.909l-.001-9.878-35.18-35.18.001 9.878 35.18 35.18z"
                />
              </g>
            </svg>
            <div class="flex flex-col">
              <p
                class="mt-6 ml-16 w-2/4"
              >Grainer is a general IT company providing entreprise grade solutions serving clients arround the wolrd. we pride ourselves with our expertise in blockchain and AI feilds</p>
            </div>
          </div>
        </div>
        <div class="ml-20">
          <ul class="flex flex-row flex-wrap">
            <li class="mx-10 text-gr-green-light">
              <i class="text-xl mr-2 fas fa-phone-alt"></i>
              <a class="font-h" href="tel:+60165242696">+60 165-24-2696</a>
            </li>
            <li class="mx-10 text-gr-green-light">
              <i class="text-xl mr-2 fas fa-envelope"></i>
              <a class="font-h" href="mailto:info@grainer.io">info@grainer.io</a>
            </li>

            <li class="mx-10 flex items-center">
              <i class="text-xl mr-4 text-gr-green-light fas fa-map-marker-alt"></i>
              <div
                class="w-2/5 mt-4 font-h"
              >Tier 2 Warehouse Wisma Commercedotcom Jalan Tandang 51/204a46050 Petaling Jaya, Selangor, Malaysia</div>
            </li>
          </ul>
        </div>
        <div class="flex ml-24 mt-16">
          <i class="text-xl mx-4 text-gr-green-light fab fa-twitter"></i>
          <i class="text-xl mx-4 text-gr-green-light fab fa-facebook"></i>
          <i class="text-xl mx-4 text-gr-green-light fab fa-instagram"></i>
          <i class="text-xl mx-4 text-gr-green-light fab fa-youtube"></i>
          <i class="text-xl mx-4 text-gr-green-light fab fa-linkedin"></i>
        </div>
      </div>

      <MglMap
        :accessToken="accessToken"
        :mapStyle="mapStyle"
        :center="center"
        :zoom="zoom"
        :pitch="pitch"
        :bearing="bearing"
      >
        <svg
          class="absolute"
          style="left: -1em; height: 35em;"
          viewBox="0 0 257 264"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
        >
          <path fill="url(#_Linear1)" d="M.408.3h255.6v262.8H.408z" />
          <defs>
            <linearGradient
              id="_Linear1"
              x2="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(255.6 0 0 262.8 .408 131.7)"
            >
              <stop offset="0" stop-color="#2d3748" />
              <stop offset=".5" stop-color="#2d3748" stop-opacity=".75" />
              <stop offset="1" stop-color="#2d3748" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <MglMarker :coordinates="office" color="red" />
      </MglMap>
    </div>
    <footer
      class="text-center w-full text-xs text-gray-200 bottom-0 z-10"
    >Copyright © Grainer {{ year }}. All Rights Reserved.</footer>
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
  data() {
    return {
      year: new Date().getFullYear(),
      accessToken: 'pk.eyJ1IjoiYW1pbm9hc2lkIiwiYSI6ImNrMHFjOTQ4ajA2Z3kzZXBncmpjenBsNXoifQ.dDKhaMMHy03Eby0TgJtBpQ', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/aminoasid/ck0qylqzi0k7n1cnke0851ja5/draft', // your map style
      center: [101.632371, 3.084861],
      office: [101.6351756267295, 3.0872339342911914],
      zoom: 16.06,
      pitch: 56.5,
      bearing: 38.4
    }
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox
  },
  mounted() {
    // /* eslint-disable no-unused-vars */
    // mapboxgl.accessToken = 'pk.eyJ1IjoiYW1pbm9hc2lkIiwiYSI6ImNrMHFjOTQ4ajA2Z3kzZXBncmpjenBsNXoifQ.dDKhaMMHy03Eby0TgJtBpQ'
    // const map = new mapboxgl.Map({
    //   container: 'map',
    //   // style: '',
    //   style: 'mapbox://styles/mapbox/light-v10',
    //   antialias: true,
    //   center: [-74.0066, 40.7135],
    //   zoom: 12.34,
    //   pitch: 45,
    //   bearing: -17.6
    // })
    // // resize the window to get rise of the stretch look in the map
    // this.resizeMap()
  }
}
</script>

<style>
.mgl-map-wrapper {
  height: 100% !important;
}

.mapboxgl-map {
  overflow: visible;
}
</style>
