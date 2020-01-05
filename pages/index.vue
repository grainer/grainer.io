<template>
  <div>
    <section id="snap-container">
      <div class="flex justify-center items-center" data-anchor="home">HOME</div>
      <div class="flex justify-center items-center" data-anchor="us">US</div>
      <div class="flex justify-center items-center" data-anchor="help">HELP</div>
      <div class="flex justify-center items-center" data-anchor="tech">TECH</div>
      <div class="flex justify-center items-center" data-anchor="contact">CONTACT</div>
    </section>
    <div class="fixed bottom-0 w-full pb-10 dotstyle dotstyle-smalldotstroke">
      <ul class="flex justify-center items-center">
        <li
          v-for="(page, index) in pages"
          :key="index"
          :class="`${ index === pageIndex ? 'current' : ''} ${ index < pageIndex ? 'past' : '' }`"
        >
          <a :href="`#${page}`">Home</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import _ from 'lodash-es'
import Pageable from 'pageable'

export default {
  name: 'Index',
  components: {},
  data() {
    return {
      pageIndex: 0,
      precent: 0,
      pagable: undefined,
      pages: ['home', 'us', 'help', 'tech', 'contact']
    }
  },
  mounted() {
    const that = this
    this.pagable = new Pageable('#snap-container')

    this.pagable.on('init', (data) => {
      // initializing the page index
      that.pageIndex = data.index
      that.precent = data.percent
    })
    this.pagable.init()
    // set the orientation
    this.pagable.orientate('horizontal') // or vertical

    this.pagable.on('scroll', (data) => {
      // updating the index and percentage
      that.pageIndex = data.index
      that.precent = data.percent
    })
  },
  methods: {
    nextPage() {
      this.pagable.next()
    },
    prevPage() {
      this.pagable.prev()
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
  cursor: default;
}

.dotstyle li {
  position: relative;
  display: block;
  float: left;
  margin: 0 6em;
  width: 15px;
  height: 15px;
  cursor: pointer;
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
  cursor: pointer; /* make the text accessible to screen readers */
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
