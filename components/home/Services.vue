<template>
  <v-col cols="12" lg="10" class="mx-auto pa-0">
    <h1 class="overline">Our services</h1>

    <h2 class="text-h4">
      Our Diverse Solutions covering the diverse needs of a Modern Business.
    </h2>
    <v-divider class="my-2" />

    <v-row no-gutters justify="center">
      <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6" class="pa-1">
        <v-card :class="{ 'on-hover': hover }" rounded="xl">
          <!-- <div class="d-flex justify-center pa-2">
                <ServicesAnimation :svg="item.img" />
              </div> -->

          <v-card-title
            class="text-h5 font-weight-black primary--text"
            style="word-break: normal"
          >
            {{ item.title }}
          </v-card-title>
          <v-card-text class="text-body-1">
            <p v-html="item.text"></p>
            <ul class="font-weight-bold">
              <li v-for="(service, i) in item.services" :key="i">
                {{ service }}
              </li>
            </ul>

            <!-- <v-btn
                  class="mt-6"
                  rounded
                  color="accent"
                  :class="{ 'on-hover': hover }"
                  outlined
                >
                  <v-icon left> mdi-phone-message </v-icon> Drop an inquiry
                </v-btn> -->
            <v-btn class="nucard mt-4" text color="accent" rounded
              >Get a Quote</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
      <!-- <v-col
        cols="12"
        md="6"
        class="d-flex justify-center pa-10"
        :order-sm="i % 2 == 1 ? 'first' : null"
      >
        <v-img max-height="500" contain :src="item.img"></v-img>
      </v-col> -->
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'HomeServives',
  data() {
    return {
      items: [
        {
          title: 'UI/UX Design',
          text: `Our UI/UX Design team creates an <strong class="accent--text">interactive prototype</strong> of your application through a five-step process that repeats itself until we achieve perfection.
          We work on softwares like <strong class="primary--text">Adobe XD, FIGMA</strong> and with Design Systems like <strong class="accent--text">Material Design (Google), Fluent (Microsoft), HIG (Apple)</strong>
          to design applications that seamlessly adapt to your target platform.`,
          services: [
            'Product Definition',
            'Product Research',
            'User Analysis',
            'Prototype Design',
            'Prototype Validation',
          ],
          tools: [
            {
              name: 'Adobe XD',
              img: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 240 234">
  <path fill="#470137" d="M43 0h155c23 0 42 19 42 43v149c0 23-19 42-42 42H43c-24 0-43-19-43-42V43C0 19 19 0 43 0z"/>
  <path fill="#ff61f6" d="m126 62-30 49 32 53v1h-24l-3-1-6-13-7-12-7-13h-1l-6 13-7 12-7 13-2 1H35v-1l31-51-30-52v-1h25l1 1 6 13 7 13 7 12a388 388 0 0 1 14-25l6-13 1-1h22l2 1-1 1zm46 105c-7 0-14-1-21-4-6-3-12-8-15-14-4-6-6-14-6-23a41 41 0 0 1 22-36 51 51 0 0 1 27-6h3V52l1-1h21l1 1v107l-1 2a76 76 0 0 1-32 6zm10-20v-44h-3l-3-1c-4 0-8 1-11 3l-9 7c-2 3-3 8-3 13l2 10 4 7c2 2 4 4 7 4l8 2a54 54 0 0 0 8-1z"/>
</svg>`,
            },
            {
              name: 'Figma',
              img: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 288 432">
  <path d="M1 2h285v429H1z"/>
  <path fill="#1ABCFE" d="M144 216a71 71 0 0 1 143 0 71 71 0 0 1-143 0Z"/>
  <path fill="#0ACF83" d="M1 359c0-40 32-72 72-72h71v72a71 71 0 0 1-143 0Z"/>
  <path fill="#FF7262" d="M144 2v143h71a71 71 0 1 0 0-143h-71Z"/>
  <path fill="#F24E1E" d="M1 73c0 40 32 72 72 72h71V2H73C33 2 1 34 1 73Z"/>
  <path fill="#A259FF" d="M1 216c0 39 32 71 72 71h71V145H73c-40 0-72 32-72 71Z"/>
</svg>`,
            },
          ],
          img: require('@/assets/images/services/uiux.svg'),
        },
        {
          title: 'Websites/Progressive Web Applications',
          text: `Progressive Web Apps(PWA) are suitable for applications aiming to <strong class="accent--text">co-exist</strong> on the <strong class="primary--text">web</strong>
          and native platforms like <strong class="primary--text">Android, Windows, and iOS</strong>. Applications may vary from simple systems like portfolios, blogs to more complex systems like social media,
          online stores, eCommerce, CMS, video conferencing, etc. We listed some of the tech stacks used in our applications below.`,
          services: [
            'MERN (React JS)',
            'MEVN (Vue JS)',
            'JAMSTACK (API)',
            'LAMP (Laravel)',
            'Python (Django)',
          ],
          img: require('@/assets/images/services/pwa.svg'),
        },
        {
          title: 'Enterprise Resource Planning (ERP)',
          text: `Applications to <strong class="accent--text">manage, regulate or automate</strong> at various levels of the <strong class="primary--text">business process</strong> and
          <strong class="primary--text">after-sales</strong>.
        As <strong class="primary--text"><i>modern enterprises</i></strong> have become more complex with more problems and people to deal with,
        it is important to integrate the latest technologies into the system in order to <span class="accent--text">
        optimize</span> the business at every level.`,
          services: [
            'Accounting and Financial Management (AFM)',
            'Customer Relationship Management (CRM)',
            'Supplier Relationship Management (SRM)',
            'Business Intelligence (BI)',
            'Human Resources (HR)',
            'Product Lifecycle Management (PLM)',
            'Supply Chain Management (SCM)',
          ],
          img: require('@/assets/images/services/erp.svg'),
        },

        {
          title: 'AI Based Solutions',
          text: `We use Artificial Intelligence (AI) and Machine Learning (ML) to <strong class="accent--text">automate repetitive tasks, better organize business processes,
          and build a personalized customer experience</strong>. Get that edge in innovation to differentiate from the competition. Proven solutions to boost
          sales through <strong class="primary--text">customer engagement, AI assisted search, and feedback analysis</strong>. We work on technologies like <strong class="accent--text">PyTorch, Tensorflow</strong> to build neural networks.`,
          services: [
            'AI Chatbot',
            'Voice Search',
            'Image Search',
            'Customer Behavior Analysis',
            'Customer Feedback Analysis (NLP)',
          ],
          img: require('@/assets/images/services/ai.svg'),
        },
        {
          title: 'Third Party Integrations',
          text: `Our applications can be <strong class="accent--text">integrated</strong> with any <strong class="primary--text">third party API</strong> service to provide seamless synchronization across
          all your services. Add the power of the open web to your application. Some of the API services we have worked on`,
          services: [
            'Razorpay',
            'PayU Money',
            'Paytm',
            'Paypal',
            'Stripe',
            'Shiprocket',
            'Slack',
            'Discord',
            'Google Drive',
            'Firebase',
          ],
          img: ` <svg
    xmlns="http://www.w3.org/2000/svg"
    xml:space="preserve"
    viewBox="0 0 496 496"
  >
    <linearGradient
      id="a"
      x1="248"
      x2="248"
      y1="766"
      y2="270"
      gradientTransform="translate(0 -270)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stop-color="#9f2fff" />
      <stop offset="1" stop-color="#0bb1d3" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M480 0H16C7.2 0 0 7.2 0 16v368h120c0 8.8 7.2 16 16 16h17.9c1.6 5.2 4.2 10 7.7 14.2l30.7 35.8c2.3 2.6 4.8 4.9 7.7 6.8V496h96v-39.1c2.8-1.9 5.4-4.2 7.7-6.8l30.7-35.8c3.5-4.2 6.1-9 7.7-14.2H360c8.8 0 16-7.2 16-16h120V16c0-8.8-7.2-16-16-16zm0 16v48H16V16h464zM136 384v-48h16v48h-16zm64-48c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm21.4 80h53.2l11.3 28.3c-3.8 2.4-8.1 3.7-12.6 3.7h-50.6c-4.5 0-8.8-1.3-12.6-3.7l11.3-28.3zm66.6-72c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-72 119.4c2.2.4 4.5.6 6.7.6H240v16h-24v-16.6zm64 16.6h-24v-16h17.3c2.3 0 4.5-.2 6.7-.6V480zm48-91.8c0 5.7-2.1 11.3-5.8 15.6l-24.1 28.1-9.9-24.9 6.9-48.2c12.6-4 19.5-17.4 15.6-30s-17.4-19.5-30-15.6c-12.6 4-19.5 17.4-15.6 30 2.2 6.8 7.3 12.3 13.9 15l-6 41.8h-50.1l-6-41.8c12.4-4.9 18.5-18.9 13.6-31.3-4.9-12.4-18.9-18.5-31.3-13.6s-18.5 18.9-13.6 31.3c2.7 6.8 8.3 12 15.2 14.1l6.9 48.2-9.9 24.8-24.1-28.1c-3.7-4.3-5.8-9.9-5.8-15.6v-92c.1-17.2 11.1-32.4 27.5-37.8l15.1 37.8h74.8l15.1-37.8c16.3 5.4 27.4 20.6 27.5 37.8v92.2zM284.2 256l-9.6 24h-53.2l-9.6-24h72.4zM360 384h-16v-48h16v48zm-16-64v-24c0-30.9-25.1-56-56-56h-32V112h192v224h-72c0-8.8-7.2-16-16-16h-16zm32 48v-16h88V96H240v144h-32c-30.9 0-56 25.1-56 56v24h-16c-8.8 0-16 7.2-16 16v32H16V80h464v288H376zM48 48H32V32h16v16zm32 0H64V32h16v16zm32 0H96V32h16v16zM66.3 157.7 36.7 128l29.6-29.7 11.3 11.3L59.3 128l18.4 18.3-11.4 11.4zm112-11.4 18.4-18.3-18.4-18.3 11.3-11.3 29.6 29.7-29.6 29.7-11.3-11.5zm-72.6 15.4-11.3-11.3 52-52 11.3 11.3-52 52zM32 176h192v16H32v-16zm0 32h192v16H32v-16zm0 32h16v16H32v-16zm32 0h16v16H64v-16zm32 0h16v16H96v-16zm336-96H272v-16h160v16zm-88 32h-72v-16h72v16zm16-16h72v16h-72v-16zm72 48H272v-16h160v16zm-80 32h80v16h-80v-16zm80 48h-80v-16h80v16z"
      opacity=".1"
    />
  </svg>`,
        },
      ],
    }
  },
}
</script>

<style scoped>
/* .v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.v-card.on-hover {
  background-image: linear-gradient(
    135deg,
    #6a30d1 0%,
    #5c83e3 100%
  ) !important;
}

.v-btn {
  box-shadow: 0 0 10px 0 rgba(178 255 89 80%) !important;
  transition: all 0.3s ease 0s;
}

.v-btn.on-hover {
  letter-spacing: 0.15em;
  color: greenyellow;
}

.show-btns {
  color: rgba(255 255 255 100%) !important;
} */
</style>
