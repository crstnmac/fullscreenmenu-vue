<template>
  <body class="demo-menliani">
    <main>
      <section class="content">
        <nav class="menu menu--menliani">
          <a
            id="menuItem"
            @mouseenter="enter"
            @mouseleave="leave"
            class="menu__item"
            href="#"
          >
            <span class="menu__item-name">Artists</span>
            <span class="menu__item-label">Explore the portfolios</span>
          </a>

          <a class="menu__item" href="#">
            <span class="menu__item-name">Exhibitions</span>
            <span class="menu__item-label">Discover fascinating stories</span>
          </a>
          <a class="menu__item" href="#">
            <span class="menu__item-name">Schedule</span>
            <span class="menu__item-label">View our event calendar</span>
          </a>
          <a class="menu__item" href="#">
            <span class="menu__item-name">Mission</span>
            <span class="menu__item-label">Read our mission statement</span>
          </a>
          <a class="menu__item" href="#">
            <span class="menu__item-name">Contact</span>
            <span class="menu__item-label">Get in touch and find us</span>
          </a>
        </nav>
      </section>
    </main>
  </body>
</template>

<script>
import Vue from 'vue'
import VueAnime from '~/plugins/vue-anime.js'
import CharmingJS from '~/plugins/vue-charming.js'

Vue.use(VueAnime)
Vue.use(CharmingJS)

export default {
  mounted() {
    let name = this.$el.querySelector('.menu__item-name')
    this.$charmingJS(name)
    let nameLetters = Array.from(this.$el.querySelectorAll('span'))
  },
  methods: {
    enter(el, done) {
      this.mouseTimeout = setTimeout(() => {
        console.log('enter')
        this.isActive = true
        this.$animeJS.remove(this.nameLetters)
        this.$animeJS({
          targets: this.nameLetters,
          duration: 800,
          easing: [0.7, 0, 0.3, 1],
          scale: (t, i) => [1, this.$animeJS.random(0, 1) ? 0.8 : 1.4],
          translateX: (t, i) => {
            const elBounds = el.getBoundingClientRect()
            const x1 = elBounds.left + elBounds.width / 2
            const y1 = elBounds.top + elbounds / 2

            const targetBounds = t.getBoundingClientRect()
            const x2 = targetBounds.left + targetBounds.width / 2
            const y2 = targetBounds.top + targetBounds.height / 2

            const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

            const maxDist = Math.sqrt(
              Math.pow(elBounds.left - x1, 2) + Math.pow(elBounds.top - y1, 2)
            )

            const maxTx = x2 < x1 ? -250 : 250

            return (maxTx / maxDist) * dist
          },
          translateY: (t, i) => [0, this.$animeJS.random(-40, 40)],
          rotateZ: (t, i) => [0, this.anime.random(-20, 20)],
          opacity: (t, i) => 0.3
        })
      }, 50)
    },

    leave(el, done) {
      console.log('leave')
      clearTimeout(this.mouseTimeout)
      if (!this.isActive) return
      this.isActive = false
      this.$animeJS.remove(this.nameLetters)
      this.$animeJS({
        targets: this.nameLetters,
        duration: 800,
        easing: [0.7, 0, 0.3, 1],
        scale: 1,
        translateX: 0,
        translateY: 0,
        rotateZ: 0,
        opacity: 1
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
