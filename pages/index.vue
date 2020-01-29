<template>
  <div>
    <section id="snap-container">
      <div class="page flex justify-center items-center" data-anchor="home">
        <start></start>
      </div>
      <div class="page flex justify-center items-center" data-anchor="us">
        <crafting></crafting>
      </div>
      <div class="page flex justify-center items-center" data-anchor="help">
        <help></help>
      </div>
      <div class="page flex justify-center items-center" data-anchor="rethink">
        <rethink></rethink>
      </div>
      <div class="page flex justify-center items-center" data-anchor="tech">
        <tech></tech>
      </div>
      <div class="page flex justify-center items-center" data-anchor="contact">
        <contact title="Contact Us" :form="false"></contact>
      </div>
    </section>
    <!-- Dot Navigation begins -->
    <div class="fixed bottom-0 w-full pb-10 dotstyle dotstyle-smalldotstroke">
      <!-- Next button -->
      <next-bt class="interactive"></next-bt>

      <ul class="flex justify-center items-center">
        <li v-for="(page, index) in pages" :key="index" :class="`${index === pageIndex ? 'current' : ''} ${index < pageIndex ? 'past' : ''}`">
          <a :href="`#${page}`" class="interactive">Home</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import _ from 'lodash-es'
import Pageable from 'pageable'
import { EventBus } from '@/plugins/eventBus.js'
const Start = () => import('@/components/Start')
const Crafting = () => import('@/components/Crafting')
const Help = () => import('@/components/Help')
const Rethink = () => import('@/components/Rethink')
const Tech = () => import('@/components/Tech')
const Contact = () => import('@/components/Contact')
const Next = () => import('@/components/Next')

export default {
  name: 'Index',
  components: {
    Start,
    Crafting,
    Help,
    Rethink,
    Tech,
    Contact,
    'next-bt': Next
  },
  data() {
    return {
      pages: ['home', 'us', 'help', 'rethink', 'tech', 'contact']
    }
  },
  computed: {
    pageIndex() {
      return this.$store.getters.getIndex
    },
    precent() {
      return this.$store.getters.getPercentage
    },
    pageable() {
      return this.$store.getters.getPageable
    }
  },
  mounted() {
    // we emit this to refresh the interactive cursors elements
    EventBus.$emit('inner-routing')

    this.$store.commit(
      'populate',
      new Pageable('#snap-container', {
        delay: 1000,
        throttle: 1500
      })
    )

    this.$store.dispatch('init')

    this.$store.dispatch('listen')
  },
  destroyed() {
    this.$store.dispatch('clean')
  },
  methods: {
    nextPage() {
      this.$store.commit('nextPage')
    },
    prevPage() {
      this.$store.commit('prevPage')
    }
  }
}
</script>

<style>
.dotstyle ul {
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style: none;
}

.dotstyle li {
  position: relative;
  display: block;
  float: left;
  margin: 0 6em;
  width: 15px;
  height: 15px;
}

/* added the liner between the dots */
.dotstyle li:not(:first-child)::before {
  content: '';
  display: block;
  height: 2px;
  border: 0;
  border-top: 2px solid rgba(2, 246, 182, 0.3);
  width: 155px;
  transform: translate(-175px, 0.5em);
}

.dotstyle li a {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  border-radius: 50%;
  background-color: rgba(2, 246, 182, 0.3);
  text-indent: -999em;
  position: absolute;
}

.dotstyle li a:focus {
  outline: none;
}

/* Small dot with stroke */

.dotstyle-smalldotstroke li {
  border-radius: 50%;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0);
  -webkit-transition: box-shadow 0.3s ease;
  transition: box-shadow 0.3s ease;
}

.dotstyle-smalldotstroke li a {
  -webkit-transition: background-color 0.3s ease, -webkit-transform 0.3s ease;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.dotstyle-smalldotstroke li a:hover,
.dotstyle-smalldotstroke li a:focus,
.dotstyle-smalldotstroke li.current a {
  background-color: #02f6b6;
}

.dotstyle-smalldotstroke li.current a {
  -webkit-transform: scale(0.4);
  transform: scale(0.4);
}

.dotstyle-smalldotstroke li.current {
  box-shadow: 0 0 0 2px #02f6b6;
}
.dotstyle-smalldotstroke li.past a {
  background-color: #02f6b6;
}
</style>
