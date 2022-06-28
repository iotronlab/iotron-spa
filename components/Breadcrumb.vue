<template>
  <v-breadcrumbs
    :items="breadcrumbItems"
    divider="/"
    large
    class="text-caption font-weight-bold"
  ></v-breadcrumbs>
</template>

<script>
export default {
  name: 'BreadCrumbsComponent',
  props: {
    breadcrumbItems: {
      type: Array,
      required: true,
    },
  },
}
</script>
