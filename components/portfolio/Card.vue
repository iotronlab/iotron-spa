<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="ma-2 pb-1"
      max-width="100%"
      color="black"
      rounded-xl
      :to="{
        name: 'portfolio-slug',
        params: {
          slug: portfolio.url,
        },
      }"
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
    >
      <v-img
        :src="
          portfolio.image !== null
            ? portfolio.image
            : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
        "
        height="300px"
      ></v-img>

      <v-card-title>
        {{ portfolio.name }}
      </v-card-title>

      <v-card-subtitle>
        {{ portfolio.client_brief }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange lighten-2" flat small> See Details </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>

  <!-- <div class="my-4"> -->
  <!-- <v-card :to="{
      name: 'portfolio-slug',
      params: {
        slug: portfolio.url,
      },
    }" nuxt outlined class="my-2"> -->
  <!-- <v-img
      :src="portfolio.image != null ? portfolio.image : 'logo.png'"
      class="rounded-xl" -->
  <!-- > -->
  <!-- <v-fade-transition>
        <div v-if="!hover" class="overlay pa-2">
          <h2 class="text-h6 text-md-h4">
            <span class="text-overline">Project</span><br />{{
                portfolio.name
            }}
          </h2>
        </div>
      </v-fade-transition> -->
  <!-- </v-img>
    <v-card-text class="pt-6"> -->
  <!-- <v-btn absolute color="accent" fab icon outlined large right top>
        <v-icon> {{ icons.view }}</v-icon>
      </v-btn> -->

  <!-- <v-divider class="my-4"></v-divider>
                  <v-sheet
                    class="nucard pa-4 text-h6"
                    v-html="portfolio.client_brief"
                    rounded="xl"
                  ></v-sheet> -->
  <!-- </v-card-text>

    <h1 class="text-h5">{{ portfolio.name }}</h1>
  </div> -->
</template>

<script>
import { mdiEye } from '@mdi/js'
export default {
  name: 'PortfolioCard',
  props: {
    portfolio: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        view: mdiEye,
      },
    }
  },
}
</script>
<style scoped>
/* .overlay::after {
  content: ''; // ::before and ::after both require content
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #41bbf6, #02f4c8);
  background-blend-mode: overlay;
  opacity: 0.6;
} */

.on-hover {
  transform: scale(1.06);
  transition: transform 0.5s;
  box-shadow: 3px white;
}
</style>
