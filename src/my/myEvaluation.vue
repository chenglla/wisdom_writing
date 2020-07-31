<template>
  <div class="test">
    <div class="test_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont icon_lu_fanhui" ></i>
      </div>
      <div class="title">我的</div>
    </div>
    <div class="test_middle">
      <div class="test_history">
        <img src="../assets/img/4.png" alt="" style="height: 50px;width: 42px;">
        <div>测评历史</div>
      </div>
      <div class="test_report">
        <img src="../assets/img/3.png" alt="" style="height: 50px;width: 42px;">
        <div>测评报告</div>
      </div>
    </div>
    <div class="test_next" ref="nextWrapper">
      <div>
        <div class="test_list" v-for="(testList,index) in testLists" :key="index">
          <div class="test_left">
            <div class="right"><i class="iconfont icon_lu_wode" ></i>申请人</div>
            <div class="left">测评文章</div>
            <div class="left R1">测评结果</div>
          </div>
          <div class="test_right">
            <div>
              <span class="right">{{testList.userName}}</span>
              <span class="right test_check" @click="gotoResult"> 查看</span>
            </div>
            <div class="right">{{testList.title}}</div>
            <div class="right R2">{{testList.result}}</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import BScroll from "better-scroll"
  export default {
    data () {
      return {
        testScroll:null,
        testLists:[
          {
            userName:"福多多",
            title:"人生中的赛跑",
            result:"测评报告内容 测评报告内容 测评报告内容 测评报告内容测评报告内容测评报告内容 测评报告内容 测评报告内容 测评报告内容",
          },
          {
            userName:"福多多",
            title:"人生中的赛跑",
            result:"测评报告内容 测评报告内容 测评报告内容 测评报告内容测评报告内容测评报告内容 测评报告内容 测评报告内容 测评报告内容",
          },
          {
            userName:"福多多",
            title:"人生中的赛跑",
            result:"测评报告内容 测评报告内容 测评报告内容 测评报告内容测评报告内容测评报告内容 测评报告内容 测评报告内容 测评报告内容",
          },
          {
            userName:"福多多",
            title:"人生中的赛跑",
            result:"测评报告内容 测评报告内容 测评报告内容 测评报告内容测评报告内容测评报告内容 测评报告内容 测评报告内容 测评报告内容",
          },
          {
            userName:"福多多",
            title:"人生中的赛跑",
            result:"测评报告内容 测评报告内容 测评报告内容 测评报告内容测评报告内容测评报告内容 测评报告内容 测评报告内容 测评报告内容",
          },
          {
            userName:"福多多",
            title:"人生中的赛跑",
            result:"测评报告内容 测评报告内容 测评报告内容 测评报告内容测评报告内容测评报告内容 测评报告内容 测评报告内容 测评报告内容",
          },
          {
            userName:"福多多",
            title:"人生中的赛跑",
            result:"测评报告内容 测评报告内容 测评报告内容 测评报告内容测评报告内容测评报告内容 测评报告内容 测评报告内容 测评报告内容",
          },
          {
            userName:"福多多",
            title:"人生中的赛跑",
            result:"测评报告内容 测评报告内容 测评报告内容 测评报告内容测评报告内容测评报告内容 测评报告内容 测评报告内容 测评报告内容",
          },
          {
            userName:"福多多",
            title:"人生中的赛跑",
            result:"测评报告内容 测评报告内容 测评报告内容 测评报告内容测评报告内容测评报告内容 测评报告内容 测评报告内容 测评报告内容",
          },
          {
            userName:"福多多",
            title:"人生中的赛跑",
            result:"测评报告内容 测评报告内容 测评报告内容 测评报告内容测评报告内容测评报告内容 测评报告内容 测评报告内容 测评报告内容",
          },
          {
            userName:"福多多",
            title:"人生中的赛跑",
            result:"测评报告内容 测评报告内容 测评报告内容 测评报告内容测评报告内容测评报告内容 测评报告内容 测评报告内容 测评报告内容",
          },
          {
            userName:"福多多",
            title:"人生中的赛跑",
            result:"测评报告内容 测评报告内容 测评报告内容 测评报告内容测评报告内容测评报告内容 测评报告内容 测评报告内容 测评报告内容",
          },
          {
            userName:"福多多",
            title:"人生中的赛跑",
            result:"测评报告内容 测评报告内容 测评报告内容 测评报告内容测评报告内容测评报告内容 测评报告内容 测评报告内容 测评报告内容",
          },
          {
            userName:"福多多",
            title:"人生中的赛跑",
            result:"测评报告内容 测评报告内容 测评报告内容 测评报告内容测评报告内容测评报告内容 测评报告内容 测评报告内容 测评报告内容",
          },
          {
            userName:"福多多",
            title:"人生中的赛跑",
            result:"测评报告内容 测评报告内容 测评报告内容 测评报告内容测评报告内容测评报告内容 测评报告内容 测评报告内容 测评报告内容",
          },
        ],
      }
    },
    mounted() {
      this.init()
    },
    methods:{
      returnBack () {
        this.$router.go(-1)
      },
      init () {
        this.$nextTick(() => {
          this.testScroll = new BScroll(this.$refs.nextWrapper, {
            click: true,
            bounce: false
          })
          console.log(this.testScroll)
        })
      },
      gotoResult(){
        console.log("查看")
        this.$router.push({ name: 'testResult'})
      }
    },
  }
</script>

<style scoped lang="scss">
  .test{// 背景
    //height: 100%;
    background-image: url(../assets/img/我的3.png);
    background-size:  100vw 150px;
    background-repeat: no-repeat;
    background-color: #F4F4F4;
    }
  .test_header {// 标题栏格式
    position: relative;
    font-size: 18px;
    letter-spacing: 2px;
    width: 100%;
    background: #6692FC;
    /*background-color: #19bdff;*/
    color: #fff;
    height: 45px;
    line-height: 45px;
    flex: none;
    z-index: 1;
  }
  .return__icon{
    position: absolute;
    margin-left: 15px;
  }
  .iconfanhui {
    font-size: 18px;
  }
  .title {
    text-align: center;
    font-weight: bold;
  }
  //白框（测评历史和测评报告）
  .test_middle{
    height: 110px;
    background-color: white;
    margin:40px 3vh 10px 3vh;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 1px 1px lightgray;
  }
  .test_history{ //测评历史
     width: 48%;
     text-align: center;
    // display: inline-block;

  }
  .test_report{ //测评报告
    width: 48%;
    text-align: center;
  }
  .test_next{// wrapper
    height: calc(100vh - 200px);
    overflow: hidden;
    //background-color: olivedrab;
  }
  // 信息列表
  .test_list{
    height: 110px;
    margin: 14px 4vh;
    border-bottom: 1px solid #E8E8E8;
    letter-spacing: 2px;
    color: #5A5959;
    font-size: 14px;
  }
  .test_left{
    width: 22%;
    display: inline-block;
    vertical-align: top;
    div{
      margin-bottom: 6px;
    }
  }
  .test_right{
    padding-top: 2px;
    width: 76%;
    display: inline-block;
    vertical-align: top;
    div{
      margin-bottom: 6px;
    }
  }
  .R2{//测评的结果
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /*行数*/
  }
  .icon_lu_wode{
    color: #449EFC;
  }
  .test_check{// 查看
    float: right;
    color: #6692FC;
  }

</style>
