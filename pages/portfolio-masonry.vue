<template>
  <v-container fluid>
    <section v-if="$fetchState.pending">
      <Loading message="fetching portfolio..." />
    </section>
    <section v-else-if="errorMessage != null">
      <LazyFetchError />
    </section>
    <section v-else>
      <section v-if="portfolios.length < 1">
        <v-card height="480" rounded="xl" class="text-center">
          <h1 class="text-body-1 pa-2 pt-4">
            There is no data in your portfolio.
          </h1>
        </v-card>
      </section>
      <section v-else class="grid">
        <v-row no-gutters justify="center" align="center" class="mt-16">
          <v-col cols="12" sm="6">
            <h1 class="el text-h3">Case Studies</h1>
            <v-divider></v-divider>
            <h2 class="el text-h6">use filter to shortlist projects</h2>
          </v-col>

          <v-btn class="el ml-2" text>
            Filter <v-icon right>{{ icons.filter }}</v-icon>
          </v-btn>
        </v-row>

        <v-col cols="12" lg="10" class="mx-auto pa-0 mt-16">
          <masonry :cols="{ default: 2, 991: 2, 575: 1 }" :gutter="10">
            <!-- Start Single Gallery -->
            <LazyPortfolioCard
              v-for="(portfolio, i) in portfolios"
              :key="i"
              :portfolio="portfolio"
            />
            <!-- End Single Gallery -->
          </masonry>
        </v-col>

        <div class="text-center">
          <v-pagination
            v-model="pageData.current_page"
            :length="pageData.last_page"
            :next-icon="icons.nextArrow"
            :prev-icon="icons.prevArrow"
            total-visible="10"
            @input="updateQuery(pageData.current_page)"
          ></v-pagination>
        </div>
      </section>
    </section>
  </v-container>
</template>

<script>
import {
  mdiArrowRight,
  mdiEye,
  mdiArrowLeft,
  mdiFilterMenuOutline,
} from '@mdi/js'

export default {
  name: 'PortfolioMasonryPage',
  data() {
    return {
      portfolios: [],
      pageData: {},
      errorMessage: null,
      isActive: [],
      icons: {
        nextArrow: mdiArrowRight,
        prevArrow: mdiArrowLeft,
        filter: mdiFilterMenuOutline,
        view: mdiEye,
      },
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
  mounted() {
    window.onNuxtReady(() => {
      setTimeout(() => {
        this.staggering()
      }, 1000)
    })
  },
  methods: {
    updateQuery(data) {
      this.$router.push({ query: { page: data } })
    },
    staggering() {
      const anime = this.$anime
      anime({
        targets: '.grid .el',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(100), // increase delay by 100ms for each elements.
      })
    },
  },
}
</script>
