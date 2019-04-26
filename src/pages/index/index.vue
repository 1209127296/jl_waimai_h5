<template>
  <div>
    <jlheader></jlheader>
    <div class="content">
      <div class="categoryBox">
        <category :categoryData="categoryData"></category>
      </div>
      <div class="swiperBox">
        <jlswiper :mySwiper="mySwiper"></jlswiper>
      </div>

      <div class="shopListBox">
        <shopList :storelist="storelist"></shopList>
      </div>
      <van-dialog :show="newDefaultAddress" 
      message="最后一步啦！请保存一个默认的收获地址就可以开始点餐啦"
      confirmButtonText="新建收货地址"
      @close="onClose"
      async-close
      >
      </van-dialog>
      <!--<van-button type="primary" open-type="getUserInfo" lang="zh_CN" @getuserinfo="bindGetUserInfo">用户授权
      </van-button>
      <van-button type="primary" @click="getopenid">openid获取</van-button>
      <van-button type="primary" @click="login">微信登录</van-button>
      <van-button type="primary" @click="dumpUser">打印用户</van-button>
      <van-button type="primary" @click="checkAuth">检查授权</van-button>
      <van-button type="primary" @click="authDialog = true">打开授权提示</van-button>
      <van-button type="primary" @click="callPay">微信支付</van-button>
      <van-button type="primary" @click="cart">购物车</van-button>-->
      <div style="height: 2rem"></div>
    </div>
    
    <div class="iAmAbox"></div>
    
    <jlfooter></jlfooter>
  </div>
</template>

<script>
  import jlfooter from "@/components/jlfooter";
  import jlheader from "@/components/index/jlheader";
  import category from "@/components/index/category";
  import shopList from "@/components/index/shopList";
  import jlswiper from "@/components/index/jlswiper";

  export default {
    data() {
      return {
        mySwiper: new Array({ src: "" }),
        userInfo: {},
        categoryData: [],//分类的数组
        storelist: [],//商铺列表
        authDialog: false,
        wxuserinfo:{},
        aaa:'bbb',
        getPhone:false,
        userPhone:"",
        newDefaultAddress:false
      };
    },
    components: { jlfooter, jlheader, category, shopList, jlswiper },
    methods: {
      // callPay() {
      //   this.fly.get("/wxapp/pay/callpay?order_num=").then((res) => {
      //     wx.requestPayment(
      //       {
      //         "timeStamp": res.data.timeStamp,
      //         "nonceStr": res.data.nonceStr,
      //         "package": res.data.package,
      //         "signType": "MD5",
      //         "paySign": res.data.paySign,
      //         "success": function(res) {
      //           console.log("支付成功");
      //         },
      //         "fail": function(res) {
      //           console.log("支付失败");
      //         },
      //         "complete": function(res) {
      //         }
      //       });
      //   });
      // },
      onClose(e){
        console.log(`toAddAddress is go`)
        if(e.detail==='confirm'){
          console.log(`toAddAddress is go`)
        }
        
        this.$router.replace({
          path:"editAddress",
          query:{
            isedit:false
          }
        })
      },
      //初始化首页的数据
      initData() {
        this.fly.get("index").then((res) => {
          this.categoryData = res.data.obj.types;
          this.mySwiper = res.data.obj.carousels;
          this.storelist = res.data.obj.shopList;
        });
      },
    },
    
    created() {
      // 调用应用实例的方法获取全局数据
      this.initData();
      // this.checkAuth();
    }
  };
</script>

<style scoped>
  .content {
    margin: 0 10px;
    /*background-color: black;*/
  }

  .categoryBox {
    margin: 15px 0;
  }

  .swiperBox {
    height: 160px;
  }

  .iAmAbox{
    width: 100%;
    height: 100px;
  }
</style>
