<template>
  <section class="text-center">
    <h1 class="text-h4 text-sm-h3 mt-10 mt-lg-0">
      <span> <b class="accent--text">ideas</b> that</span>
      <br />
      <span class="font-weight-black accent--text landing-text">connect</span>
      <!-- <div class="text primary--text"></div> -->
    </h1>

    <h1 class="text-h3 text-md-h1 font-weight-black" style="position: relative">
      <span>Progressive</span> <span> Web Agency~</span>
    </h1>

    <h1 class="text-h6 mt-10">
      <span class="text-span">design </span>
      <span> <sup>feat.</sup></span>
      <br />
      <span class="text-h3 text-md-h1 font-weight-black mt-2"
        >Development.</span
      >
    </h1>
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
  computed: {
    gsap() {
      return this.$gsap
    },
  },

  mounted() {
    setTimeout(() => {
      this.typeLandingText()
      this.revealAnimations()
    }, 500)
  },
  methods: {
    revealAnimations() {
      const gsap = this.gsap
      const tl = gsap.timeline({ default: { duration: 2 } })
      tl.to('h1 span', { opacity: 1, stagger: 0.5 })
    },

    typeLandingText() {
      const gsap = this.gsap

      // gsap.to('.cursor', {
      //   opacity: 0,
      //   x: 100,
      //   ease: 'power2.inOut',
      //   repeat: -1,
      // })

      //  const SplitText = this.$SplitText

      const landingText = ['connect', 'evolve', 'dominate']
      const masterTl = gsap.timeline({ repeat: -1 })
      landingText.forEach((word) => {
        //  const split = new SplitText(word, { type: 'chars' })
        const tl = gsap.timeline({
          repeat: 1,
          yoyo: true,
          repeatDelay: 1,
          ease: 'power2.inOut',
        })
        // tl.from(split.chars, {
        //   opacity: 0,
        //   y: 50,
        //   ease: 'back(4)',
        //   stagger: {
        //     from: 'end', // try "center" and "edges"
        //     each: 0.05,
        //   },
        // })
        tl.to('.landing-text', {
          duration: 3,
          rotationY: 360,
          ease: 'back(2)',
          stagger: { amount: 1, ease: 'power2.in' },
          scrambleText: {
            text: word,
            chars: '!<>-_\\/[]{}—=+*^?#',
            newClass: 'primary--text',
            revealDelay: 0.5,
            tweenLength: false,
          },
        })
        masterTl.add(tl)
      })
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

h1 span {
  opacity: 0;
}
</style>
