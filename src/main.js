// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



//引入vant
import {Tabbar,TabbarItem} from 'vant';
import { Search } from 'vant';

Vue.use(Search);

Vue.config.productionTip = false
Vue.use(Tabbar);
Vue.use(TabbarItem);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
