<template>
  <div id="app" class="h-screen">
    <menubar></menubar>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Menubar from "@/components/Menubar.vue";

@Component({
  components: {
    Menubar
  }
})
export default class App extends Vue {}
</script>

<style>
body {
  background-color: black;
  color: white;
  height: 100vh;
}

.contol {
  border: 2px solid red;
}
</style>
