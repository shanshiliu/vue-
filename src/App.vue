
<template>
  <div id="app">
    <!-- 使用mint-ui 做固定导航栏头部 -->
    <mt-header fixed title="首页"></mt-header>
    <div class="lbt">
      <!-- mint-ui轮播图 -->
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="./assets/1.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="./assets/2.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="./assets/3.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div v-if="selected=='tab1'">
      首页的内容
      <router-view></router-view>
    </div>
    <div v-if="selected=='tab2'">  
    </div>
    <div v-if="selected=='tab3'">
      tab栏效果
    </div>
    <div v-if="selected=='tab4'">
      
    </div>

    <!-- 导航栏 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <img slot="icon" src="./assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="./assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="./assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="./assets/logo.png">
        我的
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
.lbt {
  margin-top: 40px;
  height: 300px;
  width: 100%;
  background-color: yellowgreen;
}
.lbt img {
  width: 100%;
}
</style>
