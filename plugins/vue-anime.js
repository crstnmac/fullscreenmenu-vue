import anime from 'animejs'

const VueAnime = {
  install(Vue, options) {
    Vue.prototype.$animeJS = anime
  }
}

export default VueAnime
