<template>
  <div class="card-container">
    <img class="card-avatar" :src="img" height="150px" />
    <ul class="card-text">
      <li class="card-title">{{ name }}</li>
      <li class="card-subtitle">{{ position }}</li>
    </ul>
    <ul class="card-social">
      <li>
        <a :href="facebook" target="blank">
          <img :src="logoFb" />
        </a>
      </li>
      <li>
        <a :href="linkedin" target="blank">
          <img :src="logoLi" />
        </a>
      </li>
      <li>
        <a :href="medium" target="blank">
          <img :src="logoMed" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import avtrMajed from '../assets/img/Majed.svg'
import logoMed from '@/static/med.svg'
import logoFb from '@/static/fb.svg'
import logoLi from '@/static/in.svg'

export default Vue.extend({
  props: {
    img: {
      type: String,
      default: avtrMajed
    },
    name: {
      type: String,
      default: 'This is the name'
    },
    position: {
      type: String,
      default: 'this is position'
    },
    facebook: {
      type: String,
      default: 'http://facebook.com'
    },
    medium: {
      type: String,
      default: 'http://medium.com'
    },
    linkedin: {
      type: String,
      default: 'http://linkedin.com'
    }
  },
  data() {
    return {
      logoMed,
      logoFb,
      logoLi
    }
  }
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Taviraj:400,700&display=swap');

.card-avatar,
.card-container,
.card-social {
  display: flex;
}

.card-container {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 30rem;
}

.card-text {
  margin-top: 3rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-family: Taviraj, Georgia, serif;
  letter-spacing: normal;
}

.card-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #02f6b6;
  text-transform: uppercase;
}

.card-subtitle {
  font-size: 1.2rem;
  font-weight: normal;
  color: #ffffff;
}

.card-social {
  justify-content: space-around;
  width: 45%;
}

.card-container:hover {
  background-color: #02f6b6;
}

.card-container:hover ul {
  color: black !important;
  filter: grayscale(100%) brightness(0%);
  -webkit-filter: grayscale(100%) brightness(0%);
}

.card-social li:hover {
  transform: scale(1.2, 1.2);
  -webkit-transform: scale(1.2, 1.2);
}
</style>
