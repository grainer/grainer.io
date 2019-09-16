<template>
  <div class="flex items-center mb-6">
    <img src="@/assets/img/bullet.svg" class="mr-4" style="width: 1.5em;" />
    <h3 class="font-bold text-lg font-sh text-gray-400">{{text}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      default: '',
      type: String
    }
  }
}
</script>
