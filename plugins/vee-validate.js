// import Vue from 'vue'
// import {ValidationObserver, extend} from 'vee-validate'
// import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
// import {required, email} from 'vee-validate/dist/rules'

// extend('required',{
//     ...required,
//     message:'This file is required'
// })

// extend('email',{
//     ...email,
//     message:'This field needs to be email'
// })

// Vue.component('ValidationObserver', ValidationObserver)
// Vue.component('ValidationProvider', ValidationProvider)

import Vue from 'vue'
import {
  extend,
  ValidationProvider,
  ValidationObserver,
  setInteractionMode,
} from 'vee-validate'

import { required, max, digits, email, min, is } from 'vee-validate/dist/rules'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})
extend('email', {
  ...email,
  message: 'Email must be valid',
})
extend('max', {
  ...max,
  message: '{_field_} can not be greater than {length}',
})
extend('min', {
  ...min,
  message: '{_field_} can not be less than {length}',
})
extend('digits', {
  ...digits,
  message: '{_field_} must be of {length} digits',
})
extend('is', {
  ...is,
  message: '{_field_} is required',
})
// Register it globally
// main.js or any entry file.
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
