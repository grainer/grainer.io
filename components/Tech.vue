<template>
  <section
    style="top: 55em;"
    class="w-full flex flex-col relative items-center content-center justify-center items-center"
  >
    <section-header class="mt-16" text="We use cutting edge technology"></section-header>
    <div class="flex content-around justify-around items-stretch mt-16">
      <tech-holder
        name="NEM blockchain"
        :icon="require('../assets/img/nem.svg')"
        link="https://nem.io/"
      ></tech-holder>
      <tech-holder
        name="Nodejs"
        :icon="require('../assets/img/node.png')"
        link="https://nodejs.org/en/"
      ></tech-holder>
      <tech-holder
        name="Nestjs"
        :icon="require('../assets/img/nest.png')"
        link="https://nestjs.com"
      ></tech-holder>
      <tech-holder
        name="Typescript"
        :icon="require('../assets/img/ts.png')"
        link="https://www.typescriptlang.org/"
      ></tech-holder>
      <tech-holder
        name="GraphQL"
        :icon="require('../assets/img/graphql.png')"
        link="https://graphql.org/"
      ></tech-holder>
      <tech-holder name="Vuejs" :icon="require('../assets/img/vue.png')" link="https://vuejs.org/"></tech-holder>
      <tech-holder
        name="MongoDB"
        :icon="require('../assets/img/mongo.png')"
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
