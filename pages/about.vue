<template>
  <div class="my-48 md:my-24">
    <!-- about grainer -->
    <row justify="between" align="center" wrap="wrap-reverse" addclass="my-24 px-12 md:px-24">
      <column justify="center" width="1/2">
        <h1 class="boom">
          ABOUT
          <br />
          <span class="px-4">GRAINER</span>
        </h1>
      </column>
      <column justify="center" width="1/2">
        <img :src="require('@/static/logo-outline.svg')" />
      </column>
    </row>

    <!-- our passion -->
    <row justify="between" align="center" wrap="wrap-reverse" addclass="my-24 px-12 md:px-24">
      <column width="3/5">
        <textholder
          title="Our passion is to transform processes and enhance experiences for businesses who want to win"
        ></textholder>
      </column>
      <column width="2/5">
        <img :src="require('@/assets/img/passion.png')" height="100%" />
      </column>
    </row>

    <!-- mission und visyon -->
    <row justify="between" addclass="my-24 px-12 sm:px-24">
      <column width="4/12">
        <textholder title="MISSION">
          ● To exceed the expectations of our clients by guiding & developing great solutions
          <br />
          <br />● To invent, nurture, and acquire brilliant technologies
        </textholder>
      </column>
      <column width="7/12">
        <textholder title="VISION">
          To be at the forefront of tech innovation
          <br />
          <br />Over time, we have been successful in bringing together like-minded businesses and technology developers with the deepest knowledge in their own domains. We believe
          that technology is an asset through which we challenge the norms and disrupt the status quo!
        </textholder>
      </column>
    </row>

    <!-- memberships & accreditation -->
    <row justify="between" align="center" addclass="my-24 px-12 sm:px-24">
      <column width="4/12">
        <textholder title="MEMBERSHIPS"></textholder>
      </column>
      <column justify="around flex-wrap" align="center" width="7/12">
        <img :src="require('@/assets/img/faom.png')" width="180px" style="margin: 1rem 0 1rem 0;" />
        <img :src="require('@/assets/img/access.png')" width="362px" style="margin: 1rem 0 1rem 0;" />
      </column>
    </row>

    <!-- team avatar -->
    <row justify="center" addclass="my-24 px-12 sm:px-24">
      <column width="full">
        <textholder title="TEAMS"></textholder>
      </column>
      <column v-for="person in teams" :key="person.name" justify="center" width="1/2 lg:w-1/3">
        <namecard :img="person.img" :name="person.name" :position="person.position"></namecard>
      </column>
      <column justify="center" width="1/2 lg:w-1/3">
        <joincard></joincard>
      </column>
    </row>
    <contact title="We would like to hear from you"></contact>
  </div>
</template>

<script>
import Textholder from '@/components/Textholder.vue'
import Namecard from '@/components/Namecard.vue'
import Joincard from '@/components/Joincard.vue'
import Row from '@/components/Row.vue'
import Col from '@/components/Column.vue'
import Contact from '@/components/Contact.vue'

import avAmine from '@/assets/img/Amine.svg'
import avAnas from '@/assets/img/Anas.svg'
import avDanial from '@/assets/img/Danial.svg'
import avFaraz from '@/assets/img/Faraz.svg'
import avImam from '@/assets/img/Imam.svg'
import avIskandar from '@/assets/img/Iskandar.svg'
import avMajed from '@/assets/img/Majed.svg'
import avNur from '@/assets/img/Nur.svg'

export default {
  components: {
    column: Col,
    row: Row,
    textholder: Textholder,
    namecard: Namecard,
    joincard: Joincard,
    contact: Contact
  },
  data() {
    return {
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
      ],
      social: [
        {
          type: 'facebook-f',
          href: 'https://www.facebook.com'
        },
        {
          type: 'twitter',
          href: 'https://www.twitter.com'
        },
        {
          type: 'instagram',
          href: 'https://www.instageram.com'
        },
        {
          type: 'youtube',
          href: 'https://www.youtube.com'
        },
        {
          type: 'linkedin',
          href: 'https://www.linkedin.com'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
/* font size is set by taiwind. */
.boom {
  font-family: Roboto;
  font-weight: bold;
  line-height: 1.2;
  color: white;

  font-size: 6rem;
  text-align: left;

  @media screen and (max-width: 1100px) {
    font-size: 4rem;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
  }

  span {
    color: #002018;
    background-color: #02f6b6;
  }
}
</style>
