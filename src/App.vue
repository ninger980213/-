<template>
  <div id="app">

    <router-view />
    <!--底部 -->
    <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">
    <router-link to="/helloworld">首页</router-link></van-tabbar-item>
 
  <van-tabbar-item icon="search" ><router-link to="/hotsearch">热搜</router-link></van-tabbar-item>
  <van-tabbar-item icon="friends-o"><router-link to="/personalcenter">我的</router-link></van-tabbar-item>

</van-tabbar>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "App",
  data() {
    return {
      flag: false,
          value: '',
          active:""
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
