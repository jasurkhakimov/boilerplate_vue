import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/styles/main.scss'

// uncomment if axios needed
// import axios from 'axios';

// install moment
// import moment from 'moment';


// const options = { auth: { id: store.state.user?.user?._id } }; //Options object to pass into SocketIO

// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: SocketIO(process.env.VUE_APP_SOCKET_URL, options), //options object is Optional
//     // vuex: {
//     //   store,
//     //   actionPrefix: "SOCKET_",
//     //   mutationPrefix: "SOCKET_"
//     // }
//   })
// );

// if moment in use
// moment.locale('ru')


// 401 handler
// axios.interceptors.response.use(
//   response => { return response; },
//   error => {
//     if (error.response.status === 401) {
//       // some code to handle unauth user
//     }
//   });

// set base url to api in env, then uncomment here and use global $http
// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
// Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
