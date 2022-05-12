<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :to="{
        name: 'portfolio-slug',
        params: {
          slug: portfolio.url,
        },
      }"
      nuxt
    >
      <v-img
        :src="portfolio.images[0] != null ? portfolio.images[0] : 'logo.png'"
        :aspect-ratio="4 / 3"
      >
        <v-fade-transition>
          <div v-if="!hover" class="overlay pa-2">
            <h2 class="text-h6 text-md-h4">
              <span class="text-overline">Project</span><br />{{
                portfolio.name
              }}
            </h2>
          </div>
        </v-fade-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative">
        <v-btn absolute color="accent" fab icon outlined large right top>
          <v-icon> {{ icons.view }}</v-icon>
        </v-btn>

        <!-- <v-divider class="my-4"></v-divider>
                  <v-sheet
                    class="nucard pa-4 text-h6"
                    v-html="portfolio.client_brief"
                    rounded="xl"
                  ></v-sheet> -->
      </v-card-text>
    </v-card>
  </v-hover>
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
<style lang="scss" scoped>
.overlay::after {
  content: ''; // ::before and ::after both require content
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #41bbf6, #02f4c8);
  background-blend-mode: overlay;
  opacity: 0.6;
}
</style>
