
<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>

    <!-- 底部导航栏 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <img slot="icon" src="./assets/logo.png">
        <router-link to="/home">首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="./assets/logo.png">
        <router-link to="/find">发现</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="./assets/logo.png">
       <router-link to="/order">订单</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="./assets/logo.png">
       <router-link to="/mine">我的</router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      selected: '',
      tab: '首页',
    }
  },
}

</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.common {
  width: 100%;
  height: 100px;
  background-color: hotpink;
  line-height: 100px;
  font-size: 20px;
}
.container {
  /*margin-top: 40px;*/
}
.lbt img {
  width: 100%;
}
</style>
