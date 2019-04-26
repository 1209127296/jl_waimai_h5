<template>
    <!-- <div class="mySearch" @click="toUrl('/pages/search/main?isSearch=1')">
        <div class="myIconBox">
          <van-icon name="search" class="myIcon" />
        </div>
        <div class="input">
          <input type="text" placeholder="请输入搜索关键字">
        </div>
    </div> -->
    <div @click="toUrl">
      <van-search
        placeholder="请输入搜索关键词"
        use-action-slot
        background="#ffffff"
      >
        <!-- <view slot="action" @search="serach" @click="serach">搜索</view> -->
      </van-search>
    </div>
</template>

<script>
  export default {
    name: "MySearch",
    methods:{
      toUrl:function() {
        this.$router.push({
          path:"search",
          query:{
            isSearch:1
          }
        })
      }
    }
  };
</script>

<style scoped>
  .mySearch{
    display: flex;
    background-color: white;
    padding: 5px 10px 3px 10px;
    border-radius: 3px;
  }
  .myIconBox{
    color: #767676;
    margin-right: 10px;
    padding-top: 7px;
    font-size: 14px
  }
  .input input{
    margin: auto 0;
    font-size: 14px;
  }
</style>
