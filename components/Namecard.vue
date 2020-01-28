<template functional>
  <div class="card-container">
    <img class="avatar" :src="props.img" height="150px" />
    <dl>
      <dt>{{ props.name }}</dt>
      <dd>{{ props.position }}</dd>
    </dl>
    <ul>
      <li>
        <a class="interactive" :href="props.facebook" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a class="interactive" :href="props.linkedin" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a class="interactive" :href="props.medium" target="_blank">
          <i class="fab fa-medium-m"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import avtrMajed from '@/assets/img/Majed.svg'

export default {
  name: 'Namecard',
  functional: true,
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
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Taviraj:400,700&display=swap');

%flexbox {
  display: flex;
  justify-content: center;
}

.card-container {
  @extend %flexbox;
  flex-direction: column;
  width: 20rem;
  height: 30rem;
  margin: 1rem 0 1rem 0;

  dl {
    margin: 3rem 0 0.5rem 0;
    font-family: Taviraj;
    text-align: center;

    dt {
      font-size: 1.3rem;
      font-weight: 700;
      color: #02f6b6;
      text-transform: uppercase;
    }

    dd {
      font-size: 1.2rem;
      font-weight: 400;
      color: #ffffff;
    }
  }

  ul {
    @extend %flexbox;
    flex-direction: row;
    font-size: 0.8rem;
    color: #02f6b6;

    li {
      margin: 0 0.5rem 0 0.5rem;
      padding: 0.3rem 0.5rem 0.3rem 0.5rem;
      border: 1px solid #02f6b6;
      border-radius: 7px 0px 7px 7px;
    }
  }

  &:hover {
    background-color: #02f6b6;

    dt,
    dd,
    li {
      color: black !important;
    }

    li {
      border: 2px solid black;
    }
  }
}
</style>
