<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters align="center" justify="center" class="my-16">
      <v-col cols="12" lg="7" class="d-flex justify-center">
        <HomeAnimation />
      </v-col>
      <v-col cols="12" lg="5" order-lg="first">
        <HomeTyped />
      </v-col>
    </v-row>
    <HomeServices />

    <LazyHomeIntegrations />
    <v-col cols="12" lg="10" class="mx-auto">
      <h1 class="text-h3">Tools of the trade</h1>
      <h2 class="text-h6 mt-6">
        Our applications can be
        <strong class="accent--text">integrated</strong> with any
        <strong class="primary--text">third party API</strong> service to
        provide seamless synchronization across all your services. Add the power
        of the <strong class="accent--text">open web</strong> to your
        application. Some of the API services we have worked on
      </h2>
    </v-col>

    <v-row no-gutters style="position: relative">
      <v-col cols="12" style="position: absolute">
        <LazyAnimationSphere
      /></v-col>
      <v-col cols="12"><LazyHomeTools /></v-col>
    </v-row>
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
