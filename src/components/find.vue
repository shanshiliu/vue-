<template>
  <div class="find">
    <!-- 使用mint-ui 做固定导航栏头部 -->
    <mt-header title="发现">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
        <router-link to="/setting" slot="right">
          <mt-button icon="more"></mt-button>
        </router-link>
    </mt-header>   
  </div>
</template>

<script>
export default {
  name: 'find',
  data () {
    return {
      msg: '最流行的vue技术，你值得拥有'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
