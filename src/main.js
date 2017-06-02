// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

//使用mint-ui框架 
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
//使用mint-ui
Vue.use(Mint);
//引入需要的组件
import { Header, Swipe, SwipeItem, Tabbar, TabItem} from 'mint-ui';
//注册组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

//引入mui框架
import "./assets/dist/css/mui.min.css";


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
