<template>
  <div class="flex flex-col px-2 md:px-24" :style="mapped">
    <!-- about grainer -->
    <row addclass="my-48">
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
    <row addclass="my-24">
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
    <row addclass="my-24">
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
    <row addclass="flex-wrap my-24">
      <column width="full">
        <textholder title="TEAM"></textholder>
      </column>
      <column v-for="(person, index) in teams" :key="index" width="full lg:w-1/3">
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
    <!-- we would love -->
    <row addclass="flex-wrap lg:mt-12">
      <column width="full">
        <textholder title="WE WOULD LOVE TO HEAR FROM YOU" addclass="w-1/2">
          Let’s build something awesome … together!
          <br />Since 2018, we’ve been helping companies of all sizes
          <br />by delivering software and blockchain development services and solutions.
        </textholder>
      </column>
    </row>
    <!-- contact form -->
    <row addclass="flex-wrap mb-64">
      <column width="1/2">
        <form class="flex flex-row flex-wrap engage">
          <div class="flex flex-row w-full my-8">
            <input class="w-1/2 p-4 mr-4" type="text" name="fname" placeholder="Name" />
            <input class="w-1/2 p-4 ml-4" type="text" name="email" placeholder="Email" />
          </div>
          <textarea class="w-full h-32 p-4" name="message" placeholder="Enter message here..."></textarea>
          <button class="send my-8 py-4 px-16 interactive" type="submit">GET IN TOUCH</button>
        </form>
      </column>
    </row>
    <div class="lg:h-64"></div>
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
import mapbg from '../assets/img/map.png'
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
      mapbg,
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
          name: 'NUR AZEHA YUSOF',
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
  },
  computed: {
    mapped() {
      return `
      background-image: url('${mapbg}');
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center bottom;
      `
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

.engage input,
.engage textarea {
  background-color: #012b20;
  color: white;
}

.send {
  border: solid 1px #02f6b6;
  border-radius: 10px 0px 10px 10px;
  font-family: Taviraj;
  font-size: 1rem;
  color: #ffffff;
}

.send:hover {
  color: black;
  background-color: #02f6b6;
}
</style>
/*
<p>
          +60 16 524 2696
          <br />
          <a href="mailto:info@grainer.io">info@grainer.io</a>
          <br />Tier 2 Warehouse Wisma Commercedotcom
          <br />Jalan Tandang 51/204a46050
          <br />Petaling Jaya, Selangor, Malaysia
        </p>
 */
