<template functional>
  <div :class="`flex flex-col ${props.addClass}`">
    <span class="font-serif text-4xl text-grainer">{{ props.title }}</span>
    <span class="font-serif mt-1">
      <slot></slot>
    </span>
    <div class="flex flex-grow debug justify-end items-center ">
      <div class="circle"></div>
      <span>See More</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "item-holder"
})
export default class ItemHolder extends Vue {
  @Prop()
  readonly title!: string;

  @Prop()
  readonly addClass!: string;
}
</script>

<style scoped>
.circle {
  height: 30px;
  width: 30px;
  border: 1px solid theme("colors.grainer");
  border-radius: 50%;
  overflow: visible;
}
</style>
