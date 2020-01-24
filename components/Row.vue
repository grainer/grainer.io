<template>
  <section :id="id" :class="classes">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    },
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
      classes: `flex flex-row w-full items-${this.alignv} ${this.addclass}`
    }
  }
}
</script>
