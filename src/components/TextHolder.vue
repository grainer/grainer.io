<template functional>
  <div class="flex flex-row text-white">
    <div class="bg-grainer w-1 h-10 mr-3"></div>
    <span class=" text-sm font-serif text-gray-400">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "text-holder"
})
export default class TextHolder extends Vue {}
</script>
