<template>
  <div id="jokowi">
    <row addclass="pt-48">
      <div :class="sameclass">
        <h1 class="font-h start-line">
          ABOUT
          <br />
          <span class="idea">GRAINER</span>
        </h1>
      </div>
      <div :class="sameclass">
        <img :src="logo" width="90%" />
      </div>
    </row>
    <row>
      <div>
        <h1 class="font-h holdertitle">
          Our passion is to transform
          processes and enhance
          experiences for businesses
          who want to win
        </h1>
        <div class="w-32 h-3 bg-gr-green-light"></div>
      </div>
    </row>
    <br />
    <br />
  </div>
</template>

<script>
import logoOutlined from '@/static/logo-outline.png'
import Row from '@/components/Row'

export default {
  components: {
    row: Row
  },
  data() {
    return {
      logo: logoOutlined,
      sameclass: 'items'
    }
  }
}
</script>

<style>
.grontol {
  width: 61px;
  height: 10px;
  background-color: #02f6b6;
}
.holdertitle {
  width: 679px;
  height: 238px;
  font-family: Roboto;
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 2.5px;
  text-align: left;
  color: #ffffff;
}

#__nuxt,
#__layout,
main {
  height: 100%;
}
</style>
