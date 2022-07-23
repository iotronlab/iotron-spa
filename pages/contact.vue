<template>
  <v-container class="main-container">
    <ContactAnimation />
    <div class="container">
      <p class="text-center header" style="margin: 0 2vh">Contact Us!</p>
      <v-divider class="mb-4"></v-divider>
      <div>
        <v-row no-gutters justify="center">
          <v-col cols="12" lg="5">
            <div class="container">
              <div>
                <p style="font-size: 3vw; padding: 10px 0">
                  We provide creative, affordable and best in class business
                  solutions.
                </p>
                <p>
                  Get in touch to get a custom tailor made website just for your
                  needs!
                </p>
              </div>
              <v-divider></v-divider>
              <address>
                Visit us at: <br />
                97, Ajay Nagar, Melabagan Estate,
                <br />Basak Bagan, Kolkata, <br />West Bengal 700074
              </address>
              <a href="tel:+91 7439 790 770">
                <v-icon>{{ icons.phone }} </v-icon>
                &nbsp;+91 7439 790 770
              </a>
              <a href="mailto:contactus@iaa.org.in">
                <v-icon>{{ icons.email }}</v-icon>
                &nbsp;contactus@iaa.org.in
              </a>
            </div>
            <v-divider></v-divider>
          </v-col>
          <v-col cols="12" lg="7">
            <ContactForm />
          </v-col>
        </v-row>
      </div>
    </div>
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

<style scoped>
.main-container {
  margin: 2vh auto;
}

.header {
  font-size: 6vh;
}

.text-center {
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-self: center;
  text-align: center;
  vertical-align: middle;
}

@media screen and (max-width: 900px) {
  .container {
    text-align: center;
  }
}
</style>
