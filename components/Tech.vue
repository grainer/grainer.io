<template>
  <div class="w-2/3 flex flex-col">
    <div class="flex flex-row h-20 mb-16">
      <div class="flex-grow">
        <h1 class="font-h craft-line">
          <div>Technologies</div>
          We Use
        </h1>
        <div class="w-16 h-3 bg-gr-green-light mt-2"></div>
      </div>
      <div class="flex flex-row">
        <tech-holder name="NEM blockchain" :icon="require('../assets/img/nem.svg')" link="https://nem.io/"></tech-holder>
        <tech-holder name="Nodejs" :icon="require('../assets/img/node-min.png')" link="https://nodejs.org/en/"></tech-holder>
        <tech-holder name="Nestjs" :icon="require('../assets/img/nest-min.png')" link="https://nestjs.com"></tech-holder>
      </div>
    </div>
    <div class="flex flex-row-reverse mt-16 h-20">
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
