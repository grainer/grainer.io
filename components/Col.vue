<template>
  <div :id="id" name="column" :class="classes">
    <slot></slot>
  </div>
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
    /* https://tailwindcss.com/docs/width/#app */
    width: {
      type: String,
      default: '1/2'
    },
    justify: {
      /* https://tailwindcss.com/docs/justify-content/#app */
      type: String,
      default: 'center'
    }
  },
  data() {
    return {
      classes: `flex flex-col w-${this.width} justify-${this.justify} ${this.addclass}`
    }
  }
}
</script>
