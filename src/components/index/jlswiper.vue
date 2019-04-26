<template>
  <div >
    <van-swipe
      indicator-color="#34AAFF"
    >
      <van-swipe-item v-for="(value,index) in mySwiper" :key="index">
        <img @click="goWeb(value.url)" :src="url+value.image" class="swiper-item"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name: "jlswiper",
    props:{
      mySwiper:Array
    },
    methods: {
      goWeb(url) {
        console.log(this.mySwiper)
        if (url.length > 0) {
          this.$router.push({
            path:"web",
            query:{
              url:encodeURI(url)
            }
          })
        } else {
          console.log("url is null");
        }
        ;

      }
    },
    data(){
      return {
        url:this.$url
      }
    }
  };
</script>

<style scoped>
  .swiper-item{
    display: inline-block;
    width: 100%;
    height: 160px;
  }
</style>
