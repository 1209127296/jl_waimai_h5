<template>
  <div>
    <div class="orderContainer">
      <div v-for="(order,i) in orders" :key="i">
      <order v-for="(o,index) in order" :key="index"
      :headImg="o.shop.logo"
      :shopName="o.name"
      :order_status="o.userStatus"
      :total_deal="o.orderDetails.length"
      :monetary="o.realPay"
      :create_time="o.createDate"
      :order_num="o.id"
      @toPay="toPay(o.id)"
      @toDetails="toDetails(o.id)"
      ></order>
      </div>
    </div>
    <div class="empty" v-show="orders.length == 0">
      暂无订单
    </div>
    <div class="down-div"></div>
    <jlfooter></jlfooter>
  </div>
</template>

<script>
  import jlfooter from '@/components/jlfooter'
  import order from '@/components/order/order'
  // import { setInterval, clearInterval } from 'timers';

  export default {
    components:{jlfooter,order},
    data(){
      return {
        orders:[],
        // timer:null
      }
    },
    mounted(){
      var _this=this;
      _this.getOrders()
      // console.log(this.timer)
    },
    // onShow(){
    //   this.getOrders()
    // },
    methods:{
      toDetails(id){
        wx.navigateTo({
            url: "/pages/orderDetail/main?order_num="+id
        })
      },
      toPay(order_num){
        console.log(order_num)
        let that = this
        this.fly.post("wchatPay/unifiedorder/unifiedorder",{id:order_num})
          .then((res) => {
            wx.requestPayment({
              timeStamp: res.data.timeStamp,
              nonceStr: res.data.nonceStr,
              package: res.data.package,
              signType: "MD5",
              paySign: res.data.paySign,
              success: function(res) {
                console.log('支付成功')
                wx.redirectTo({
                  url: "/pages/orderDetail/main?order_num="+order_num
                });
              },
              fail: function(res) {
                console.log("支付失败");
              },
            });
          });
      },
      getOrders(){
        this.fly.post('getUserOrders').then(res=>{
          // console.log(res.data.obj[0].userStatus)
          // this.orders = res.data.obj
          //把order分割成二维数组
          this.orders=this.$what(res.data.obj,10)
          // var unicode = unescape(this.orders[1].user.name.replace(/\u/g, "%u"));
          // console.log(unicode)
        })
      },
    },

  };
</script>

<style scoped>
.orderContainer{
  background:rgb(219, 219, 219);
  margin-bottom:60px;
}
.empty{
  text-align: center;
  color: #c4c4c4;
}
.down-div{
  width: 100%;
  height: 20px;
}
</style>
