<template>
  <body class="demo-menliani">
    <main>
      <section class="content">
        <nav class="menu menu--menliani">
          <a
            @mouseenter="enter(key)"
            @mouseleave="leave(key)"
            class="menu__item"
            ref="menuitem"
            href="#"
            v-for="(item, key) in items"
            :key="key"
          >
            <span class="menu__item-name" v-lettering="{ tagName: 'span' }">{{
              item.name
            }}</span>
            <span class="menu__item-label">{{ item.label }}</span>
          </a>
        </nav>
      </section>
    </main>
  </body>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Artists',
          label: 'Explore the portfolios'
        },
        { name: 'Exhibitions', label: 'Discover fascinating stories' },
        { name: 'Schedule', label: 'View our event calendar' },
        { name: 'Mission', label: 'Read our mission statement' },
        { name: 'Contact', label: 'Get in touch and find us' }
      ]
    }
  },
  mounted() {
    // console.log(this.$refs.menuitem[this.items.index])
  },

  methods: {
    enter(key) {
      this.nameLetters = this.$refs.menuitem[key].querySelectorAll('.vl__g')
      this.mouseTimeout = setTimeout(() => {
        console.log('enter')
        this.isActive = true
        this.$anime.remove(this.nameLetters)
        this.$anime({
          targets: this.nameLetters,
          duration: 800,
          easing: 'cubicBezier(0.7, 0, 0.3, 1)',
          scale: (t, i) => [1, this.$anime.random(0, 1) ? 0.8 : 1.4],
          translateX: (t, i) => {
            const elBounds = this.$el.getBoundingClientRect()
            // console.log(elBounds)
            const x1 = elBounds.left + elBounds.width / 2
            const y1 = elBounds.top + elBounds.height / 2

            const targetBounds = t.getBoundingClientRect()
            // console.log(targetBounds)
            const x2 = targetBounds.left + targetBounds.width / 2
            const y2 = targetBounds.top + targetBounds.height / 2

            const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
            const maxDist = Math.sqrt(
              Math.pow(elBounds.left - x1, 2) + Math.pow(elBounds.top - y1, 2)
            )
            const maxTX = x2 < x1 ? -250 : 250

            return (maxTX / maxDist) * dist
          },

          translateY: (t, i) => [0, this.$anime.random(-40, 40)],
          rotateZ: (t, i) => [0, this.$anime.random(-20, 20)],
          opacity: (t, i) => 0.3
        })
      }, 50)
    },

    leave(key) {
      this.nameLetters = this.$refs.menuitem[key].querySelectorAll('.vl__g')
      console.log('leave')
      clearTimeout(this.mouseTimeout)
      if (!this.isActive) return
      this.isActive = false
      this.$anime.remove(this.nameLetters)
      this.$anime({
        targets: this.nameLetters,
        duration: 800,
        easing: 'cubicBezier(0.7, 0, 0.3, 1)',
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

<style></style>
