<template>
  <div class="more_info">
    <!-- 搜索框 -->
    <div class="search_title">
     <div class="fanhui" @click="returnBack">
        <i class="iconfont icon_lu_fanhui" ></i>
     </div>
      <div class="search_info">
        <i class="iconfont icon_lu_sousuo" @click="gotoSearch"></i>
        <label>
          <input type="text" class="search_text" placeholder="请搜索你喜欢的宝贝" v-model="searchContent" ref="searchInput" @click="toggleInput" @keyup.enter="gotoSearch" @blur="inputBlur" @input="getSearchList">
        </label>
      </div>
    </div>
    <!-- 列表 -->
    <div class="more_second">
      <!-- 左边类别列表 -->
      <div class="more_second_left" ref="more_second_left">
        <div class="left_content">
          <div v-for="(item, index) in typeList" :key="index" class="more_second_left_item" @click="getEvalType(index)">{{item}}</div>
        </div>
      </div>
      <!-- 右边文章列表 -->
      <div class="more_second_right" ref="more_second_right">
        <div class="right_content">
          <div class="right_picture">智慧写作</div>
          <div class="right_list active" v-for="(compositionList,index) in compositionLists" :key="index">
             <div class="more_composition_item" @click="gotoOption(1)">
                <div class="item_top">
                  <span class="item_title">{{compositionList.title}}</span>
                  <span class="item_time">{{compositionList.time}}</span>
                </div>
                <div class="item_content">{{compositionList.content}}</div>
              </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      searchContent:'',
      moreLeftScroll: null,
      moreRightScroll: null,
      typeList: ['记叙文', '议论文', '说明文', '命题作文', '半命作文', '抒情文', '应用文','记叙文', '议论文', '说明文', '命题作文', '半命作文', '抒情文', '应用文'],
      compositionLists:[
        {
          title:"水的呼唤",
          time:"10-28",
          content:"水说:我对于人类的所作所为感到十分难过。",
        },
        {
          title:"丹墨莲梅",
          time:"03-26",
          content:"鱼儿生活在小水缸中就长得小，生活在大海中就长得大...",
        },
        {
          title:"我的时间",
          time:"03-19",
          content:"“时间是被偷走的一切”，很多人在老的时候才猛然发现，自己的时间都被偷走了...",
        },
        {
          title:"那一抹忧伤的底色",
          time:"02-28",
          content:"自古以来，书信都是中国的传统交流方式...",
        },
        {
              title:"水的呼唤",
              time:"10-28",
              content:"水说:我对于人类的所作所为感到十分难过。",
            },
            {
              title:"丹墨莲梅",
              time:"03-26",
              content:"鱼儿生活在小水缸中就长得小，生活在大海中就长得大...",
            },
            {
              title:"我的时间",
              time:"03-19",
              content:"“时间是被偷走的一切”，很多人在老的时候才猛然发现，自己的时间都被偷走了...",
            },
            {
              title:"那一抹忧伤的底色",
              time:"02-28",
              content:"自古以来，书信都是中国的传统交流方式...",
            },
            {
                  title:"水的呼唤",
                  time:"10-28",
                  content:"水说:我对于人类的所作所为感到十分难过。",
                },
                {
                  title:"丹墨莲梅",
                  time:"03-26",
                  content:"鱼儿生活在小水缸中就长得小，生活在大海中就长得大...",
                },
                {
                  title:"我的时间",
                  time:"03-19",
                  content:"“时间是被偷走的一切”，很多人在老的时候才猛然发现，自己的时间都被偷走了...",
                },
                {
                  title:"那一抹忧伤的底色",
                  time:"02-28",
                  content:"自古以来，书信都是中国的传统交流方式...",
                }


    ],
  }
 },
  computed: {
    leftIndex () {
      // console.log('index:', this.$store.state.singleModel.leftIndex)
      return parseInt(this.$store.state.compositionDetail.leftIndex)
    }
  },
  mounted () {
    this.initLeft()
    this.initRight()
    this.getEvalType(this.leftIndex)
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    initLeft () {
      this.$nextTick(() => {
        this.moreLeftScroll = new BScroll(this.$refs.more_second_left, {
          click: true
        })
      })
    },
    initRight () {
      this.$nextTick(() => {
        this.moreRightScroll = new BScroll(this.$refs.more_second_right, {
          click: true
        })

        console.log(this.moreRightScroll)
      })
    },
    getEvalType (val) { // val表示左侧点击按钮的index,点击左侧的index第一个，就获取右侧的第零个div
      // console.log('点击了么', val, typeof val)
      this.$store.commit('SET_LEFT_INDEX', val)
      const items = document.querySelectorAll('.more_second_left_item') // 获取左侧所有按钮
      const rights = document.querySelectorAll('.more_second_right_one') // 获取右侧所有内容
      // console.log(rights)
      if (val === 0) { // 这里展示的是默认全部div内容
        for (let i = 0; i < items.length; i++) {
          items[i].className = 'more_second_left_item'
          rights[i].style.display = ''
        }
      } else {
        for (let i = 0; i < items.length; i++) {
          // console.log(i)
          items[i].className = 'more_second_left_item' // 除了点击的按钮，其他按钮没有css变化
          rights[i].style.display = 'none'
        }
        rights[val - 1].style.display = ''
      }
      items[val].className = 'more_second_left_item active' // 添加active属性，是设置了点击按钮状态的css变化
    },
    gotoOption (id) {
    // gotoOption (val, id) {
    //   this.$store.commit('SET_TYPE_ID', id)
    //   console.log('顶级了么', id, typeof id)
      if (id === -1) {
        this.$router.push({name: 'building'})
      } else {
        this.$router.push({
          name: 'compositionDetail',
          query: {
            typeId: id
          }
        })
      }
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
    }
  }
}
</script>
<style lang="scss" scoped>
  .more_info {// 最外层
    height: 100%;
    /*width: 100%;*/
    display: flex;
    flex-direction: column;
    background: white;
  }

  .search_title{
    display: flex;
  }
  .fanhui{
    padding:14px 5px 5px 20px;
    //background-color: red;

  }
  .iconfanhui { // 返回
    font-size: 18px;
  }
  .search_info {// 搜索框
    flex: 1;
    margin: 14px 15px 8px 15px;
    position: relative;
    background-color: rgb(245, 243, 243);
    border-radius: 20px;
    .icon_lu_sousuo{
      position: absolute;
      left:20px;
      top: 2px;
    }
  }
  .search_text {
    margin-left: 46px;
    border: 0;
    height: 28px;
    width: 81%;
    outline: 0;
    background-color: rgb(245, 243, 243);
    font-size: 14px;
  }

  .more_second {//搜索框以下
    z-index: 1;
    border-radius: 4px;
    display: flex;
    background-color: #f8f8f8;
    margin: 8px 0;
    height: calc(100% - 55px);
    overflow: hidden;
    .more_second_left {// 左侧类别列表
      flex: 2;
      .left_content{
        padding-bottom: 34px;
      }
      .more_second_left_item { //单个类别，如“记叙文”
        text-align: center;
        line-height: 60px;
        letter-spacing: 2px;
        font-size: 14px;
      }
      .active {
        padding: 0 5px;
        background-color: white;
        margin: 13px;
      }
    }
  }
  .more_second_right {// 右边文章列表
    background-color: white;
    padding: 0 10px;
    flex: 7;
    .active {
    }
    .right_content{
      padding-bottom: 40px;
    }
    .right_list{
      margin: 0 6px;
    }
    .right_picture{ // 智慧写作图片
      height: 85px;
      background-image: url(../../assets/img/智慧写作1.png);
      background-size: 100% ;
      background-repeat: no-repeat;
      line-height: 85px;
      text-align: center;
      vertical-align: middle;
      font-size: 24px;
      text-shadow: 1px 1px #868782;
      color: white;
      letter-spacing: 6px;
      border-radius: 10px;
    }
    .more_composition_item { // 单个文章

      border-radius: 4px;
      padding: 14px 3px 12px 3px;
      border-bottom: 2px solid #F4F4F4;

    }
    .item_top{ // 作文的标题和时间
      .item_title{
        letter-spacing: 2px;
        font-weight: 600;
        font-size: 14px;
      }
      .item_time{
        float: right;
        color: #9E9E9E;
        font-size: 12px;
      }
    }
    .item_content{ // 作文内容
      color: #9E9E9E;
      width:250px;/*这个根据实际需要设置大小*/
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      font-size: 12px;
    }
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
