<template>
  <div class="circuits" v-html="svg"></div>
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
