<template>
  <div class="flex flex-col" style="height: 100%">
    <!-- <landing></landing> -->
    <landing-2></landing-2>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Landing from "@/components/home-slider/Landing.vue";
import Landing2 from "@/components/home-slider/Landing2.vue";

@Component({
  name: "home",
  components: {
    Landing,
    Landing2
  }
})
export default class Home extends Vue {}
</script>
