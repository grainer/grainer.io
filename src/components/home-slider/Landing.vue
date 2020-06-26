<template>
  <div class="flex flex-grow landing-background px-16 pt-16 w-full">
    <div>
      <h1 class="text-6xl font-bold my-12 leading-tight">
        Everything <br />starts with <br />
        an <span class="bg-grainer text-black px-2">idea</span>
      </h1>
      <text-holder>
        We are Southeast Asia's leading FinTech & PropTech solution<br />
        provider. We develop cutting-edge solutions for enterprises that<br />
        aim to stay at the forefront of tech innovation.
      </text-holder>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TextHolder from "@/components/TextHolder.vue";

@Component({
  name: "landing",
  components: {
    TextHolder
  }
})
export default class Landing extends Vue {}
</script>

<style scoped>
.landing-background {
  background-image: url("../../assets/img/T4UdvJ@3x.png");
  background-position: right;
  background-size: 70%;
  background-repeat: no-repeat;
}
</style>
