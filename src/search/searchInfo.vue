<template>
  <div class="search_info">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont icon_lu_fanhui"></i>
      </div>
      <div class="title">搜索列表</div>
    </div>
    <div>
      <div class="titleRecord">
        <!--      <i class="iconfont iconsousuo"></i>-->
        共搜到{{total}}条记录
      </div>
    </div>
    <div class="search_second" ref="searchSecond">
      <div>
        <div v-for="(item, index) in searchList" :key="index" class="con_info" @click="gotoDetail(item)">
          <div class="content_left">
            <img :src=changePicture(item.localessay) alt="" class="con_left_img">
          </div>
          <div class="content_right">
            <div class="con_right_title">{{item.localessay.title}}</div>
            <div class="con_right_author"><span>{{item.localessay.summary}}</span></div>
            <div class="con_right_journal">类型：{{item.localessay.type}}<span>{{item.localessay.date | formatDate }}</span></div>
            <div class="con_right_option">
              <span @click.stop="gotoOption('collect', item, index)"><i class="iconfont icon_lu_collect"></i>收藏</span>
              <span @click.stop="gotoOption('zan', item, index)"><i class="iconfont icon_lu_dianzan1"></i>点赞</span>
              <span><i class="iconfont icon_lu_fenxiang"></i>分享</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {getSearch} from '@/api/index'
import {formatDate} from '../utils/date.js'
export default {
  data () {
    return {
      page: 0,
      searchList: [], // 搜索列表
      searchScroll: null,
      total: 0
    }
  },
  filters: {
    formatDate (time) {
      var date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
      // return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  computed: {
    searchContent () {
      return this.$route.query.searchContent
    }
  },
  mounted () {
    this.getSearch()
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    init () {
      this.$nextTick(() => {
        this.searchScroll = new BScroll(this.$refs.searchSecond, {
          click: true
        })
      })
    },
    getSearch () { // 获取搜索列表内容
      getSearch({
        page: this.page,
        title: this.searchContent
      }).then(res => {
        this.total = res.data.data.total
        this.searchList = res.data.data.list
        const that = this
        setTimeout(function () {
          for (const i in that.searchList) {
            if (that.searchList[i].shouchang === true) {
              // console.log(11111111111)
              var collList = document.querySelectorAll('.icon_lu_collect')
              collList[i].style.color = 'red'
            }
          }
          that.init()
        }, 400)
        console.log(res.data)
      })
    },
    changePicture: function (item) {
      var num = (item.id) % 100
      if (num < 10) {
        num = '0' + num
      } else {
        num = '' + num
      }
      return 'http://114.242.223.253/zihui/images/20190703a0' + num + '.jpg'
      // var str = 'http://114.242.223.253/zihui/images/20190703a0' + num + '.jpg'
      // return str
    },
    gotoOption (option, item, index) {

    }
  }
}
</script>
<style scoped lang="scss">
  .search_info {
    height: 100%;
  }
  .score_header {
    text-align: center;
    letter-spacing: 0.2em;
    position: relative;
    font-size: 18px;
    width: 100%;
    background-color: rgb(0, 115, 231);
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
    margin-top: 10px;
    font-size: 20px;
  }
  .titleRecord {
    margin: 10px 0 0 15px;
    padding-bottom: 3px;
    border-bottom: 1px solid #ececec;
    color: #9c9c9c;
  }
  .search_second {
    position: relative;
    /*background: #fbf9fe;*/
    overflow: hidden;
    /*padding: 10px 0;*/
    height: calc(100% - 95px);
    margin-top: 10px;
    .content_left, .content_right {
      display: inline-block;
      /*width: 40%;*/
      position: relative;
    }
  }
  .content_left {
    width: 40%;
    .iconfont {
      position: absolute;
      z-index: 1;
      bottom: 0;
      /*top: 74%;*/
      /*left: 68%;*/
      right: 8%;
      color: #CC3636;
      font-size: 20px;
    }
  }
  .content_right {
    width: 55%;
    left: 10px;
  }
  .con_right_title {
    position: absolute;
    top: -93px;
    color: #44BF87;
    white-space: nowrap; // 强制一行显示
    width: 100%;
    overflow: hidden; // 超出部分隐藏
    text-overflow: ellipsis; // 超出部分显示省略号
  }
  .con_right_author {
    white-space: nowrap; // 强制一行显示
    width: 97%;
    overflow: hidden; // 超出部分隐藏
    text-overflow: ellipsis; // 超出部分显示省略号
    position: absolute;
    top: -65px;
    font-size: 13px;
    color: #9c9c9c;
    span {
      padding: 0 3px;
    }
    span:first-child {
      padding-left: 0;
    }
  }
  .con_right_journal {
    position: absolute;
    top: -40px;
    /*color: #3c3c3c;*/
    color: #9c9c9c;
    font-size: 13px;
    span {
      margin-left: 20px;
    }
  }
  .con_right_option {
    position: absolute;
    top: -15px;
    font-size: 12px;
    color: #9c9c9c;
    width: 100%;
    span {
      text-align: center;
      margin-right: 5%;
      width: 33.33%;
      .iconfont {
        margin-right: 3px;
      }
    }
    /*span:nth-child(1) {*/
    /*  */
    /*}*/
  }
  .con_info {
    padding: 10px 0;
    border-bottom: 1px solid #ececec;
    background-color: #fff;
    .con_left_img {
      margin-left: 10px;
      width: 90%;
      border: 1px solid #ececec;
    }
  }
</style>
