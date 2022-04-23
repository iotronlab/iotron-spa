<template>
  <div class="circuits rounded-xl" v-html="svg"></div>
</template>

<script>
export default {
  name: 'ServicesAnimation',
  props: {
    svg: {
      type: String,
      required: true,
    },
  },
}
</script>
