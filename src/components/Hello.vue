<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>学不会，不要钱</h2>
    <ul>
      <router-link to='/hi'>快上车</router-link>
      <li><a href="http://localhost:8080/#/hi" target="_self">快上车</a></li>
      <li><a href="http://localhost:8080/#/hi" target="_blank">跟党走</a></li>
      <!-- <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li> -->
      <!-- <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li> -->
      <br>
      <!-- <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li> -->
    </ul>
    <h2>开始学习</h2>
    <ul>
      <li>红鲤鱼</li>
      <li>绿鲤鱼</li>
      <li>与驴</li>
    </ul>
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
