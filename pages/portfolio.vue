<template>
  <v-container fluid>
    <section v-if="$fetchState.pending">
      <Loading message="fetching case studies..." />
    </section>
    <section v-else-if="errorMessage != null">
      <LazyFetchError />
    </section>
    <section v-else>
      <section v-if="portfolios.length < 1">
        <v-card height="480" rounded="xl" class="text-center">
          <h1 class="text-body-1 pa-2 pt-4">
            There is no data in your portfolio.
          </h1></v-card
        >
      </section>
      <section v-else>
        <v-row no-gutters justify="center">
          <v-col
            v-for="(portfolio, i) in portfolios"
            :key="i"
            cols="12"
            lg="5"
            class="pa-2"
          >
            <nuxt-link
              :to="{
                name: 'portfolio-slug',
                params: {
                  slug: portfolio.url,
                },
              }"
            >
              <v-img
                :src="
                  portfolio.images[0] != null
                    ? portfolio.images[0].url
                    : 'icon.png'
                "
                contain
                :aspect-ratio="4 / 3"
                gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.7)"
                class="rounded-lg"
                dark
              >
                <v-container>
                  <v-row no-gutters justify="space-between" class="ma-1">
                    <h2 class="text-h5">
                      <span class="text-overline">Project</span><br />{{
                        portfolio.name
                      }}
                    </h2>
                    <v-btn class="btn-agency mb-4" dark small rounded>
                      View
                    </v-btn>
                  </v-row>
                </v-container>
              </v-img></nuxt-link
            >
          </v-col>
        </v-row>
        <div class="text-center">
          <v-pagination
            v-model="pageData.current_page"
            :length="pageData.last_page"
            :next-icon="nextArrow"
            :prev-icon="prevArrow"
            @input="updateQuery(pageData.current_page)"
          ></v-pagination>
        </div>
      </section>
    </section>
  </v-container>
</template>

<script>
import { mdiArrowRight, mdiArrowLeft } from '@mdi/js'

export default {
  name: 'PortfolioPage',
  data() {
    return {
      portfolios: [],
      pageData: {},
      errorMessage: null,
      nextArrow: mdiArrowRight,
      prevArrow: mdiArrowLeft,
    }
  },
  async fetch() {
    try {
      await this.$axios
        .$get('portfolios', { params: this.$route.query })
        .then((res) => {
          this.portfolios = res.data
          this.pageData = res.meta
        })
        .catch((err) => {
          this.errorMessage = err
          // this.$sentry.captureException(new Error(err))
        })
    } catch (error) {
      // this.$sentry.captureException(new Error(error))
    }
  },
  watch: {
    '$route.query': '$fetch',
  },
  methods: {
    updateQuery(data) {
      this.$router.push({ query: { page: data } })
    },
  },
}
</script>
