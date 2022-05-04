<template>
  <v-col cols="12" lg="10" class="mx-auto">
    <v-row class="text-center" justify="center">
      <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6" md="6">
        <v-card class="glass-morph pa-1 rounded-xl fill-height" light>
          <h3 class="text-h6 font-weight-black mb-4 mt-2">{{ item.name }}</h3>
          <v-row no-gutters justify="center" class="text-center" dark>
            <v-col v-for="(service, j) in item.array" :key="j" cols="6" sm="4">
              <v-img height="80" contain :src="service.img"></v-img>
              <p class="text-subtitle-1 font-weight-black mx-2">
                {{ service.name }}
              </p>
            </v-col>
          </v-row>
        </v-card>
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
          name: 'Design Tools',
          array: [
            {
              name: 'Figma',
              img: require('@/assets/images/tools/figma.webp'),
            },

            {
              name: 'Adobe XD',
              img: require('@/assets/images/tools/xd.webp'),
            },
          ],
        },
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
              img: require('@/assets/images/tools/python.webp'),
            },
            {
              name: 'Django',
              img: require('@/assets/images/tools/django.webp'),
            },
            {
              name: 'NodeJS',
              img: require('@/assets/images/tools/nodejs.webp'),
            },
            {
              name: 'ExpressJS',
              img: require('@/assets/images/tools/express.webp'),
            },
          ],
        },
        {
          name: 'Databases',
          array: [
            {
              name: 'MySQL',
              img: require('@/assets/images/tools/sql.webp'),
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
