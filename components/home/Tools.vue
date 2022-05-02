<template>
  <v-col cols="12" lg="10" class="mx-auto">
    <h1 class="text-h3">Tools of the trade</h1>
    <h2 class="text-h6 mt-6">
      Our applications can be
      <strong class="accent--text">integrated</strong> with any
      <strong class="primary--text">third party API</strong> service to provide
      seamless synchronization across all your services. Add the power of the
      <strong class="accent--text">open web</strong> to your application. Some
      of the API services we have worked on
    </h2>

    <v-row no-gutters class="text-center mt-10">
      <v-col v-for="(item, i) in items" :key="i" cols="12" md="6">
        <h3 class="text-h6 font-weight-black my-6">{{ item.name }}</h3>
        <v-row align="center" justify="center" class="text-center">
          <v-col v-for="(service, j) in item.array" :key="j" cols="6" sm="4">
            <v-img height="80" contain :src="service.img"></v-img>
            <p class="text-overline font-weight-black">
              {{ service.name }}
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'HomeTools',
  data() {
    return {
      items: [
        {
          name: 'Client Side Tech',
          array: [
            {
              name: 'Html5',
              img: require('@/assets/images/tools/html5.webp'),
            },

            {
              name: 'Css3',
              img: require('@/assets/images/tools/css3.webp'),
            },

            {
              name: 'JavaScript (JS)',
              img: require('@/assets/images/tools/javascript.webp'),
            },
            {
              name: 'VueJS',
              img: require('@/assets/images/tools/vue.webp'),
            },

            {
              name: 'ReactJS',
              img: require('@/assets/images/tools/react.webp'),
            },
          ],
        },
        {
          name: 'Server Side Tech',
          array: [
            {
              name: 'php',
              img: require('@/assets/images/tools/php.webp'),
            },
            {
              name: 'Laravel',
              img: require('@/assets/images/tools/laravel.webp'),
            },
            {
              name: 'Python',
              img: require('@/assets/images/integrations/intercom.webp'),
            },
            {
              name: 'Django',
              img: require('@/assets/images/integrations/tawk.webp'),
            },
            {
              name: 'NodeJS',
              img: require('@/assets/images/tools/nodejs.webp'),
            },
          ],
        },
        {
          name: 'Databases',
          array: [
            {
              name: 'MySQL',
              img: require('@/assets/images/integrations/shiprocket.webp'),
            },
            {
              name: 'MongoDB',
              img: require('@/assets/images/tools/mongodb.webp'),
            },
          ],
        },
        {
          name: 'Deployment Server Stacks',
          array: [
            {
              name: 'Amazon Web Services (AWS)',
              img: require('@/assets/images/tools/aws.webp'),
            },
            {
              name: 'Google Cloud Platform (GCP)',
              img: require('@/assets/images/tools/googlecloud.webp'),
            },
            {
              name: 'Digital Ocean',
              img: require('@/assets/images/tools/digitalocean.webp'),
            },
          ],
        },
      ],
    }
  },
}
</script>
