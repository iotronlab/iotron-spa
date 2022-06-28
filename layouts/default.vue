<template>
  <v-app dark>
    <NavigationBase :nav-items="items" />
    <v-main>
      <nuxt />
    </v-main>
    <LazyFooter :nav-items="items" />
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mdiMenu, mdiPhone, mdiEmail, mdiClose } from '@mdi/js'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      icons: {
        menu: mdiMenu,
        close: mdiClose,
        call: mdiPhone,
        email: mdiEmail,
      },
      drawer: false,

      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Services',
          to: '/',
        },
        {
          icon: '',
          title: 'Portfolio',
          to: '/portfolio',
        },
        {
          icon: '',
          title: 'Blogs',
          to: '/blog',
        },
        {
          icon: '',
          title: 'Contact',
          to: '/contact',
        },
      ],
    }
  },
  mounted() {
    // this.scrollSmootherInit()
  },

  methods: {
    scrollSmootherInit() {
      const ScrollSmoother = this.$ScrollSmoother
      ScrollSmoother.create({
        content: '#content',
        wrapper: '#wrapper',
        smooth: 1,
        effects: true,
      })
    },
  },
}
</script>
