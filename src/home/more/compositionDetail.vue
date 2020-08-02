<template>
  <div class="detail">
    <div class="test_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont icon_lu_fanhui" ></i>
      </div>
      <div class="title">作文详情</div>
    </div>
    <div class="detail_wrapper" ref="detailWrapper">
      <div class="detail_item">
        <div class="detail_title">{{composition.title}}</div>
        <div class="detail_middle">
          <span class="detail_author">{{composition.author}}</span>
          <span class="detail_time">{{composition.time}}</span>
        </div>
        <div class="detail_content">{{composition.content}}
          <p>多事的东风，又冉冉地来到人间，桃红支不住红艳的酡颜而醉倚在封姨的臂弯里，柳丝趁着风力，俯了腰肢，搔着行人的头发，成团的柳絮，好像春神足下坠下来的一朵朵的轻云，结了队儿，模仿着二月间漫天舞出轻清的春雪，飞入了处处帘栊。细草芊芊的绿茵上，沾濡了清明的酒气，遗下了游人的屐痕车迹。一切都兴奋到了极点，大概有些狂乱了吧？在这缤纷繁华目不暇接的春天！</p>
          <p> 只有一个孤独的影子，她，倚在栏杆上；她有眼，才从青春之梦里醒过来的眼还带着些朦胧睡意，望着这发狂似的世界，茫然地像不解这人生的谜。她是时代的落伍者了，在青年的温馨的世界中，她在无形中已被摈弃了。她再没有这资格，心情，来追随那些站立时代前面的人们了！在甜梦初醒的时候，她所有的惟有空虚，怅惘；怅惘自己的黄金时代的遗失。</p>
          <p>咳！苍苍者天，既已给与人们的生命，赋与人们创造社会的青红，怎么又吝啬地只给我们仅仅十余年最可贵的稍纵即逝的创造时代呢？这样看起来，反而是朝生暮死的蝴蝶为可羡了。它们在短短的一春里尽情地酣足地在花间飞舞，一旦春尽花残，便爽爽快快地殉着春光化去，好像它们一生只是为了酣舞与享乐而来的，倒要痛快些。像人类呢，青春如流水一般的长逝之后，数十载风雨绵绵的灰色生活又将怎样度过? </p>
          <p>她，不自觉地已经坠入了暮年人的园地里，当一种暗示发现时，使人如何的难堪！而且，电影似的人生，又怎样能挣扎？尤其是她，十年前痛恨老年人的她！她曾经在海外壮游，在崇山峻岭上长啸，在冻港内滑冰，在广座里高谈。但现在呢？往事悠悠，当年的豪举都如烟云一般霏霏然的消散，寻不着一点的痕迹，她也惟有付之一叹，青年的容貌，盛气，都渐渐地消磨去了。她怕见旧时的挚友。她改变了的容貌，气质，无非添加他们或她们的惊异和窃议罢了。为了躲避，才来到这幽僻的一隅，而花，鸟，风，日，还要逗引她愁烦。她开始诅咒这逼人太甚的春光了。……</p>
          <p>灯光绿黯黯的，更显出夜半的苍凉。在暗室的一隅，发出一声声凄切凝重的磬声，和着轻轻的喃喃的模模糊糊的诵经声，（差一段）她心里千回百转地想，接着，一滴冷的泪珠流到冷的嘴唇上，封住了想说话又说不出的颤动着的口。</p>

        </div>
      </div>
    </div>
    <div class="detail_bottom">
      <div class="detail_star">
        <i class="iconfont icon_lu_dianzan_active-copy-copy-copy" ></i>
        <span>点赞</span>
      </div>
      <div class="detail_collect">
        <i class="iconfont icon_lu_shoucang11" ></i>
        <span>收藏</span>
      </div>
    </div>
  </div>
</template>

<script>
 import BScroll from "better-scroll"
  export default {
    data () {
      return {
        detailScroll:null,
        composition:{
          title:"迟暮",
          author:"张爱玲",
          time:"18-04-22 12:19:00",
          content:"",
        },
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
          this.detailScroll = new BScroll(this.$refs.detailWrapper, {
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
  .detail{// 背景
    height: 100vh;
    background-image: url(../../assets/img/我的3.png);
    background-size:  100vw 150px;
    background-repeat: no-repeat;
    background-color: #F4F4F4;
    padding: 0 3vw;
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
  .detail_wrapper{ //文章部分
    flex: 1;
    border-radius: 10px;
    margin: 28px 0;
    padding: 0 4%;
    height: calc(100vh - 138px);
    background-color: white;
    overflow: hidden;
    .detail_item{
      padding: 30px 0;
    }
  }
  .detail_title{
    text-align: center;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 600;
  }
  .detail_middle{
    margin: 6px 0;
    color: #B1B1B1;
    font-size: 10px;
    text-align: center;
  }
  .detail_content{
    text-indent:2rem;
    color: #666666;
  }
  .detail_bottom{ //底部操作框
    width: 94vw;
    margin: 10px 0;
    position: fixed;
    bottom: 0;
    background-color: white;
    height: 45px;
    display: flex;
    text-align: center;
    .detail_star{
      position: relative;
      bottom: 4px;
      flex: 1;
      i{
        font-size: 30px;
        color: red;
      }
    }
    .detail_collect{
      flex: 1;
      i{
        font-size: 24px;
        color: gold;
      }

    }
    span{
      color: #A4A4A4;
    }
  }
</style>
