<template>
  <div class="home_info">
    <div class="first">
      <div class="content">
        <div class="score_header">
          <div class="title">首页</div>
        </div>
        <div class="first_dialog">
        <span class="add_score" @click="scanCode">
          <span>扫一扫</span>
          <!--          <i class="iconfont iconsaoma"></i>-->
        </span>
        </div>
      </div>
    </div>
    <div class="second">
      <img src="../assets/img/logo.png" class="second_left_img" alt="">
    </div>
    <div class="third">
      <div class="search_info">
        <label>
          <input type="text" class="third_input" placeholder="搜索" v-model="searchContent" ref="searchInput" @click="toggleInput" @keyup.enter="gotoSearch" @blur="inputBlur" @input="getSearchList">
        </label>
        <i class="iconfont icon_lu_sousuo" @click="gotoSearch"></i>
      </div>
    </div>
    <div class="four" ref="four">
      <div>
        <div class="title">
          作文列表
        </div>
        <div class="content" ref="content">
          <div v-for="(item, index) in articleList" :key="index" class="con_info" @click="gotoDetail(item)">
            <div class="con_title">
              <span class="con_label articleType" :style="Color()">{{item.localessay.type}}</span>
              {{item.localessay.title}}
            </div>
            <div class="con_time">{{item.localessay.date | formatDate }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getShow} from '@/api/index'
import BScroll from 'better-scroll'
import {formatDate} from '../utils/date.js'
export default {
  data () {
    return {
      searchContent: '', // 搜索内容
      page: 0,
      articleList: [], // 作文列表
      fourScroll: null
    }
  },
  filters: {
    formatDate (time) {
      var date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
      // return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  mounted () {
    this.getAllArticles()
    // this.Color()
  },
  methods: {
    init () {
      this.$nextTick(() => {
        this.fourScroll = new BScroll(this.$refs.four, {
          click: true
        })
      })
    },
    scanCode () { // 跳转到扫描
      this.$router.push('/scanCode')
    },
    toggleInput () { // input点击
      this.$refs.searchInput.focus()
      const a = document.querySelector('.third_input')
      a.removeAttribute('placeholder')
      // a.parentNode.className = 'predict_second_input'
    },
    inputBlur () { // input失去焦点
      if (this.searchContent === '') {
        const a = document.querySelector('.third_input')
        a.setAttribute('placeholder', '搜索')
      }
    },
    getSearchList () { // 实时获取搜索关键字
      console.log('获取列表')
    },
    gotoSearch () { // 去搜索
      if (this.searchContent === '') {
        console.log('搜索内容为空')
      } else {
        this.$router.push({
          name: 'searchInfo',
          query: {
            searchContent: this.searchContent
          }
        })
        // this.$store.commit('SET_SHOW_IMG', false)
        // this.$store.commit('SET_SEARCH_DATA', this.searchContent)
      }
    },
    getAllArticles () { // 获取所有文章
      getShow({
        page: this.page
      }).then(res => {
        this.articleList = res.data.data.list
        this.init()
        console.log(res.data)
      })
    },
    gotoDetail (item) {
      console.log('获取详情', item)
    },
    /**
     * @return {{backgroundColor: string}}
     */
    Color () {
      const r = Math.floor(Math.random() * 255)
      const g = Math.floor(Math.random() * 255)
      const b = Math.floor(Math.random() * 255)
      // return {
      //   width: (item.num / item.total * 100) + '%', // 进度条
      //   background: 'rgb(' + R + ',' + G + ',' + B + ')'
      // };
      return {backgroundColor: 'rgba(' + r + ',' + g + ',' + b + ',0.6)'}
      // document.querySelector('.articleType').style.backgroundColor = bgColor
    }
  }
}
// 颜色对象
// function Color () {
//   this.r = Math.floor(Math.random() * 255)
//   this.g = Math.floor(Math.random() * 255)
//   this.b = Math.floor(Math.random() * 255)
//   this.color = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',0.8)'
// }
</script>
<style scoped lang="scss">
  .home_info {
    height: 100%;
    /*height: calc(100% - 50px);*/
    /*overflow: hidden;*/
    /*flex: 1;*/
    /*background: #f8f8f8;*/
    /*background: #fff;*/
  }
  .first .content {
    font-size: 18px;
    width: 100%;
    background-color: rgb(0, 115, 231);
    color: #fff;
    height: 45px;
    line-height: 45px;
  }
  .score_header {
    text-align: center;
    letter-spacing: 0.2em;
    position: relative;
  }
  .return__icon{
    position: absolute;
    margin-left: 15px;
  }
  .first_dialog{
    position: absolute;
    top: 0;
    right: 4px;
    padding: 0 10px;
    color: #f3f3f3;
  }
  .add_score{
    font-size: 14px;
    display: inline-block;
  }
  .second {
    margin: 15px 0;
    text-indent: 2rem;
    /*text-align: center;*/
    img {
      /*width: 100%;*/
    }
  }
  .search_info {
    border: 1px solid #3c3c3c;
    margin: 0 15px;
    position: relative;
    /*border-radius: 10px;*/
    /*margin-top: 10px;*/
  }
  .third_input {
    margin-left: 10px;
    border: 0;
    height: 35px;
    width: 81%;
    outline: 0;
  }
  .icon_lu_sousuo {
    position: absolute;
    font-weight: bold;
    float: right;
    right: 8px;
    top: 6px;
  }
  .four {
    height: calc(100% - 275px);
    overflow: hidden;
    margin-top: 15px;
    padding: 10px 20px 35px;
    .title {
      font-size: 14px;
      color: #9c9c9c;
      padding-bottom: 3px;
    }
    .con_info {
      padding: 10px 0;
      /*margin: 7px 0;*/
      border-bottom: 1px solid #ececec;
      .con_title {
        margin-right: 10px;
        .con_label {
          font-size: 13px;
          padding: 0 8px;
          border-radius: 4px;
          color: #fff;
        }
        /*.articleType {*/
        /*  background-color:  Color();*/
        /*}*/
        /*.report {*/
        /*  background-color: ;*/
        /*}*/
        /*.article {*/
        /*  background-color: #ffb91b;*/
        /*}*/
      }
      .con_time {
        margin-top: 2px;
        font-size: 13px;
        color: #9c9c9c;
      }
    }
  }
</style>
