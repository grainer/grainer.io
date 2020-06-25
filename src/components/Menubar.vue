<template>
  <div id="navbar" class="fixed w-full left-0 flex justify-between text-white px-16">
    <ul class="flex justify-between items-center w-8/12 text-sm font-serif">
      <li class="hover:text-grainer"><img :src="image" class="h-20" /></li>
      <li class="hover:text-grainer"><router-link to="/product">Products</router-link></li>
      <li class="hover:text-grainer"><router-link to="/team">Team</router-link></li>
      <li class="hover:text-grainer"><router-link to="/career">Career</router-link></li>
      <li class="hover:text-grainer"><router-link to="/contact">Contact Us</router-link></li>
    </ul>
    <div class="flex items-center text-3xl text-grainer">
      <span class="mdi mdi-whatsapp"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "menubar"
})
export default class Menubar extends Vue {
  private image = require("@/assets/static/logo@3x.png");
}
</script>
