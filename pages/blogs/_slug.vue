<template>
  <v-container>
    <section v-if="$fetchState.pending">
      <Loading message="loading blog..." />
    </section>

    <section v-else>
      <Breadcrumb :breadcrumb-items="breadcrumbItems" />

      <v-divider class="my-2"></v-divider>
      <h1 class="text-h4 text-center">{{ blog.title }}</h1>
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
      blog: null,
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
          text: 'Blogs',
          disabled: false,
          to: '/blogs',
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
  //     title: this.blog.name,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: this.blog.project_description,
  //       },
  //     ],
  //   }
  // },

  async fetch() {
    try {
      await this.$axios
        .$get(`blogs/${this.$route.params.slug}`)
        .then((res) => {
          this.blog = res.data
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
        title: this.blog.title,
        text: this.blog.author,
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
