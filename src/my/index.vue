<template>
  <div class="my_wrapper" ref="my_wrapper">
    <div class="my_content">
      <div class="my_header">
        <div class="my_left">
          <img src="../assets/img/头像1.png" alt="">
        </div>
        <div class="my_right">
          <div>下午好！</div>
          <div>{{username}}</div>
        </div>
        <div class="my_h_bottom">
          <div>
            <span class="list_title">学校</span>
            <span class="list_content">人大附中</span>
            <span class="list_title">姓名</span>
            <span class="list_content">刘依依</span>
            <span class="list_title">年级</span>
            <span class="list_content">三年级</span>
          </div>
          <div class="my_address">
            <span class="list_title">地址</span>
            <span class="list_content">北京市海淀区中关村大街37号</span>
          </div>
        </div>
      </div>
      <ul class="my_middle">
        <li class="my_collet">
          <img src="../assets/img/star.png" alt="">
          <span class="span">我的收藏</span>
          <i class="iconfont icon_lu_iconfontjiantou5" @click="gotoCollect"></i>
        </li>
        <li class="my_test">
          <img src="../assets/img/ceping.png" alt="">
          <span class="span">测评报告</span>
          <i class="iconfont icon_lu_iconfontjiantou5" @click="gotoTest"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'my',
  data(){
    return {
      myScroll: null,
      username:"福多多",
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.myScroll = new BScroll(this.$refs.my_wrapper, {
        click: true
      })
    })
  },
  methods:{
    gotoCollect(){
      //this.$router.push({ path: '/collectList'})
      this.$router.push({ name: 'collectList'})
    },
    gotoTest(){
      this.$router.push({ name: 'myEvaluation'})
    },
  },
}
</script>

<style scoped lang="scss">
  .my_wrapper{
    height: 100%;
  }
  .my_header{
    position: relative;
    color: white;
    //padding: 20px 10%;// 上下、左右
    height: 290px;
    background-image:url(../assets/img/my.png);
    background-size: 100%;
    img{
      height: 80px;
      width: 80px;
    }
  }
  .my_left{
    position: absolute;
    top: 50px;
    left: 10%;
  }
 .my_right{
   position: absolute;
   top: 70px;
   left: 50%;
   width: 60%;
   font-size: 20px;
   letter-spacing: 1px;
  }

  .my_h_bottom{
    position: relative;
    width: 85%;
    position:absolute;
    bottom: 60px;
    //text-justify:inter-word;
    margin: 0 8%;
    //background-color: green;
    div{
      margin: 5px 0;
    }
  }
  .list_title{
    font-size: 14px;
    margin-right: 2%;
  }
  .list_content{
    font-size: 10px;
  }
  .my_middle{//我的收藏和测评报告

    box-shadow: 2px 2px 2px 2px #F8F8F8;
    li{
      position: relative;
      height: 40px;
      border-bottom: 1px solid #F8F8F8;
      img{
        width: 20px;
        height: 20px;
        margin: 10px 14px;
      }
      span{
        margin: auto 0;
        position: relative;
        bottom: 14px;
      }
      i{
        position: absolute;
        right: 10px;
        top: 5px;
      }
    }
  }
</style>
