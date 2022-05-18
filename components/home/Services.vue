<template>
  <v-col cols="12" lg="10" class="mx-auto mt-lg-n16">
    <h1 class="text-h4 text-center">Our services</h1>
    <v-row no-gutters>
      <v-col cols="12" lg="6"
        ><h2 class="text-h4 quote" style="overflow: hidden">
          Our Diverse Solutions covering the diverse needs of a Modern Business.
        </h2></v-col
      >
      <v-col cols="12" lg="6">
        <h2
          v-for="(item, i) in items"
          :key="i"
          class="text-h5 text-lg-h4 primary--text my-4"
        >
          {{ item.title }}
        </h2>
      </v-col>
    </v-row>

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
      ],
    }
  },
  mounted() {
    this.textAnimate()
  },
  methods: {
    textAnimate() {
      const quotes = document.querySelectorAll('.quote')
      const gsap = this.$gsap
      const SplitText = this.$SplitText
      const ScrollTrigger = this.$ScrollTrigger
      function setupSplits() {
        quotes.forEach((quote) => {
          // Reset if needed
          if (quote.anim) {
            quote.anim.progress(1).kill()
            quote.split.revert()
          }

          quote.split = new SplitText(quote, {
            type: 'lines,words,chars',
            linesClass: 'split-line',
          })

          // Set up the anim
          quote.anim = gsap.from(quote.split.chars, {
            scrollTrigger: {
              trigger: quote,
              toggleActions: 'restart pause resume reverse',
              start: 'top 90%',
            },
            duration: 0.6,
            ease: 'circ.out',
            y: 80,
            stagger: 0.02,
          })
        })
      }

      ScrollTrigger.addEventListener('refresh', setupSplits)
      setupSplits()
    },
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
