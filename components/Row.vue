<template>
  <section :class="classes">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    addclass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      classes: `flex justify-around items-center ${this.addclass}`
    }
  }
}
</script>
