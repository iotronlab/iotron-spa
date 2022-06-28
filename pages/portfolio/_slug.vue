<template>
  <v-container>
    <section v-if="$fetchState.pending">
      <Loading />
    </section>

    <section v-else>
      <Breadcrumb :breadcrumb-items="breadcrumbItems" />

      <v-divider class="my-2"></v-divider>
      <h1 class="text-h4 text-center">Case Study - {{ portfolio.name }}</h1>
      <v-divider class="my-2"></v-divider>

      <v-row no-gutters justify="center">
        <v-col cols="12" lg="3">
          <h2 class="text-overline text--secondary">Name</h2>
          <h3 class="text-body-1">{{ portfolio.name }}</h3>
          <br />
          <h2 class="text-overline text--secondary">Client Brief</h2>
          <h3 class="text-body-1">{{ portfolio.client_brief }}</h3>

          <h2
            v-if="portfolio.client_location"
            class="text-overline text--secondary"
          >
            Client Location
          </h2>
          <h3 v-if="portfolio.client_location" class="text-body-1">
            {{ portfolio.client_location }}
          </h3>
          <br />
          <h2 class="text-overline text--secondary">Project Description</h2>
          <h3 class="text-body-1">{{ portfolio.project_description }}</h3>
          <br />

          <v-row v-if="portfolio.tools != null" no-gutters align="center">
            <h2 class="text-overline text--secondary">Tools</h2>
            <v-chip
              v-for="(tool, i) in portfolio.tools"
              :key="i"
              outlined
              class="ma-1"
              >{{ tool }}</v-chip
            >
          </v-row>
          <v-row v-if="portfolio.services != null" no-gutters align="center">
            <h2 class="text-overline text--secondary">Services</h2>
            <v-chip
              v-for="(service, i) in portfolio.services"
              :key="i"
              outlined
              class="ma-1"
              >{{ service }}</v-chip
            >
          </v-row>
          <v-row
            v-if="portfolio.external_url != null"
            no-gutters
            align="center"
            class="mb-4"
          >
            <h2 class="text-overline text--secondary">External Link</h2>
            <v-btn
              v-for="(url, i) in portfolio.external_url"
              :key="i"
              class="ma-1 btn-creator"
              :href="url.url"
              target="_href"
              rounded
              dark
              >{{ url.site }}</v-btn
            >
          </v-row>
          <v-btn class="ma-2 btn-agency" @click="share"
            ><v-icon left>{{ icon.share }}</v-icon> Share</v-btn
          >
        </v-col>
        <v-col cols="12" lg="8">
          <PostImages :images="portfolio.images"
        /></v-col>
      </v-row>
      <v-divider class="my-2"></v-divider>
      <PostCard :posts="portfolio.posts" />
    </section>
    <!-- <Footer /> -->
  </v-container>
</template>

<script>
import { mdiShareVariantOutline } from '@mdi/js'

export default {
  data() {
    return {
      portfolio: null,
      icon: {
        share: mdiShareVariantOutline,
      },
      breadcrumbItems: [
        {
          text: 'Home',
          disabled: false,
          to: '/',
        },
        {
          text: 'Portfolios',
          disabled: false,
          to: '/portfolio',
          exact: true,
        },
        {
          text: this.$route.params.slug,
          disabled: true,
          to: '',
        },
      ],
    }
  },

  // head() {
  //   return {
  //     title: this.portfolio.name,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: this.portfolio.project_description,
  //       },
  //     ],
  //   }
  // },

  async fetch() {
    try {
      await this.$axios
        .$get(`portfolios/${this.$route.params.slug}`)
        .then((res) => {
          this.portfolio = res.data
        })
        .catch((err) => {
          this.errorMessage = err
          this.$sentry.captureException(new Error(err))
        })
    } catch (error) {
      this.$sentry.captureException(new Error(error))
    }
  },

  methods: {
    async share() {
      const shareData = {
        title: this.portfolio.name,
        text: this.portfolio.project_description,
        url: 'https://www.jetpax.org' + this.$route.path,
      }
      try {
        await navigator.share(shareData)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style scoped>
.posts {
  height: 180px;
  width: auto;
  align-self: center;
}
</style>
