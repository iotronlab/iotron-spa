<template>
  <v-container fluid>
    <v-row no-gutters justify="center" class="text-center">
      <v-col cols="12" lg="3">
        <NuxtLink to="/">
          <v-img src="/logo.webp" contain class="mx-auto" alt="iotron Logo" />
        </NuxtLink>
        <br />
        <h5 class="text-subtitle-2">
          iotron technologies pvt ltd<br />
          335, Dum Dum Road<br />Kolkata - 74<br />
          WB, India.
        </h5>
        <br />
        <p>
          <a href="tel:+91 7439 790 770">
            <v-icon>{{ icons.phone }} </v-icon>&nbsp;+91 9046632101
          </a>
        </p>
        <p>
          <a href="mailto:contactus@iaa.org.in">
            <v-icon>{{ icons.email }}</v-icon
            >&nbsp;contactus@iotron.co
          </a>
        </p>
        <section class="text-center">
          <p class="text-subtitle-2">find us on</p>
          <v-row no-gutters justify="space-around" class="my-4">
            <v-btn
              v-for="(social, i) in socialLinks"
              :key="i"
              icon
              :href="social.url"
              target="_blank"
              rel="noopener"
            >
              <v-icon :aria-label="social.name">{{ social.icon }}</v-icon>
            </v-btn>
          </v-row>
        </section>
      </v-col>

      <v-col cols="12" lg="3" class="pa-2">
        <p v-for="(link, i) in navItems" :key="i" class="subtitle-1 mb-1">
          <NuxtLink :to="link.to">{{ link.title }}</NuxtLink>
        </p>
      </v-col>
      <v-col cols="12" lg="3">
        <p>
          <NuxtLink to="/verify"> Verify Certificates </NuxtLink>
        </p>
        <section>
          <!-- <p class="caption mb-1">Policies</p>
          <p v-for="(policy, i) in policies" :key="i" class="subtitle-1 mb-1">
            <NuxtLink :to="'/policy/' + policy.url">
              {{ policy.title }}
            </NuxtLink>
          </p> -->
        </section>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <span class="mr-2">&copy; {{ new Date().getFullYear() }}</span>
    </v-row>
  </v-container>
</template>

<script>
import {
  mdiEmail,
  mdiYoutube,
  mdiPhone,
  mdiLinkedin,
  mdiFacebook,
  mdiGoogle,
} from '@mdi/js'

export default {
  name: 'FooterComponent',
  props: {
    navItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        email: mdiEmail,
        phone: mdiPhone,
      },
      policies: [],
      errorMessage: null,
      socialLinks: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/independentartistassociation',
          icon: mdiFacebook,
        },
        {
          name: 'Linkedin',
          url: 'https://www.instagram.com/independentartistassociation',
          icon: mdiLinkedin,
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UC0Q1WPPZBPwfXj3G7ZtGPUQ',
          icon: mdiYoutube,
        },
        {
          name: 'Google',
          url: 'https://goo.gl/maps/Q6jKTGNSywZPSHj59',
          icon: mdiGoogle,
        },
      ],
    }
  },
}
</script>
