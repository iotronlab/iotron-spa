<template>
  <v-container fluid>
    <section v-if="$fetchState.pending">
      <Loading message="fetching blogs..." />
    </section>
    <section v-else-if="errorMessage != null">
      <LazyFetchError />
    </section>
    <!-- loads on api call success -->
    <section v-else style="min-height: 90vh">
      <v-row no-gutters justify="center" align="center" class="mt-4">
        <LazyBreadcrumb :breadcrumb-items="breadcrumbItems" />

        <v-btn class="mx-8" text rounded outlined>
          Filter <v-icon right>{{ icons.filter }}</v-icon>
        </v-btn>
      </v-row>
      <h1 class="text-h4 font-weight-medium text-center my-8">Blogs</h1>
      <section v-if="blogs.length < 1">
        <v-card height="480" rounded="xl" class="text-center">
          <h1 class="text-body-1 pa-2 pt-4">
            There are no published blogs at the moment.
          </h1>
        </v-card>
      </section>
      <section v-else>
        <v-col cols="12" lg="10" class="mx-auto pa-0 mt-16 mb-8">
          <!-- <masonry :cols="{ default: 3, 991: 2, 575: 1 }" :gutter="10">

            <LazyBlogCard v-for="(blog, i) in blogs" :key="i" :blog="blog" />

          </masonry> -->

          <v-row no-gutters justify="center">
            <v-col v-for="(blog, i) in blogs" :key="i" lg="3">
              <LazyBlogCard :blog="blog" />
            </v-col>
          </v-row>
        </v-col>

        <div class="text-center">
          <v-card class="tile flat ma-0 py-12">
            <v-pagination
              v-model="pageData.current_page"
              :length="pageData.last_page"
              :next-icon="icons.nextArrow"
              :prev-icon="icons.prevArrow"
              total-visible="10"
              circle
              @input="updateQuery(pageData.current_page)"
            ></v-pagination>
          </v-card>
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
  name: 'BlogPage',
  data() {
    return {
      blogs: [],
      pageData: {},
      errorMessage: null,
      paramQuery: null,
      isActive: [],
      icons: {
        nextArrow: mdiArrowRight,
        prevArrow: mdiArrowLeft,
        filter: mdiFilterMenuOutline,
        view: mdiEye,
      },
      breadcrumbItems: [
        {
          text: 'Home',
          disabled: false,
          to: '/',
        },
        {
          text: 'Blogs',
          disabled: true,
        },
      ],
    }
  },
  async fetch() {
    try {
      await this.$axios
        .$get('blogs', { params: this.$route.query })
        .then((res) => {
          this.blogs = res.data
          this.pageData = res.meta
          this.paramQuery = this.$route.query
        })
        .catch((err) => {
          this.errorMessage = err
          // this.$sentry.captureException(new Error(err))
        })
    } catch (error) {
      // this.$sentry.captureException(new Error(error))
    }
  },
  head() {
    return {
      title: 'Portfolio',
      // meta: [
      //   // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      //   {
      //     hid: 'description',
      //     name: 'description',
      //     content: 'My custom description'
      //   }
      // ]
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
    // staggering() {
    //   const anime = this.$anime
    //   anime({
    //     targets: '.grid .el',
    //     translateY: [-50, 0],
    //     opacity: [0, 1],
    //     duration: 1000,
    //     delay: anime.stagger(100), // increase delay by 100ms for each elements.
    //   })
    // },
  },
}
</script>
