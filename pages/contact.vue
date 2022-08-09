<template>
  <v-container>
    <ContactAnimation />

    <v-divider class="mb-4"></v-divider>

    <v-row no-gutters justify="center" class="text-center text-lg-right">
      <v-col cols="12" lg="3">
        <h1 class="text-h2">Contact US</h1>

        <v-divider class="my-2"></v-divider>
        <h2 class="text-h6 mb-4">We are based in the city of joy!</h2>
        <address>
          iotron technologies pvt ltd<br />
          335, Dum Dum Road<br />Kolkata - 74<br />
          WB, India.
        </address>
        <v-divider class="my-2"></v-divider>
        <a href="tel:+91 9046632101">
          <v-icon>{{ icons.phone }} </v-icon>
          &nbsp;+91 9046632101
        </a>
        (Mon-Sat 10am-6pm IST)
        <br />
        <a href="mailto:contactus@iotron.co">
          <v-icon>{{ icons.email }}</v-icon>
          &nbsp;contactus@iotron.co
        </a>
        <v-divider class="my-2"></v-divider>
      </v-col>

      <v-col cols="12" sm="10" lg="7">
        <ContactForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiPhone, mdiEmail } from '@mdi/js'
// import ContactForm from '../components/contact/contactForm.vue'

export default {
  name: 'ContactPage',
  // components: { ContactForm },
  data() {
    return {
      icons: {
        phone: mdiPhone,
        email: mdiEmail,
      },
    }
  },
}
</script>
