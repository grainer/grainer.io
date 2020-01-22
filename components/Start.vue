<template>
  <div class="w-full flex flex-row">
    <div class="fixed inset-0 w-screen h-screen" v-if="$route.hash === '#home'">
      <video class="w-full" src="@/assets/vid/seed.mp4" autoplay="true" loop="true"></video>
    </div>
    <div class="w-1/2 z-10">
      <h1 class="font-h start-line ml-48">
        Everything Starts With an
        <span class="idea px-4">Idea</span>
      </h1>
    </div>
    <div class="w-1/2"></div>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style >
.start-line {
  font-size: 100px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 2.5px;
  text-align: left;
}
.idea {
  color: #011b14;
  background-color: #02f6b6;
}
</style>
