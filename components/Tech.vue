<template>
  <section
    style="top: 55em;"
    class="w-full flex flex-col relative items-center content-center justify-center items-center"
  >
    <section-header class="mt-16" text="We use cutting edge technology"></section-header>
    <div class="flex content-around justify-around items-stretch mt-16 h-20">
      <tech-holder
        name="NEM blockchain"
        :icon="require('../assets/img/nem.svg')"
        link="https://nem.io/"
      ></tech-holder>
      <tech-holder
        name="Nodejs"
        :icon="require('../assets/img/node-min.png')"
        link="https://nodejs.org/en/"
      ></tech-holder>
      <tech-holder
        name="Nestjs"
        :icon="require('../assets/img/nest-min.png')"
        link="https://nestjs.com"
      ></tech-holder>
      <tech-holder
        name="Typescript"
        :icon="require('../assets/img/ts-min.png')"
        link="https://www.typescriptlang.org/"
      ></tech-holder>
      <tech-holder
        name="GraphQL"
        :icon="require('../assets/img/graphql-min.png')"
        link="https://graphql.org/"
      ></tech-holder>
      <tech-holder name="Vuejs" :icon="require('../assets/img/vue-min.png')" link="https://vuejs.org/"></tech-holder>
      <tech-holder
        name="MongoDB"
        :icon="require('../assets/img/mongo-min.png')"
        link="https://www.mongodb.com/"
      ></tech-holder>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import TechHolder from '@/components/TechHolder'

export default {
  components: {
    SectionHeader,
    TechHolder
  }
}
</script>

<style>
</style>
