<template>
  <div style="width: 100%;">
    <div class="accordion">
      <h1>{{ title }}</h1>
      <h3 class="interactive" @click="toggle()">
        {{ buttonlabel }}
        <i v-if="!isOpened" class="fas fa-caret-right"></i>
        <i v-if="isOpened" class="fas fa-caret-down"></i>
      </h3>
      <div v-if="$slots.default" class="breaker"></div>
      <div v-if="$slots.default" :class="`accordion-content ${isOpened || 'closed'}`">
        <slot></slot>
      </div>
    </div>
    <div v-if="bottomlined" class="line-wkwk"></div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    buttonlabel: {
      type: String,
      required: false,
      default: 'OPEN'
    },
    bottomlined: {
      type: Boolean,
      required: false,
      default: false
    },
    open: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      isOpened: this.open
    }
  },
  methods: {
    toggle: function() {
      // console.log('i is click wkwkwkwkwkkww')
      this.isOpened = !this.isOpened
    }
  }
}
</script>
<style lang="scss" scoped>
.accordion {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  margin: 3rem 0 3rem;
  color: #ffffff;

  font-style: normal;

  h1 {
    font-family: Roboto;
    font-size: 50px;
    font-weight: bold;
    line-height: 1.08;
    letter-spacing: 2.5px;

    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  }

  h3 {
    font-family: Taviraj;
    font-size: 15px;
    font-weight: 500;
    line-height: 3.6;
    letter-spacing: 0.75px;
  }

  .accordion-content {
    width: 100%;
  }
}

.closed {
  display: none;
}
.breaker {
  width: 100%;
  height: 0;
}
.line-wkwk {
  width: 100%;
  height: 1px;
  background-color: #02f6b6;
}
</style>
