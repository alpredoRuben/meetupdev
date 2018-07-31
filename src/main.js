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
import * as firebase from 'firebase'

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

const confbase = {
    apiKey: "AIzaSyALF7uMj2AJWxZxcP6Cmyz3RvT4i2v5Kfo",
    authDomain: "fbase-fc6a3.firebaseapp.com",
    databaseURL: "https://fbase-fc6a3.firebaseio.com",
    projectId: "fbase-fc6a3",
    storageBucket: "fbase-fc6a3.appspot.com",
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  created () {
      firebase.initializeApp(confbase)
  },
  template: '<App/>'

})
