<template>
  <div class="hello">
    <!-- 使用mint-ui 做固定导航栏头部 -->
    <mt-header fixed title="首页">
    </mt-header>
    <!-- <h1>{{ msg }}</h1> -->
    <div class="lbt">
      <!-- mint-ui轮播图 -->
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../assets/1.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/2.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/3.jpg"></mt-swipe-item>
      </mt-swipe>
      <!-- mui的九宫格 -->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">美食</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">电影</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">娱乐</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">头条</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">搜索</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">外卖</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                        <span class="mui-icon mui-icon-gear"></span>
                        <div class="mui-media-body">推荐</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                        <span class="mui-icon mui-icon-info"></span>
                        <div class="mui-media-body">旅游</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
               <a href="#">
                        <span class="mui-icon mui-icon-more"></span>
                        <div class="mui-media-body">更多</div></a></li>
            </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '最流行的vue技术，你值得拥有'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lbt {
  width: 100%;
  height: 300px;
  margin-top: 40px;
}
.mui-table-view-cell a {
  color: rgb(38,162,255);
}
.mui-table-view-cell a:hover {
  color: red;
}

</style>
