<template>
  <div class="flex flex-grow" style="height: 100%">
    <landing></landing>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Landing from "@/components/home-slider/Landing.vue";

@Component({
  name: "home",
  components: {
    Landing
  }
})
export default class Home extends Vue {}
</script>
