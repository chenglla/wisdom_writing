<template>
  <div class="home_info">
    <div class="search_info">
        <label>
          <input type="text" class="third_input" placeholder="请搜索你喜欢的宝贝" v-model="searchContent" ref="searchInput" @click="toggleInput" @keyup.enter="gotoSearch" @blur="inputBlur" @input="getSearchList">
        </label>
        <i class="iconfont icon_lu_sousuo" @click="gotoSearch"></i>
      </div>
    <div class="all_info">
      <swiper auto loop @on-index-change="onSwiperItemIndexChange" v-model="swiperIndex" dots-position="center">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in img_list" :key="index">
          <img :src="item">
        </swiper-item>
      </swiper>
      <div class="second_info">
        <i class="iconfont icon_lu_fengefuhao"></i>
        <span>
        素词库
        </span>
        <div class="third_info">
          <div class="third_item">名言名句</div>
          <div class="third_item">优美语句</div>
          <div class="third_item">历史故事</div>
        </div>
      </div>
      <div class="four_info">
        <div class="four_top">
          <i class="iconfont icon_lu_fengefuhao" style="color: rgb(102,132,252);"></i>
          <span>作文分类</span>
          <ul class="four_type">
            <li v-for="(articleType,index) in articleTypes" :key="index">{{articleType}}</li>
          </ul>
          <div class="four_more">更多</div>
        </div>
        <ul class="four_list">
          <li v-for="(articleList,index) in articleLists" :key="index">
            <img src="../assets/img/火.png" >
            《{{articleList.title}}》作者：{{articleList.author}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {getShow} from '@/api/index'
import BScroll from 'better-scroll'
import {formatDate} from '../utils/date.js'
const imgList = [
  // require('../assets/img/14.jpg'),
  require('../assets/img/banner.png'),
  require('../assets/img/banner.png'),
  require('../assets/img/banner.png')
]
export default {
  data () {
    return {
      // swiperList: ['../../assets/img/banner.png', '../../assets/img/banner.png'],
      img_list: imgList,
      swiperIndex: 1,
      searchContent: '', // 搜索内容
      page: 0,
      articleList: [], // 作文列表
      fourScroll: null,
      articleTypes:["记叙文","议论文","说明文","命题作文"],
      articleLists:[
        {
          title:"拒绝平庸",
          author:"刘大鹏",
        },
        {
          title:"济南的冬天",
          author:"王菲",
        },
        {
          title:"未选择的路",
          author:"李鹏程",
        }
      ],
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
    toggleInput () { // input点击
      this.$refs.searchInput.focus()
      const a = document.querySelector('.third_input')
      a.removeAttribute('placeholder')
      // a.parentNode.className = 'predict_second_input'
    },
    inputBlur () { // input失去焦点
      if (this.searchContent === '') {
        const a = document.querySelector('.third_input')
        a.setAttribute('placeholder', '请搜索你喜欢的宝贝')
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
    background: #f8f8f8;
    /*background: #fff;*/
  }
  .all_info {
    margin: 10px 15px;
  }
  .second_info {
    font-size: 15px;
    letter-spacing: 0.1em;
    i {
      color: rgb(102, 132, 252);
    }
    span {
      margin-left: -3px;
      /*font-size: 14px;*/
    }
  }
  .third_info {
    display: flex;
    justify-content: center;
    align-items: center;
    .third_item {
      margin: 15px 5px;
      text-align: center;
      padding: 15px 5px;
      flex: 1;
      color: #fff;
      border-radius: 10px;
    }
    .third_item:first-child {
      background-color: rgb(36, 191, 254);
    }
    .third_item:nth-child(2) {
      background-color: rgb(255, 204, 126);
    }
    .third_item:nth-child(3) {
      background-color: rgb(36, 191, 254);
    }
  }
  .four_info{//作文分类
    height: 150px;
    background-color: white;
    background-image: url(../assets/img/作文分类背景.png);
    background-size: auto;
    .four_top{
      display: flex;
      .four_type li{
        float:left;
        margin-top: 8px;
        margin-left: 10px;
        font-size: 10px;
      }
      .four_more{
        float: right;
        font-size: 10px;
        margin-top: 8px;
      }
    }
    span{
       letter-spacing: 0.1em;
    }
    li{
      list-style-type:none;
    }
  }
  .four_list{
    li{
      margin: 10px 30px;
    }
    li img{ // 火苗图片
      width: 16px;
      height: 16px;
    }
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
    margin: 10px 15px;
    position: relative;
    background-color: rgb(245, 243, 243);
    border-radius: 20px;
  }
  .third_input {
    margin-left: 40px;
    border: 0;
    height: 28px;
    width: 81%;
    outline: 0;
    background-color: rgb(245, 243, 243);
    font-size: 14px;
  }
  .icon_lu_sousuo {
    position: absolute;
    font-weight: bold;
    float: left;
    left: 15px;
    color: rgb(215, 215, 215);
    top: 3px;
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
  .swiper-demo-img img {
    width: 100%;
    /*height: 100%;*/
  }
</style>
<style>

  input::-webkit-input-placeholder {
    /* placeholder颜色 */
    color: #bcbcbc;
    /* placeholder字体大小 */
    font-size: 12px;
  }
</style>
