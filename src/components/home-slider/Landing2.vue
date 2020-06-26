<template>
  <div class="px-16 mt-16 w-full">
    <div class="flex my-12 items-center">
      <title-holder title="Our Products">
        Nurturing the industry<br />
        through cutting edge<br />
        technology
      </title-holder>
      <img :src="box" class="w-1/2" />
    </div>
    <div class="flex flex-row">
      <item-holder title="Proptech" addClass="mr-32">
        Lorem ipsum dolor sit amet, consectetuer adipiscing<br />
        elit, sed diam nonummy nibh euismod tincidunt ut<br />
        laoreet dolore magna aliquam erat volutpat.
      </item-holder>
      <item-holder title="Proptech">
        Lorem ipsum dolor sit amet, consectetuer adipiscing<br />
        elit, sed diam nonummy nibh euismod tincidunt ut<br />
        laoreet dolore magna aliquam erat volutpat.
      </item-holder>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TitleHolder from "@/components/TitleHolder.vue";
import ItemHolder from "@/components/ItemHolder.vue";

@Component({
  name: "landing-2",
  components: {
    TitleHolder,
    ItemHolder
  }
})
export default class Landing2 extends Vue {
  private box = require("@/assets/img/IBlkXk@2x.png");
}
</script>
