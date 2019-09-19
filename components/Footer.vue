<template>
  <div style="top: 55em" class="relative inset-x-0 bottom-0 bg-gray-800 flex flex-col">
    <div class="flex flex-row">
      <div class="about-us flex flex-col">
        <div>
          <img class="w-32" src="@/static/pure-logo.png" alt="Grainer's logo" />
          <p>Grainer is a general IT company providing entreprise grade solutions serving clients arround the wolrd. we pride ourselves with our expertise in blockchain and AI feilds</p>
        </div>
      </div>
      <div class="separator"></div>
      <div id="map"></div>
    </div>
    <footer
      class="text-center w-full text-xs text-gray-200"
    >Copyright © Grainer {{ year }}. All Rights Reserved.</footer>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  },
  mounted() {
    /* eslint-disable no-unused-vars */
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW1pbm9hc2lkIiwiYSI6ImNrMHFjOTQ4ajA2Z3kzZXBncmpjenBsNXoifQ.dDKhaMMHy03Eby0TgJtBpQ'
    const map = new mapboxgl.Map({
      container: 'map',
      // style: 'mapbox://styles/aminoasid/ck0qylqzi0k7n1cnke0851ja5',
      style: 'mapbox://styles/mapbox/light-v10',
      antialias: true,
      center: [-74.0066, 40.7135],
      zoom: 12.34,
      pitch: 45,
      bearing: -17.6
    })
  }
}
</script>

<style>
</style>
