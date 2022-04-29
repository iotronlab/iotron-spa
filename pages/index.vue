<template>
  <v-container fluid>
    <v-row no-gutters align="center" justify="center" class="my-16">
      <v-col cols="12" lg="7" class="d-flex justify-center">
        <HomeAnimation />
      </v-col>
      <v-col cols="12" lg="5" order-lg="first">
        <HomeTyped />
      </v-col>
    </v-row>
    <HomeServices />

    <HomeIntegrations />
    <HomeTools />
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

<style scoped>
.circuit-bg {
  background: url('@/assets/images/integrations/circuitbg.svg') no-repeat;
  background-size: 100%;
}
</style>
