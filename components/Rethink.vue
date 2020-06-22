<template>
  <div class="flex flex-col w-full mx-48">
    <div class="flex flex-row w-full">
      <div class="w-1/2">
        <img
          src="@/assets/img/illustration-1-2.png"
          srcset="@/assets/img/illustration-1-2@2x.png 2x, @/assets/img/illustration-1-2@3x.png 3x"
          style="width: 60%"
        />
      </div>
      <div class="w-1/2">
        <img
          src="@/assets/img/illustration-2-2.png"
          srcset="@/assets/img/illustration-2-2@2x.png 2x, @/assets/img/illustration-2-2@3x.png 3x"
          style="width: 60%"
        />
      </div>
    </div>
    <div class="flex w-full flex-row">
      <div>
        <h1 class="font-h liner leading-tight">
          <div>Starting</div>From Scratch?
        </h1>
        <div class="w-16 h-3 bg-gr-green-light mt-2"></div>
        <p class="font-p w-5/6 mt-4 text-sm leading-loose">
          Our highly skilled developers can convert your big ideas into reliable and robust code. Paired with expert designers, we can guarantee your final product will be
          seamless, intuitive, and engaging.
        </p>
        <!-- <button
          class="px-6 py-2 rounded-lg rounded-tr-none border-gr-green-light border-2 mt-6 font-sh outline-none slide interactive"
          @click="goToContact"
        >Shall We Start</button> -->
      </div>
      <div>
        <h1 class="font-h liner leading-tight">
          <div>Rethinking</div>Your Solution?
        </h1>
        <div class="w-16 h-3 bg-gr-green-light mt-2"></div>
        <p
          class="font-p w-5/6 mt-4 text-sm leading-loose"
        >Our consulting and development teams analyze your existing system and recommend solutions that would make your business relevant to the ever-changing industry standards.</p>
        <button
          class="px-6 py-2 rounded-lg rounded-tr-none border-gr-green-light border-2 mt-6 font-sh outline-none slide interactive"
          @click="goToContact"
        >Get In Touch</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToContact() {
      if (this.$route.path !== '/') {
        const that = this
        setTimeout(() => {
          that.$router.push('/')
          that.$store.commit('goto', '#contact')
        }, 500)
      } else {
        this.$store.commit('goto', '#contact')
      }
    }
  }
}
</script>

<style>
.liner {
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 1.25px;
  text-align: left;
}
.highlight {
  color: #011b14;
  background-color: #02f6b6;
}
.p-font {
  font-stretch: extra-expanded !important;
}
</style>
