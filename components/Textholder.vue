<template>
  <div :class="classes">
    <h1 class="font-h craft-line">{{ title }}</h1>
    <div class="w-24 h-3 bg-gr-green-light my-4"></div>
    <h2>
      <slot></slot>
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    addclass: {
      type: String,
      default: 'w-full'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      classes: `${this.addclass}`
    }
  }
}
</script>
