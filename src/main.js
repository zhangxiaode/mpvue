import Vue from 'vue'
import App from './App'
import vnode2Canvas from 'vnode2Canvas'
Vue.use(vnode2Canvas)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
