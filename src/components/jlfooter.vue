<template>
  <van-tabbar v-model="active"   @change="onChange">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="cart-o" >订单</van-tabbar-item>
    <van-tabbar-item icon="friends-o" >我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    name: "jlfooter",
    data(){
      return {
        active: 0
      }
    },
    props:{
      index:{
        default:0
      }
    },
    beforeMount(){
     this.active =  this.$router.history.current.query.index
    },
    methods:{
      onChange(event) {
        console.log(event);
        let path="";
        switch (event) {
          case  0:
            path="index";
            break;
          case 1:
            path="order"
            break;
          case 2:
            path="user";
            break;
        }
        this.$router.replace({
          path:path,
          query:{
            index:event
          }
        })
      },
    }
  };
</script>

<style scoped>

</style>
