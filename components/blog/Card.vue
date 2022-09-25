<template>
  <v-card
    class="mx-auto"
    max-width="344"
    :to="{
      name: 'blogs-slug',
      params: {
        slug: blog.url,
      },
    }"
  >
    <v-img
      height="200px"
      class="rounded-lg"
      :src="
        blog.banner
          ? blog.banner
          : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
      "
      lazy-src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      gradient="to top, rgba(0, 0, 0, 0.8) 0%, transparent 70%"
    ></v-img>

    <v-card-title>
      {{ blog.title }}
    </v-card-title>

    <v-card-subtitle> by {{ blog.author }} </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
}
</script>
