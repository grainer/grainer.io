<template>
  <div id="career" class="py-32 px-12 md:px-24">
    <row justify="start" addclass="py-24">
      <column justify="center" width="2/3">
        <textholder huge title="SKILLED, PROACTIVE & PASSIONATE?">
          <div class="text-4xl">You'r just the right fit!</div>
        </textholder>
      </column>
    </row>
    <row justify="start" addclass="py-24">
      <column justify="center" width="5/6">
        <textholder
          title="“DON’T JUST PRACTICE YOUR ART, BUT FORCE YOUR WAY INTO ITS SECRETS; FOR IT AND KNOWLEDGE CAN RAISE MAN TO THE DIVINE.”"
          author="- BEETHOVEN"
        >
          <p class="text-xl font-medium">
            Your education and background are of no concern to us, as long as you have a passion for excellence and innovation, and a desire to channel it for the greater benefit of
            others.
          </p>
        </textholder>
      </column>
    </row>
    <row justify="center" addclass="py-4">
      <column justify="center" width="full">
        <img :src="require('@/static/join-arrow.svg')" />
      </column>
      <!-- <column justify="center" width="full">
        <accordion bottomlined title="UI/UX DESIGNER" buttonlabel="APPLY NOW">
          Союз нерушимый республик свободных
          Сплотила навеки Великая Русь.
          Да здравствует созданный волей народов
          Единый, могучий Советский Союз!
          Славься, Отечество наше свободное,
          Дружбы, народов надежный оплот!
          Знамя советское, знамя народное
          Пусть от победы, к победе ведет!
        </accordion>
      </column>
      <column justify="center" width="full">
        <accordion bottomlined title="ACCOUNTANT" buttonlabel="APPLY NOW">
          Союз нерушимый республик свободных
          Сплотила навеки Великая Русь.
          Да здравствует созданный волей народов
          Единый, могучий Советский Союз!
          Славься, Отечество наше свободное,
          Дружбы, народов надежный оплот!
          Знамя советское, знамя народное
          Пусть от победы, к победе ведет!
        </accordion>
      </column>
      <column justify="center" width="full">
        <accordion bottomlined title="MARKETING MANAGER" buttonlabel="APPLY NOW">
          Союз нерушимый республик свободных
          Сплотила навеки Великая Русь.
          Да здравствует созданный волей народов
          Единый, могучий Советский Союз!
          Славься, Отечество наше свободное,
          Дружбы, народов надежный оплот!
          Знамя советское, знамя народное
          Пусть от победы, к победе ведет!
        </accordion>
      </column>
      <column justify="center" width="full">
        <accordion title="WEB DEVELOPER" buttonlabel="APPLY NOW">
          Союз нерушимый республик свободных
          Сплотила навеки Великая Русь.
          Да здравствует созданный волей народов
          Единый, могучий Советский Союз!
          Славься, Отечество наше свободное,
          Дружбы, народов надежный оплот!
          Знамя советское, знамя народное
          Пусть от победы, к победе ведет!
        </accordion>
      </column>-->
    </row>
    <row justify="center" addclass="py-24">
      <column justify="center" width="full">
        <a
          class="text-6xl"
          href="mailto:info@grainer.io"
          style="font-family: Taviraj; font-size: 2.5rem; color: #02f6b6;"
        >info@grainer.io</a>
      </column>
      <column justify="center" width="full">
        <a
          class="text-6xl"
          href="https://wa.me/60122441566"
          style="font-family: Taviraj; font-size: 2.5rem; color: #02f6b6;"
        >+60-122441566</a>
      </column>
    </row>
  </div>
</template>

<script>
import Textholder from '@/components/Textholder.vue'
import Namecard from '@/components/Namecard.vue'
import Joincard from '@/components/Joincard.vue'
import Row from '@/components/Row.vue'
import Col from '@/components/Column.vue'
import Contact from '@/components/Contact.vue'
import Accordion from '@/components/Accordion.vue'

export default {
  scrollToTop: true,
  components: {
    // eslint-disable-next-line vue/no-unused-components
    column: Col,
    // eslint-disable-next-line vue/no-unused-components
    row: Row,
    // eslint-disable-next-line vue/no-unused-components
    textholder: Textholder,
    // eslint-disable-next-line vue/no-unused-components
    namecard: Namecard,
    // eslint-disable-next-line vue/no-unused-components
    joincard: Joincard,
    // eslint-disable-next-line vue/no-unused-components
    contact: Contact,
    // eslint-disable-next-line vue/no-unused-components
    accordion: Accordion
  }
}
</script>
