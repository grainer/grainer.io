<template functional>
  <div :class="`flex flex-col ${props.addClass}`">
    <div class="flex items-center">
      <div class="bg-grainer w-10 h-1"></div>
      <span class="ml-4">{{ props.title }}</span>
    </div>
    <span class="text-5xl font-bold leading-snug tracking-wide">
      <slot></slot>
    </span>
    <div v-if="props.tags" class="flex font-serif text-sm">
      <div v-for="tag in props.tags" :key="tag" class="mx-1">
        <span class="mdi mdi-dice-1-outline text-grainer mr-1"></span>
        <span>{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "title-holder"
})
export default class TitleHolder extends Vue {
  @Prop()
  readonly title!: string;

  @Prop()
  readonly tags!: Array<string>;

  @Prop()
  readonly addClass!: string;
}
</script>
