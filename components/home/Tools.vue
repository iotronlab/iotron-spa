<template>
  <v-col cols="12" lg="10" class="mx-auto">
    <v-row class="text-center" justify="center">
      <v-col v-for="(item, i) in items" :key="i" cols="12" lg="3">
        <h3 class="text-h6 font-weight-black mb-4 mt-2">{{ item.name }}</h3>
        <v-row justify="center" class="text-center" dark>
          <v-col v-for="(service, j) in item.array" :key="j" cols="6" sm="4"
            ><div class="box">
              <v-card class="pa-1 glass-morph rounded-lg">
                <v-img
                  height="100"
                  contain
                  :src="service.img"
                  :alt="service.name"
                ></v-img
              ></v-card>
            </div>
            <p class="text-body-2 text-uppercase font-weight-black mt-2">
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
              name: 'JavaScript',
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
              name: 'Digital Ocean',
              img: require('@/assets/images/tools/digitalocean.webp'),
            },
            {
              name: 'Google Cloud Platform (GCP)',
              img: require('@/assets/images/tools/googlecloud.webp'),
            },
          ],
        },
      ],
    }
  },
}
</script>
