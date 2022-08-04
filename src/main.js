import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import AsyncComputed from 'vue-async-computed'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import share from 'vue-shares'
Vue.use(share)
Vue.component('V-share',share)
Vue.use(ElementUI);
//国际化组件引入
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);
//创建国际化插件实例
// 所有的文字
// Ready translated locale messages
const messages = {
  en: {
    message: {
      login: 'login in',
      loginUp: 'login up',
      lang: 'Language',
      nickname: 'nickname',
      password:'password',
    }
  },
  zh: {
    message: {
      login: '登录',
      loginUp: '注册',
      lang: 'Language',
      nickname: "用户名",
      password:'密码',
    }
  }
}
//初始 国际化插件实例对象
const i18n = new VueI18n({
  locale: 'en',
  messages,
})

Vue.use(AsyncComputed)
Vue.prototype.axios=axios
Vue.config.productionTip = false

new Vue({
  router, 
  render: h => h(App),
  i18n//挂载i18n
}).$mount('#app')
