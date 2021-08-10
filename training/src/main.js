import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import axios from './axios'
import Vuex from 'vuex'
import Element from 'element-ui';
import createPersistedState from "vuex-persistedstate"
const on = Vue.prototype.$on
import lottie from 'vue-lottie';




Vue.prototype.$axios = axios
Vue.prototype.$bus = new Vue()
Vue.component('lottie', lottie)
Vue.use(Vuex)
Vue.use(Element);
Vue.prototype.$on = function (event, func) {
  let timer
  let newFunc = func
  if (event === 'click') {
    newFunc = function () {
      clearTimeout(timer)
      timer = setTimeout(function () {
        func.apply(this, arguments)
      }, 500)
    }
  }
  on.call(this, event, newFunc)
}

const store = new Vuex.Store({
  state:{
    login:false,
    name:'',
    item:'',
    screenWidth:false,
    flag:true
  },
  mutations:{
    addItem(state,payload){
      state.item = payload.item
    },
    changeStatus(state,payload){
      state.login = payload.login
      state.name = payload.name
    },
    clearStatus(state){
      state.login = false
      state.name = null
    },
    changeScreen(state){
      state.screenWidth = true
    },
    clearScreen(state){
      state.screenWidth = false
    },
    changeFlag(state){
      state.flag = false
    }
  },
  plugins: [createPersistedState({
    reducer(state) {
      return {
        // 只储存state中的token
        login: state.login,
        name:state.name,
        item:state.item,
        screenWidth:state.screenWidth,
        flag:state.flag
        
      }
    }
  })]
})

Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(App),
  router,
  store:store
}).$mount('#app')

