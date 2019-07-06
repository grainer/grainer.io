<template>
  <section
    class="flex flex-col content-center justify-center items-center mt-16"
    style="height: calc(100% - 4rem)"
    id="scene"
  >
    <div class="mb-6 mt-32 inset-x-auto" data-depth="0.4">
      <img
        src="@/static/pure-logo.png"
        class="w-48 relative"
        alt="Logo used in the center of the home page"
      />
    </div>
    <div class="inset-x-auto relative" data-depth="0.2">
      <h1 class="font-h text-4xl relative">Everything begins with an idea.</h1>
    </div>
    <div class data-depth="0.6">
      <img
        style="top: 23rem; transform: scale(1.2, 1.2);"
        src="@/assets/img/forground.png"
        class="w-full relative"
        alt="the forgoround is a picture of a ground covered with leafs"
      />
    </div>
    <div class data-depth="0.8">
      <img
        style="top: 38rem; transform: scale(1.2, 1.2);"
        src="@/assets/img/underground.png"
        class="w-full relative"
        alt="then there is a picture of the underground"
      />
    </div>
  </section>
</template>

<script>
import Parallax from 'parallax-js'

export default {
  components: {},
  mounted() {
    const scene = document.getElementById('scene')
    const parallaxInstance = new Parallax(scene, {
      // originX: 0.5,
      // originY: 0
    })
    console.log(parallaxInstance)
  }
}
</script>

<style>
</style>
