<template>
  <div :class="classes">
    <slot></slot>
  </div>
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
      classes: `w-1/2 ${this.addclass}`
    }
  }
}
</script>
