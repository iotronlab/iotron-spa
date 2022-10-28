<template>
  <v-container class="justify-center" fluid>
    <section v-if="$fetchState.pending">
      <Loading message="loading blog..." />
    </section>

    <section v-else>
      <Breadcrumb :breadcrumb-items="breadcrumbItems" />

      <v-divider class="my-2 mb-8"></v-divider>

      <v-row no-gutters justify="center">
        <v-col cols="12" md="9">
          <h5 class="overline mt-4">Posted by {{ blog.author }}</h5>
          <v-hover v-slot="{ hover }">
            <h1
              class="text-h2 text-capitalize"
              :class="{ 'text-decoration-underline': hover }"
            >
              {{ blog.title }}
            </h1>
          </v-hover>
          <v-list-item class="my-4 font-weight-light pl-1"
            ><v-icon class="mr-2 mb-1">{{ icon.eye }}</v-icon>
            {{ blog.views }} Views
            <v-btn
              rounded
              outlined
              class="mx-6 text-capitalize"
              @click="share()"
              ><v-icon class="mr-4">{{ icon.share }}</v-icon
              >Share</v-btn
            >
          </v-list-item>
          <v-spacer class="my-8"></v-spacer>
          <v-img
            :src="
              blog.banner
                ? blog.banner
                : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
            "
            max-width="80vw"
            contain
            class="my-4"
          >
          </v-img>
          <v-card-text class="text-h6 my-8 white--text">{{
            blog.content
          }}</v-card-text>
        </v-col>
      </v-row>

      <v-divider class="mx-4 my-8"></v-divider>

      <v-col cols="12" lg="10" class="mx-auto pa-0 my-16">
        <v-card-title class="my-4 text-h5"
          >Related blogs
          <v-btn rounded outlined class="text-capitalize ml-6" to="/blogs"
            >View all</v-btn
          >
        </v-card-title>
        <v-row v-if="postAll.length > 1" no-gutters justify="center">
          <v-col v-for="(blogAll, i) in postAll.slice(0, 4)" :key="i" lg="3">
            <LazyBlogCard :blog="blogAll" />
          </v-col>
        </v-row>
      </v-col>

      <v-divider class="mx-4 my-8"></v-divider>
    </section>
    <!-- <Footer /> -->
  </v-container>
</template>

<script>
import { mdiShareVariantOutline, mdiEye } from '@mdi/js'

export default {
  data() {
    return {
      blog: null,
      postAll: [],
      paramQuery: null,
      icon: {
        share: mdiShareVariantOutline,
        eye: mdiEye,
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

  created() {
    this.fetchAll()
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
        // console.log(err)
      }
    },

    async fetchAll() {
      try {
        await this.$axios
          .$get('blogs', { params: { page: 1 } })
          .then((res) => {
            this.postAll = res.data
          })
          .catch((err) => {
            this.paramQuery = err
          })
      } catch (error) {
        // this.$sentry.captureException(new Error(error))
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
