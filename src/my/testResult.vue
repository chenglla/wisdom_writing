<template>
  <div class="testResult">
    <div class="result_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont icon_lu_fanhui" ></i>
      </div>
      <div class="title">测评结果</div>
    </div>
    <div class="result_middle">
      <span class="result_score">{{score}}</span>
      <span class="result_fen">分</span>
      <div class="result_all">总体测评结果</div>
    </div>
    <div class="result_wrapper" ref="resultWrapper">
      <div class="result_content">
        <div class="result_title">{{title}}</div>
        <div class="result_next">
          <span class="result_author">作者：{{author}}</span>
          <span class="result_time">{{time}}</span>
        </div>
        <div class="result_page">{{content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
  export default {
    data () {
      return {
        resultScroll:null,
        score:77,
        title:"迟暮",
        author:"张爱玲",
        time:"2020-07-31 20:15:04",
        content:"多事的东风，又冉冉地来到人间，桃红支不住红艳的酡颜而醉倚在封姨的臂弯里，柳丝趁着风力，俯了腰肢，搔着行人的头发，成团的柳絮，好像春神足下坠下来的一朵朵的轻云，结了队儿，模仿着二月间漫天舞出轻清的春雪，飞入了处处帘栊。细草芊芊的绿茵上，沾濡了清明的酒气，遗下了游人的屐痕车迹。一切都兴奋到了极点，大概有些狂乱了吧？在这缤纷繁华目不暇接的春天！多事的东风，又冉冉地来到人间，桃红支不住红艳的酡颜而醉倚在封姨的臂弯里，柳丝趁着风力，俯了腰肢，搔着行人的头发。",
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
          this.resultScroll = new BScroll(this.$refs.resultWrapper, {
            click: true,
            bounce: false
          })
          console.log(this.resultScroll)
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .testResult{// 背景
    //height: 100%;
    background-image:url(../assets/img/智能测评.png);
    background-size:  100vw 250px;
    background-repeat: no-repeat;
    background-color: #F4F4F4;
    }
  .result_header {// 标题栏格式
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
  // 分数框
  .result_middle{
    height: 200px;
    margin:40px 3vw 10px 3vw ;
    background-color: white;
    border-radius: 6px;
    text-align: center;
    color: #6692FC;
  }
  .result_score{
    font-size: 105px;
    font-weight: 500;
  }
  .result_fen{
    position: relative;
    bottom: 66px;
  }
  .result_all{
    margin: 0;
    font-size: 18px;
    letter-spacing: 3px;
    position: relative;
    bottom: 26px;
  }
  // 文章具体内容
  .result_wrapper{
    height: calc(100vh - 300px);
    overflow: hidden;
  }
  .result_content{
    background-color:white;
    margin:0 3vw;
    padding: 30px 20px;
  }
  .result_title{
    color: #212121;
    text-align: center;
  }
  .result_next{
    text-align: center;
    color: #B1B1B1;
    font-size: 10px;
    margin: 8px 0;
  }
  .result_page{
    text-align: justify;
    text-indent: 2rem;
    color: #666666;
  }
</style>
