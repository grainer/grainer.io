<template>
  <div class="flex flex-col px-32">
    <!-- about grainer -->
    <div class="h-48"></div>
    <row>
      <column>
        <h1 class="font-h start-line">
          ABOUT
          <br />
          <span class="idea px-4">GRAINER</span>
        </h1>
      </column>
      <column>
        <img :src="logoOutlined" />
      </column>
      <!-- TODO: add a -next- button -->
    </row>
    <!-- our passion.. -->
    <div class="h-48"></div>
    <row>
      <column width="2/3">
        <textholder
          title="Our passion is to transform processes and enhance experiences for businesses who want to win"
        ></textholder>
      </column>
      <column width="1/3">
        <img :src="logoPassion" />
      </column>
    </row>
    <!-- mission und visyon -->
    <div class="h-48"></div>
    <row alignv="stretch">
      <column width="1/3">
        <textholder title="MISSION">
          ● To exceed the expectations of our clients by guiding & developing great solutions
          <br />
          <br />● To invent, nurture, and acquire brilliant technologies
        </textholder>
      </column>
      <column width="2/3" addclass="pl-16">
        <textholder title="VISION">
          To be at the forefront of tech innovation
          <br />
          <br />Over time, we have been successful in bringing together like-minded businesses and technology
          developers with the deepest knowledge in their own domains. We
          believe that technology is an asset through which we challenge the norms and disrupt the status quo!
        </textholder>
      </column>
    </row>
    <!-- memberships & accreditation -->
    <div class="h-48"></div>
    <row>
      <column width="1/3">
        <textholder title="MEMBERSHIPS"></textholder>
      </column>
      <column width="2/3">
        <row addclass="justify-around w-full ml-16">
          <img :src="logoFaom" width="180px" />
          <img :src="logoAccess" width="362px" />
        </row>
      </column>
    </row>
    <!-- grainer team afatar -->
    <div class="h-48"></div>
    <row addclass="flex-wrap">
      <column width="full">
        <textholder title="TEAM"></textholder>
      </column>
      <column v-for="(person, index) in teams" :key="index" width="1/3">
        <namecard
          :img="person.img"
          :name="person.name"
          :position="person.position"
          :facebook="person.facebook"
          :medium="person.medium"
          :linkedin="person.linkedin"
        ></namecard>
      </column>
      <column width="1/3">
        <joincard></joincard>
      </column>
    </row>
    <!-- contact form -->
    <div class="h-48"></div>
    <row>
      <column width="full"></column>
    </row>
    <div class="h-48"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import Textholder from '../components/Textholder.vue'
import Namecard from '../components/Namecard.vue'
import Joincard from '../components/Joincard.vue'
import Row from '../components/Row.vue'
import Col from '../components/Col.vue'

import logoOutlined from '../static/logo-outline.svg'
import logoPassion from '../assets/img/passion.png'
import logoFaom from '../assets/img/faom.png'
import logoAccess from '../assets/img/Access.png'
import avAmine from '../assets/img/Amine.svg'
import avAnas from '../assets/img/Anas.svg'
import avDanial from '../assets/img/Danial.svg'
import avFaraz from '../assets/img/Faraz.svg'
import avImam from '../assets/img/Imam.svg'
import avIskandar from '../assets/img/Iskandar.svg'
import avMajed from '../assets/img/Majed.svg'
import avNur from '../assets/img/Nur.svg'

export default Vue.extend({
  components: {
    column: Col,
    row: Row,
    textholder: Textholder,
    namecard: Namecard,
    joincard: Joincard
  },
  data() {
    return {
      logoOutlined,
      logoPassion,
      logoFaom,
      logoAccess,
      teams: [
        {
          img: avMajed,
          name: 'ABDUL MAJED AHMAD',
          position: 'Co-Founder & CEO',
          facebook: '',
          medium: '',
          linkedin: ''
        },
        {
          img: avAmine,
          name: 'BEKKAI AMINE FATAH',
          position: 'Co-Founder & CTO',
          facebook: '',
          medium: '',
          linkedin: ''
        },
        {
          img: avDanial,
          name: 'danial syahiran ho',
          position: 'CEO Propshift',
          facebook: '',
          medium: '',
          linkedin: ''
        },
        {
          img: avNur,
          name: 'NUR AZEHA BINTI YUSOF',
          position: 'Front-End Developer',
          facebook: '',
          medium: '',
          linkedin: ''
        },
        {
          img: avIskandar,
          name: 'MUHAMAD ISKANDAR',
          position: 'Back-end Developer',
          facebook: '',
          medium: '',
          linkedin: ''
        },
        {
          img: avImam,
          name: 'The Batman',
          position: 'Front-End Developer',
          facebook: '',
          medium: '',
          linkedin: ''
        },
        {
          img: avAnas,
          name: 'MOHAMMAD ANAS',
          position: 'Web Developer',
          facebook: '',
          medium: '',
          linkedin: ''
        },
        {
          img: avFaraz,
          name: 'MUHAMMED FARAZ',
          position: 'Brand Strategist',
          facebook: '',
          medium: '',
          linkedin: ''
        }
      ]
    }
  }
})
</script>

<style scoped>
#__nuxt,
#__layout,
main {
  height: 100%;
}
</style>
