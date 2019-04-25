<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    //页面一加载，就获取从其他项目中传过来的token
    // let href_data=this.$href_data();
    // console.log(href_data);
    // if(href_data.token){
    //   console.log("我带token过来啦！")
    //   this.$store.commit("setToken",href_data.token);
    //   /* 现已在request。js中处理 */
    //   //给所有axios请求添加token
    //   // this.$ajax.defaults.headers.common['token']=this.href_data.token;
    // }

    // console.log(this.$store.state.token)
    
  }
}
</script>

<style>
*{
  margin:0;
  padding:0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
