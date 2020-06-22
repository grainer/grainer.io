<template>
  <!-- Begin Mailchimp Signup Form -->
  <div id="mc_embed_signup">
    <form
      id="mc-embedded-subscribe-form"
      action="https://grainer.us7.list-manage.com/subscribe/post?u=6c1d936364d19ff195a11950d&amp;id=21885448bc"
      method="post"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <textholder title="Stay updated" addclass="font-semibold"></textholder>
      <div id="mc_embed_signup_scroll" class="flex flex-row ">
        <div class="mc-field-group w-4/5">
          <input id="mce-EMAIL" type="email" value="" placeholder="E-mail" name="EMAIL" class="email p-4 border-2 border-gr-green-light border-r-0 flex-grow w-full interactive" />
        </div>
        <div id="mce-responses" class="clear">
          <div id="mce-error-response" class="response" style="display:none"></div>
          <div id="mce-success-response" class="response" style="display:none"></div>
        </div>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6c1d936364d19ff195a11950d_21885448bc" tabindex="-1" value="" /></div>
        <button
          id="mc-embedded-subscribe"
          type="submit"
          class="px-6 py-4 border-2 border-gr-green-light hover:border-gr-green-dark text-gr-green-light hover:text-gr-green-dark font-sh outline-none slide interactive"
        >
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
      <div class="flex flex-row m-1">
        <p class="inline text-xs">Powered by <a class="text-yellow-500" href="http://eepurl.com/gRI2Nb" title="MailChimp - email marketing made easy and fun">MailChimp</a></p>
      </div>
    </form>
  </div>

  <!--End mc_embed_signup-->
</template>

<script>
import Textholder from '@/components/Textholder.vue'

export default {
  components: {
    textholder: Textholder
  }
}
</script>

<style lang="scss">
.email {
  background-color: rgb(1, 43, 32);
}

.email::placeholder {
  color: #00a86b;
}
</style>
