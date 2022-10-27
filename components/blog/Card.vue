<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :class="{ hovered: hover }"
      class="mx-auto ma-4 pa-2"
      max-width="344"
      rounded
      :to="{
        name: 'blogs-slug',
        params: {
          slug: blog.url,
        },
      }"
    >
      <v-img
        max-width="20vw"
        height="250px"
        :class="{ 'img-size': hover }"
        contain
        class="rounded-lgx align-center"
        :src="
          blog.banner
            ? blog.banner
            : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
        "
        lazy-src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        gradient="to top, rgba(0, 0, 0, 0.8) 0%, transparent 70%"
      ></v-img>

      <v-card-title
        :class="{ 'text-lined': hover }"
        class="text-h5 mx-0 px-1 text-truncate text-capitalize"
      >
        {{ blog.title }}
      </v-card-title>

      <v-card-subtitle class="overline mx-0 px-1"
        ><v-icon class="mb-1 mr-2">{{ icons.star }}</v-icon> {{ blog.author }}
      </v-card-subtitle>
    </v-card>
  </v-hover>
</template>

<script>
import { mdiStarOutline } from '@mdi/js'

export default {
  name: 'BlogCard',
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        star: mdiStarOutline,
      },
    }
  },
}
</script>

<style scoped>
.hovered {
  background-color: #34334d !important;
}

.text-lined {
  text-decoration: underline !important;
}

.img-size {
  width: 450px !important;
  margin-left: -15px !important;
}
</style>
