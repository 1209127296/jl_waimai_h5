import Vue from 'vue'
import store from './store/store'
import App from './App'
import fly from './fly/fly'
import imageUrl from './components/imageAdd'
import what from './components/splitArray'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// import Toast from 'vant'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$what=what
Vue.prototype.$store = store
Vue.prototype.$url = imageUrl
Vue.prototype.fly=fly //将fly实例挂在vue原型上
// Vue.use(Toast)

// window.onresize = setHtmlFontSize;

// function setHtmlFontSize() {
//   const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//   const htmlDom = document.getElementsByTagName('html')[0];
//   htmlDom.style.fontSize = htmlWidth / 7.5 + 'px';
// };
// setHtmlFontSize();

new Vue({
    el:'#app',
    router,
    template:'<App/>',
    components:{App}
})
