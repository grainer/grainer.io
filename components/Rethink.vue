<template>
  <div class="flex flex-col w-full">
    <div class="flex w-full flex-row ml-48">
      <div>
        <h1 class="font-h craft-line mt-24">
          <div>Strating</div>
          From Scratch?
        </h1>
        <div class="w-32 h-3 bg-gr-green-light mt-2"></div>
        <p class="font-p w-1/2 mt-4">
          Our highly skilled developers can convert your big ideas into reliable and robust code. Paired with expert designers, we can guarantee your final product will be
          seamless, intuitive, and engaging.
        </p>
        <button class="px-6 py-2 rounded-lg rounded-tr-none border-gr-green border-2 mt-6 font-sh outline-none slide interactive" @click="goToAbout">
          Shall We Start
        </button>
      </div>
      <div class="mx-6" style="width: 224.6px;">
        <!-- illustration goeas here -->
      </div>
    </div>
    <div class="flex w-full flex-row-reverse">
      <div>
        <h1 class="font-h craft-line mt-18">
          <div>Rethinking</div>
          Your Solution?
        </h1>
        <div class="w-32 h-3 bg-gr-green-light mt-2"></div>
        <p class="font-p w-1/2 mt-4">
          Our consulting and development teams analyze your existing system and recommend solutions that would make your business relevant to the ever-changing industry standards.
        </p>
        <button class="px-6 py-2 rounded-lg rounded-tr-none border-gr-green border-2 mt-6 font-sh outline-none slide interactive" @click="goToAbout">
          Get In Touch
        </button>
      </div>
      <div class="mx-6" style="width: 224.6px;">
        <!-- illustration goeas here -->
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
.craft-line {
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: 1.25px;
  text-align: left;
}
.highlight {
  color: #011b14;
  background-color: #02f6b6;
}
</style>
