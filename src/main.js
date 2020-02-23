import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'     // 样式需要单独引入
import '../static/global/global.css'
import '../static/global/gt.js'

import VueI18n from 'vue-i18n';
import { messages } from './components/common/i18n';
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zh',
  messages
});
// 调用插件
Vue.use(ElementUI);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})


