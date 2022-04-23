<template>
  <section class="text-center text-lg-right">
    <h1 class="text-h3">
      <span class="accent--text landing-header">ideas</span>
      <span class="landing-header">that</span><br />
      <!-- <span class="font-weight-black primary--text text"></span
      ><span class="cursor">_</span> -->
    </h1>
    <div class="text text-h3 primary--text"></div>
    <h2
      class="text-h3 mt-16 font-weight-black"
      style="z-index: 1000 !important"
    >
      Progressive Web Agency<span class="text-h6"> where</span>
    </h2>

    <h3 class="text-h6 mt-12">
      <span class="text-span">design</span>
      meets
      <br />
      <br />
      <span class="text-h3 text-md-h2">Development.</span>
    </h3>
  </section>
</template>

<script>
export default {
  name: 'HomeTyped',

  data() {
    return {
      landingText: ['connect', 'evolve', 'dominate'],

      items: [
        {
          title: 'Enterprise Systems Design and Development',
          text: `Applications to manage, regulate or automate at various levels of the business process and aftersales.
        As <strong><i>modern enterprises</i></strong> have become more complex with more problems and people to deal with,
        it is important to integrate the latest technologies into the system in order to <span class="success--text">
        optimize</span> the business at every level.`,
          subtext: 'Newly released songs. Updated daily.',
          services: ['Enterprise Resource Management'],
          // img: require('~/assets/img/program.svg'),
        },
        {
          title: 'Progressive Web Application Development',
          text: `Applications varying from portfolio,
        forums to eCommerce, make your presence
        felt on the web.`,
          subtext: 'Newly released songs. Updated daily.',

          // img: require('~/assets/img/seo.svg'),
        },
        {
          title: 'Native Application Development',
          text: 'Native Android, Windows and iOS application development, ready to be uploaded on the play store/app store.',
          subtext: 'Lose yourself in rock tunes.',
          // img: require('~/assets/img/mobile.svg'),
        },
        {
          title: 'AI/Automation Based Solutions',
          text: 'Application to engage users with chatbot, or use analytics to make sense of the generated data.',
          subtext: 'Chill beats to mellow you out.',

          //  img: require('~/assets/img/aicard.svg'),
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }
  },

  mounted() {
    this.typeLandingText()
  },

  methods: {
    typeLandingText() {
      // const gsap = this.$gsap
      // gsap.to('.cursor', {
      //   opacity: 0,
      //   x: 100,
      //   ease: 'power2.inOut',
      //   repeat: -1,
      // })
      // const masterTl = gsap.timeline({ repeat: -1 })
      // this.landingText.forEach((word) => {
      //   const tl = gsap.timeline({
      //     repeat: 1,
      //     yoyo: true,
      //     repeatDelay: 1,
      //     ease: 'power2.inOut',
      //   })
      //   tl.to('.landing-text', { duration: 1, text: word })
      //   masterTl.add(tl)
      // })
      class TextScramble {
        constructor(el) {
          this.el = el
          this.chars = '!<>-_\\/[]{}—=+*^?#________'
          this.update = this.update.bind(this)
        }

        setText(newText) {
          const oldText = this.el.innerText
          const length = Math.max(oldText.length, newText.length)
          const promise = new Promise((resolve) => (this.resolve = resolve))
          this.queue = []
          for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
          }
          cancelAnimationFrame(this.frameRequest)
          this.frame = 0
          this.update()
          return promise
        }

        update() {
          let output = ''
          let complete = 0
          for (let i = 0, n = this.queue.length; i < n; i++) {
            let { char } = this.queue[i]
            const { from, to, start, end } = this.queue[i]
            if (this.frame >= end) {
              complete++
              output += to
            } else if (this.frame >= start) {
              if (!char || Math.random() < 0.28) {
                char = this.randomChar()
                this.queue[i].char = char
              }
              output += `<span>${char}</span>`
            } else {
              output += from
            }
          }
          this.el.innerHTML = output
          if (complete === this.queue.length) {
            this.resolve()
          } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
          }
        }

        randomChar() {
          return this.chars[Math.floor(Math.random() * this.chars.length)]
        }
      }

      const phrases = ['Connect', 'Dominate', 'Evolve']

      const el = document.querySelector('.text')
      const fx = new TextScramble(el)

      let counter = 0
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 1500)
        })
        counter = (counter + 1) % phrases.length
      }

      next()
    },
  },
}
</script>

<style scoped>
.text-span {
  font-family: Charmonman, cursive;
  font-style: italic;
  font-weight: 700;
  font-size: 8rem;
  font-display: swap;
  background-color: #02f4c8;
  background-image: linear-gradient(-133deg, #41bbf6, #02f4c8);
  color: transparent;
  background-clip: text;
  padding-right: 1.6rem;

  /* animation: animated-text 10s infinite alternate-reverse; */
  z-index: 10 !important;

  /* -webkit-background-clip: text; */
}
@keyframes animated-text {
  from {
    filter: hue-rotate(0deg);
  }

  to {
    filter: hue-rotate(-360deg);
  }
}
</style>
