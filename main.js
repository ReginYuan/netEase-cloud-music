import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
Vue.prototype.serverUrl = "http://127.0.0.1:3000";
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createApp
} from 'vue'
const app = createApp(App)
// 将参数挂载到 Vue 实例的全局配置对象上
app.config.globalProperties.serverUrl = "http://127.0.0.1:3000";
app.mount("#app")
// #endif