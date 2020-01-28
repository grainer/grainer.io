<template functional>
  <div
    :id="id"
    :class="`flex items-${props.align} justify-${props.justify} w-full pb-10 md:pb-0 md:w-${props.width} ${props.addclass}`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Column',
  functional: true,
  props: {
    id: {
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
    /* https://tailwindcss.com/docs/width/#app */
    width: {
      type: String,
      default: null
    },
    /* any tailwindcss class that works with flex */
    addclass: {
      type: String,
      default: null
    }
  }
}
</script>
