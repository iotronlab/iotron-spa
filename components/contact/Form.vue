<template>
  <div v-if="!formSubmitted" class="pa-2 px-lg-10">
    <validation-observer ref="observer">
      <validation-provider
        v-slot="{ errors }"
        name="Full Name"
        rules="required"
      >
        <v-text-field
          v-model="form.name"
          filled
          hint="Enter your full name"
          label="Full Name*"
          :error-messages="errors"
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="Email"
        rules="required|email"
      >
        <v-text-field
          v-model="form.email"
          filled
          hint="Enter your email"
          label="Email*"
          :error-messages="errors"
        >
        </v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Mobile Number"
        rules="required|max:15"
      >
        <v-text-field
          v-model="form.contact"
          filled
          type="number"
          hide-spin-buttons
          hint="Enter your contact number"
          label="Mobile Number*"
          :error-messages="errors"
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="Location" rules="required">
        <v-text-field
          v-model="form.location"
          filled
          hint="Enter Location"
          label="Location*"
          :error-messages="errors"
        >
        </v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="Category" rules="required">
        <v-select
          v-model="form.category"
          :items="categoryOptions"
          :error-messages="errors"
          label="Are you a business or person?*"
          filled
        ></v-select>
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="Business Link(optional)">
        <v-text-field
          v-model="form.business_link"
          hint="link to social media page or website"
          filled
          label="Business Link"
          :error-messages="errors"
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="Referrer">
        <v-text-field
          v-model="form.referrer"
          hint="link to social media page or website"
          label="Referrer"
          filled
          :error-messages="errors"
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="Query" rules="required">
        <v-textarea
          v-model="form.query"
          hint="Describe your query in summary"
          label="Query*"
          filled
          :error-messages="errors"
        ></v-textarea>
      </validation-provider>

      <v-btn block outlined color="accent" class="mb-2" @click="submit"
        >Submit</v-btn
      >
      <v-alert v-if="message" type="error">
        {{ message }}
      </v-alert>
    </validation-observer>
  </div>
  <div v-else class="ma-6">
    <v-alert
      v-if="message"
      type="success"
      class="text-center"
      outlined
      :icon="icons.check"
    >
      {{ message }}
    </v-alert>
  </div>
</template>

<script>
import { mdiCheckDecagram } from '@mdi/js'
export default {
  name: 'ContactForm',
  data: () => ({
    form: {
      name: null,
      location: null,
      email: null,
      contact: null,
      category: null,
      business_link: null,
      referrer: null,
      query: null,
    },
    icons: {
      check: mdiCheckDecagram,
    },
    categoryOptions: ['Personal', 'Business'],

    message: null,
    formSubmitted: false,
  }),

  methods: {
    async submit() {
      if (await this.$refs.observer.validate()) {
        await this.$axios
          .$post('forms/contact', this.form)
          .then((res) => {
            this.message = res.message
            this.formSubmitted = true
          })
          .catch((err) => {
            this.message = err.response.data.message
            this.$sentry.captureException(new Error(err))
          })
      }
    },
  },
}
</script>
