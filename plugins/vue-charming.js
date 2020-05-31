import charming from 'charming'

const CharmingJS = {
  install(Vue, options) {
    Vue.prototype.$charmingJS = charming
  }
}

export default CharmingJS
