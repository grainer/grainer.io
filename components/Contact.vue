<template>
  <div class="w-full flex flex-row mx-48">
    <div class="w-1/2">
      <div>
        <h1 class="font-h contact-us">
          {{ title }}
        </h1>
        <div class="w-16 h-2 bg-gr-green-light mt-2"></div>
      </div>
      <p class="font-p pt-2 w-2/3 mt-4">
        Let’s build something awesome together! <br />
        Whether you are looking for a solution or looking to turn your ideas into actual products, we are here to serve you!
      </p>
      <div>
        <form class="py-10" name="contact" method="POST" data-netlify="true">
          <div class="flex flex-col">
            <div class="flex justify-center">
              <input class="input p-4 mr-2 flex-grow" type="text" name="name" placeholder="Name" />
              <input class="input p-4 ml-2 flex-grow" type="email" name="email" placeholder="Email" />
            </div>
            <textarea class="input p-4 mt-4 flex-grow" style="min-height: 102px;" name="message" placeholder="Message"></textarea>
          </div>
          <button class="px-6 py-2 rounded-lg rounded-tr-none border-gr-green border-2 mt-10 font-sh outline-none slide interactive" type="submit">Get In Touch</button>
        </form>
      </div>
    </div>
    <div class="w-1/2"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Contact Us'
    }
  }
}
</script>

<style lang="scss">
.contact-us {
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
}

.input {
  background-color: rgb(1, 43, 32);
}

.input::placeholder {
  color: #00a86b;
}
</style>
