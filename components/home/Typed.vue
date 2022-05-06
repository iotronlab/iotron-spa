<template>
  <section class="text-center">
    <h1 class="text-h4 text-sm-h3 mt-10 mt-lg-0">
      <b class="accent--text">ideas</b> that
      <!-- <span class="font-weight-black primary--text text"></span
      ><span class="cursor">_</span> -->
      <div class="text primary--text"></div>
    </h1>
    <h2 class="text-h3 text-md-h1 font-weight-black" style="position: relative">
      Progressive Web Agency~
    </h2>

    <h2 class="text-h6 mt-10">
      <span class="text-span">design </span>
      <span> <sup>feat.</sup></span>
    </h2>
    <h2 class="text-h3 text-md-h1 font-weight-black mt-2">Development.</h2>
  </section>
</template>

<script>
export default {
  name: 'HomeTyped',

  data() {
    return {
      // landingText: ['connect', 'evolve', 'dominate'],
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
  font-weight: 400;
  font-size: 8rem;
  font-display: swap;
  background: linear-gradient(
    -110deg,
    #02f4c8 10%,
    #41bbf6 30%,
    #41bbf6 70%,
    #02f4c8 80%
  );
  color: transparent;
  background-clip: text;
  padding-right: 1.5rem;
  animation: animated-text 10s linear infinite;
  background-size: 200% auto;
}
@keyframes animated-text {
  to {
    background-position: 200% center;
  }
}
</style>
