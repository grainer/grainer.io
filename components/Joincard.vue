<template>
  <a :href="href">
    <div class="join">
      <h1>
        join
        <br />the
        <br />grainer family
      </h1>
      <i class="fas fa-plus-circle"></i>
    </div>
  </a>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    href: {
      type: String,
      default: '#'
    }
  }
})
</script>

<style scoped>
.join {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 20rem;
  height: 30rem;
  color: #02f6b6;
  border: solid 2px #02f6b6;
  padding: 1rem 3rem;
  font-family: Roboto;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
  text-align: left;
  text-transform: uppercase;
}

.join i {
  font-size: 5rem;
}

.join:hover {
  color: black;
  background-color: #02f6b6;
}
</style>
