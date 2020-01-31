<template functional>
  <nuxt-link class="join interactive" :to="props.to">
    <h1>
      join
      <br />the
      <br />grainer family
    </h1>
    <i class="fas fa-plus-circle"></i>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Joincard',
  functional: true,
  props: {
    to: {
      type: String,
      default: '/career'
    }
  }
}
</script>

<style lang="scss" scoped>
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

  i {
    font-size: 5rem;
  }

  &:hover {
    color: black;
    background-color: #02f6b6;
  }
}
</style>
