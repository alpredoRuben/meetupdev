// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import { store } from './store/data_store'
import DateFilter from './filter/datefilters'

Vue.use(Vuetify, {
    theme: {
        primary: colors.indigo.darken3,
        secondary: colors.blue.darken3,
        accent: colors.indigo.base,
        success: colors.teal.lighten1,
        info: colors.cyan.lighten1
    }
})

Vue.config.productionTip = false

Vue.filter('dateTemplate', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
