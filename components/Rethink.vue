<template>
  <div class="flex flex-col w-full mx-48">
    <div class="flex w-full flex-row mt-48">
      <div>
        <h1 class="font-h liner leading-tight">
          <div>Strating</div>From Scratch?
        </h1>
        <div class="w-16 h-3 bg-gr-green-light mt-2"></div>
        <p class="font-p w-4/6 mt-4 text-sm">
          Our highly skilled developers can convert your big ideas into reliable and robust code. Paired with expert designers, we can guarantee your final product will be
          seamless, intuitive, and engaging.
        </p>
        <button
          class="px-6 py-2 rounded-lg rounded-tr-none border-gr-green-light border-2 mt-6 font-sh outline-none slide interactive"
          @click="goToAbout"
        >Shall We Start</button>
      </div>
      <div class="w-4/5">
        <img
          src="@/assets/img/illustration-2-1.png"
          srcset="@/assets/img/illustration-2-1@2x.png 2x, @/assets/img/illustration-2-1@3x.png 3x"
          class="illustration-2_1"
        />
      </div>
    </div>
    <div class="flex w-full flex-row-reverse">
      <div>
        <h1 class="font-h liner mt-18 leading-tight">
          <div>Rethinking</div>Your Solution?
        </h1>
        <div class="w-16 h-3 bg-gr-green-light mt-2"></div>
        <p
          class="font-p w-4/6 mt-4 text-sm"
        >Our consulting and development teams analyze your existing system and recommend solutions that would make your business relevant to the ever-changing industry standards.</p>
        <button
          class="px-6 py-2 rounded-lg rounded-tr-none border-gr-green-light border-2 mt-6 font-sh outline-none slide interactive"
          @click="goToAbout"
        >Get In Touch</button>
      </div>
      <div class="w-4/5">
        <img
          src="@/assets/img/illustration-1-1.png"
          srcset="@/assets/img/illustration-1-1@2x.png 2x, @/assets/img/illustration-1-1@3x.png 3x"
          class="relative"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push('/about')
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
</style>
