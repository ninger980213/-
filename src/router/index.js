import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HotSearch from "../../src/components/HotSearch.vue"
import PersonalCenter from '../../src/components/PersonalCenter.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/helloworldWorld'},
    {path: '/helloworld',component: HelloWorld},
    {path: '/hotsearch',component: HotSearch},
    {path: '/personalcenter',component: PersonalCenter}
  ]
})
