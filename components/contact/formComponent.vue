<template>
  <div>
    Helloo
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          v-slot="{ errors }"
          name="Name"
          rules="required|alpha"
        >
          <div class="form-inputs">
            <label for="">Name</label>
            <br />
            <input v-model="formData.name" type="text" />
            <br />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="Email"
          rules="required|email"
        >
          <div class="form-inputs">
            <label for="">Email</label>
            <br />
            <input v-model="formData.email" type="email" />
            <br />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="Password"
          rules="required|min:6|max:12s"
        >
          <div class="form-inputs">
            <label for="">Password</label>
            <br />
            <input v-model="formData.password" type="password" />
            <br />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" name="Gender" rules="required">
          <div class="form-inputs">
            <label for="">Gender</label>
            <br />
            <select v-model="formData.gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="acceptTerms"
          rules="required"
        >
          <div class="">
            <input
              v-model="formData.acceptTerms"
              type="checkbox"
              style="width: 20px"
            />
            <label for="">Accept Terms</label>
            <br />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <input type="submit" class="button" text="submit" />
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    formData: {
      name: '',
      email: '',
      password: '',
      gender: '',
      acceptTerms: '',
    },
  }),
  methods: {
    onSubmit() {
      console.log(this.formData)
    },
  },
})
</script>
