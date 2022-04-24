<template>
  <v-container fluid>
    <v-row no-gutters align="center" justify="center" class="my-16">
      <v-col cols="12" lg="8" class="d-flex justify-center">
        <HomeAnimation />
      </v-col>
      <v-col cols="12" lg="4" order-lg="first">
        <HomeTyped />
      </v-col>
    </v-row>
    <HomeServices />
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    height() {
      return window.innerHeight
    },
  },
}
</script>
