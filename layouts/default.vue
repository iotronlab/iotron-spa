<template>
  <v-app dark>
    <v-dialog
      v-model="drawer"
      fullscreen
      hide-overlay
      app
      class="hidden-lg-and-up"
    >
      <v-sheet height="100%">
        <v-btn
          fab
          icon
          fixed
          right
          aria-label="close-button"
          @click.stop="drawer = !drawer"
        >
          <v-icon x-large>{{ icons.close }}</v-icon></v-btn
        >
        <v-list class="pt-16">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
            @click.stop="drawer = !drawer"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-dialog>
    <v-app-bar fixed app flat>
      <nuxt-link :to="{ name: 'index' }"
        ><v-img src="/logo.png" max-width="220" contain
      /></nuxt-link>
      <v-spacer />

      <v-app-bar-nav-icon
        aria-label="nav-button"
        class="hidden-lg-and-up"
        @click.stop="drawer = !drawer"
      >
        <v-icon slot="default" x-large>{{
          icons.menu
        }}</v-icon></v-app-bar-nav-icon
      >
      <v-row no-gutters justify="end" align="center" class="hidden-md-and-down">
        <v-switch
          v-model="$vuetify.theme.dark"
          inset
          label="Dark"
          hide-details
          class="mr-4"
        ></v-switch>
        <v-btn v-for="(item, i) in items" :key="i" text :to="item.to">{{
          item.title
        }}</v-btn>
      </v-row>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <LazyFooter />
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
}
</script>
