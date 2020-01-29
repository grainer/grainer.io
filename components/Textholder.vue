<template functional>
  <div :class="`textholder ${props.addclass}`">
    <h1
      v-if="props.title"
      :class="`${props.huge ? 'huge' : 'text-3xl md:text-4xl'}`"
    >{{ props.title }}</h1>
    <div class="w-16 h-2 bg-gr-green-light mt-1 md:h-3 md:mt-2 mb-2 md:mb-4"></div>
    <p v-if="slots().default" class="text-base">
      <slot></slot>
    </p>
    <a
      v-if="props.link"
      :href="props.link.href"
      class="text-3xl md:text-5xl interactive"
      target="_blank"
    >{{ props.link.title }}</a>
  </div>
</template>

<script>
export default {
  name: 'Textholder',
  functional: true,
  props: {
    addclass: {
      type: String,
      default: 'w-full'
    },
    huge: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    link: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
// font sizes are set by tailwind
.textholder {
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #ffffff;
  font-weight: bold;

  h1 {
    font-family: Roboto;
    line-height: 1.35;
    letter-spacing: 0.16rem;
    color: #ffffff;
  }

  .huge {
    font-size: 4.5rem;
    line-height: 1.13;
    letter-spacing: 4px;

    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-family: Glegoo;
    line-height: 1.79;
  }

  a {
    font-family: Taviraj;
    font-weight: normal;
    font-style: normal;
    text-align: left;
    color: #02f6b6;
  }
}
</style>
