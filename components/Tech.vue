<template>
  <div class="w-full flex flex-col">
    <div class="flex content-around justify-around items-stretch mt-16 h-20">
      <tech-holder name="NEM blockchain" :icon="require('../assets/img/nem.svg')" link="https://nem.io/"></tech-holder>
      <tech-holder name="Nodejs" :icon="require('../assets/img/node-min.png')" link="https://nodejs.org/en/"></tech-holder>
      <tech-holder name="Nestjs" :icon="require('../assets/img/nest-min.png')" link="https://nestjs.com"></tech-holder>
      <tech-holder name="Typescript" :icon="require('../assets/img/ts-min.png')" link="https://www.typescriptlang.org/"></tech-holder>
      <tech-holder name="GraphQL" :icon="require('../assets/img/graphql-min.png')" link="https://graphql.org/"></tech-holder>
      <tech-holder name="Vuejs" :icon="require('../assets/img/vue-min.png')" link="https://vuejs.org/"></tech-holder>
      <tech-holder name="MongoDB" :icon="require('../assets/img/mongo-min.png')" link="https://www.mongodb.com/"></tech-holder>
    </div>
  </div>
</template>

<script>
import TechHolder from '@/components/TechHolder'

export default {
  components: {
    TechHolder
  }
}
</script>

<style></style>
