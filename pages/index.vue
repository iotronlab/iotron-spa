<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters align="center" justify="center" class="mt-10 mt-lg-0">
      <v-col cols="12">
        <HomeTyped />
      </v-col>
      <v-col cols="12" class="mt-lg-n16">
        <HomeAnimation />
      </v-col>
    </v-row>
    <LazyHomeServices />

    <LazyHomeIntegrations />

    <h1 class="scrollingText text-h1" style="position: absolute">
      Tools of the trade # Tools of the trade
    </h1>
    <v-col cols="12" lg="10" class="mx-auto">
      <section ref="wrapper" class="demo-text">
        <div ref="wraptext" class="text-h1"></div>
      </section>
      <h2 class="text-h6 mt-6">
        We are on a journey to acquire new skills and upgrade existing ones.
        While on this journey, we have embraced the power of the
        <strong class="accent--text">open web</strong> to affect the maximum
        number of lives in the modern world. But we are always open to exploring
        new possibilities and working with
        <strong class="primary--text">new technologies.</strong>
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
  mounted() {
    this.scrollTextHorizontal()
  },
  methods: {
    scrollTextHorizontal() {
      const gsap = this.$gsap
      const texts = gsap.utils.toArray('.scrollingText')
      texts.forEach((text) => {
        gsap.to(text, {
          x: 1000,
          duration: 50,
          repeat: -1,
          ease: 'linear',
          scrollTrigger: {
            trigger: text,
          },
        })

        gsap.to(text, {
          xPercent: 15,
          scrollTrigger: {
            trigger: text,
            scrub: true,
          },
        })
      })
    },
  },
}
</script>
<style>
.spacer {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
}
</style>
