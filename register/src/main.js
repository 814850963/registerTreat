// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import  VueQuillEditor from 'vue-quill-editor'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animate from 'animate.css';
import {WOW} from 'wowjs';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import qs from 'qs';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.prototype.$qs = qs;
new WOW({live: false}).init();
Vue.config.productionTip = false
Vue.use(animate);
Vue.use(Mint);
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.use(VueQuillEditor)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})



