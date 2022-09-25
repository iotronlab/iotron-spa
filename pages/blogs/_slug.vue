<template>
  <v-container>
    <section v-if="$fetchState.pending">
      <Loading />
    </section>

    <section v-else>
      <Breadcrumb :breadcrumb-items="breadcrumbItems" />

      <v-divider class="my-2"></v-divider>
      <h1 class="text-h4 text-center">Case Study - {{ portfolio.title }}</h1>
      <v-divider class="my-2"></v-divider>
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
        .$get(`blogs/${this.$route.params.slug}`)
        .then((res) => {
          this.portfolio = res.data
          console.log(res)
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
