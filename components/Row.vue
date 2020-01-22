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
    },
    alignv: {
      /* https://tailwindcss.com/docs/align-items/#app */
      type: String,
      default: 'center'
    }
  },
  data() {
    return {
      classes: `flex flex-row items-${this.alignv} ${this.addclass}`
    }
  }
}
</script>
