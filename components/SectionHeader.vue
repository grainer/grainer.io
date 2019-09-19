<template>
  <div class="flex items-center mb-6">
    <svg
      class="mr-4"
      style="width: 1.5em;"
      viewBox="0 0 449 476"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="2"
    >
      <path
        d="M423.839 13.301S248.628-42.58 59.25 159.038c-165.419 176.11 87.838 293.635 116.391 304.177C198.736 471.742 316.693 504 402.879 324.49c45.021-93.772 61.618-183.059 20.96-311.189z"
        fill="#02f6b6"
      />
    </svg>
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
