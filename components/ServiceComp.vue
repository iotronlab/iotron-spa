<template>
  <v-row :id="service.id">
    <v-col col="1"></v-col>
    <v-col cols="12" class="py-16" sm="10" md="3" lg="3">
      <v-card-title class="text-lg-h4 text-md-h6 text-sm-body-1">{{
        service.title
      }}</v-card-title>
    </v-col>
    <v-col col="1"></v-col>
    <v-col :id="service.scroll" cols="12" sm="10" md="6" lg="6">
      <v-card-text class="text-lg-h6 text-md-body-1 text-sm-body-2 mb-8">
        {{ service.content }}
      </v-card-text>
      <v-card
        v-for="(text, i) in service.details"
        :key="i"
        tile
        flat
        class="mx-0 px-0 mb-8 fade-effect"
      >
        <v-card-title
          class="text-lg-h6 text-md-body-1 text-sm-body-2 mx-0 px-0 my-4"
          ><v-icon class="mr-4">{{ icons.asterisk }}</v-icon
          >{{ text.title }}</v-card-title
        >
        <v-card-text class="text-lg-h6 text-md-body-1 text-sm-body-2 mx-0 px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col col="1"></v-col>
  </v-row>
</template>

<script>
import { mdiAsterisk } from '@mdi/js'

import ScrollTrigger from 'gsap/ScrollTrigger'

export default {
  name: 'ServiceComp',
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        asterisk: mdiAsterisk,
      },
    }
  },

  mounted() {
    this.textAnimation()
  },

  methods: {
    textAnimation() {
      const gsap = this.$gsap

      ScrollTrigger.batch('.fade-effect', {
        start: 'top 50%',
        // end: "top 10%",
        markers: true,
        onEnter: (elements, triggers) => {
          gsap.to(elements, { opacity: 1, stagger: 0.15 })
        },
        onEnterBack: (elements, triggers) => {
          gsap.to(elements, { opacity: 1, stagger: 0.15 })
        },
        onLeave: (elements, triggers) => {
          gsap.to(elements, { opacity: 0.2, stagger: 0.15 })
        },
      })

      const MovingContent = document.getElementById(this.service.scroll) // moving
      const MainContent = document.getElementById(this.service.id) // full

      gsap.to(MovingContent, {
        y: () => -(MovingContent.scrollHeight - 500),
        ease: 'none',
        scrollTrigger: {
          trigger: MainContent,
          pin: true,
          markers: false,
          scrub: 1,
        },
      })
    },
  },
}
</script>

<style scoped>
.fade-effect {
  opacity: 0.2;
}
</style>
