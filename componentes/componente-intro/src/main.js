import Vue from 'vue'
import App from './App.vue'
//importando o componente
import Contadores from './Contadores.vue'

Vue.config.productionTip = false
//registrando o componente globalmente para ser chamado em outro local da aplicação
Vue.component('app-contadores', Contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
