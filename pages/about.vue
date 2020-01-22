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
    <!-- memberships -->
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
    <textholder title="TEAM"></textholder>
    <row addclass="flex-wrap">
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
    </row>
    <div class="h-48"></div>
  </div>
</template>

<script>
import logoOutlined from '@/static/logo-outline.png'
import logoPassion from '@/assets/img/passion.png'
import logoFaom from '@/assets/img/faom.png'
import logoAccess from '@/assets/img/Access.png'
import avMajed from '@/assets/img/Majed.svg'
import Row from '@/components/Row'
import Col from '@/components/Col'
import Textholder from '@/components/Textholder'
import Namecard from '@/components/Namecard'

export default {
  components: {
    column: Col,
    row: Row,
    textholder: Textholder,
    // eslint-disable-next-line vue/no-unused-components
    namecard: Namecard
  },
  data() {
    return {
      logoOutlined,
      logoPassion,
      logoFaom,
      logoAccess,
      avMajed,
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
          img: avMajed,
          name: 'BEKKAI AMINE FATAH',
          position: 'Co-Founder & CTO',
          facebook: '',
          medium: '',
          linkedin: ''
        },
        {
          img: avMajed,
          name: 'danial syahiran ho',
          position: 'CEO Propshift',
          facebook: '',
          medium: '',
          linkedin: ''
        },
        {
          img: avMajed,
          name: 'NUR AZEHA BINTI YUSOF',
          position: 'Front-End Developer',
          facebook: '',
          medium: '',
          linkedin: ''
        },
        {
          img: avMajed,
          name: 'MUHAMAD ISKANDAR',
          position: 'Back-end Developer',
          facebook: '',
          medium: '',
          linkedin: ''
        },
        {
          img: avMajed,
          name: 'The Batman',
          position: 'Front-End Developer',
          facebook: '',
          medium: '',
          linkedin: ''
        },
        {
          img: avMajed,
          name: 'MOHAMMAD ANAS',
          position: 'Web Developer',
          facebook: '',
          medium: '',
          linkedin: ''
        },
        {
          img: avMajed,
          name: 'MUHAMMED FARAZ',
          position: 'Brand Strategist',
          facebook: '',
          medium: '',
          linkedin: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
#__nuxt,
#__layout,
main {
  height: 100%;
}
</style>
