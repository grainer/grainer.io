<template>
  <div v-tilt="{speed: 800, perspective: 100, glare: true, scale: 1.1}" class="flex mx-12 flex-col">
    <a :href="link" target="blank">
      <img
        width="120em"
        :class="hover ? 'normal' : 'greyscale'"
        :src="icon"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      />
      <div v-if="hover" class="relative w-full text-center font-semibold mt-3">{{name}}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    icon: {
      type: String
    },
    link: {
      type: String
    }
  },
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style>
.normal {
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
}

.greyscale {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
</style>
