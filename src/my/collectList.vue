<template>
  <div>
    <div class="collect_header">
      <div class="return__icon" >
        <i class="iconfont icon_lu_fanhui" @click="returnBack"></i>
      </div>
      <div class="title">作文收藏列表</div>
    </div>
    <div class="collect_wrapper" ref="collectWrapper">
      <div class="collect_content">
        <ul class="collect_list">
          <li class="collect_item" v-for="(collectList,index) in collectLists" :key="index">
            <!-- <div class="item_up"> -->
              <span class="item_name">{{collectList.name}}</span>
              <span class="item_time">{{collectList.time}}</span>
            <!-- </div>
            <div class="item_down"> -->
              <div class="item_content">{{collectList.content}}</div>
            <!-- </div> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        collectScroll: null,
        collectLists:[
          {
            name:"水的呼唤",
            time:"10-28",
            content:"水叙述bai说：我对人类的所作所为感到.......",
          },
          {
            name:"水的呼唤",
            time:"10-28",
            content:"水叙述bai说：我对人类的所作所为感到.......",
          },
          {
            name:"水的呼唤",
            time:"10-28",
            content:"水叙述bai说：我对人类的所作所为感到.......",
          },
          {
            name:"水的呼唤",
            time:"10-28",
            content:"水叙述bai说：我对人类的所作所为感到.......",
          },
          {
            name:"水的呼唤",
            time:"10-28",
            content:"水叙述bai说：我对人类的所作所为感到.......",
          },
          {
            name:"水的呼唤",
            time:"10-28",
            content:"水叙述bai说：我对人类的所作所为感到.......",
          },
          {
            name:"水的呼唤",
            time:"10-28",
            content:"水叙述bai说：我对人类的所作所为感到.......",
          },
          {
            name:"水的呼唤",
            time:"10-28",
            content:"水叙述bai说：我对人类的所作所为感到.......",
          },
          {
            name:"水的呼唤",
            time:"10-28",
            content:"水叙述bai说：我对人类的所作所为感到.......",
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

          this.collectScroll = new BScroll(this.$refs.collectWrapper, {
            click: true,
            bounce: false
          })
          console.log(this.collectScroll )
        })
      },
    },
  }

</script>

<style>
  .collect_header { /* 标题*/
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
  /*列表*/
  .collect_wrapper{
    height: calc(100vh - 90px);
    overflow: hidden;
  }
  .collect_content{
    

  }
  .collect_item{
    height: 40px;
    padding: 20px 12px;
    border-bottom: 2px solid #F8F8F8;
  }
  .item_name{
    letter-spacing: 1px;
    font-weight: 600;
  }
  .item_time{
    float: right;
    font-size: 10px;
    color: #9C9C9C;
  }
  .item_content{
    font-size: 10px;
    color: #9C9C9C;
  }
</style>
