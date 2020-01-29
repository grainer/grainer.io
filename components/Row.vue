<template functional>
  <section
    :id="id"
    :class="`flex flex-row flex-${props.wrap} items-${props.align} justify-${props.justify} ${props.addclass}`"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Row',
  functional: true,
  props: {
    id: {
      type: String,
      default: null
    },
    /* any tailwindcss class that works with flex */
    addclass: {
      type: String,
      default: null
    },
    /* https://tailwindcss.com/docs/align-items/#app */
    align: {
      type: String,
      default: null
    },
    /* https://tailwindcss.com/docs/justify-items/#app */
    justify: {
      type: String,
      default: null
    },
    wrap: {
      type: String,
      default: 'wrap'
    }
  }
}
</script>
<style>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
</style>
