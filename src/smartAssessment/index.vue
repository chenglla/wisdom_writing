<template>
  <div class="SmartAssessment">
    <div class="smart_header">
      <!-- <div class="return__icon" @click="returnBack">
        <i class="iconfont icon_lu_fanhui" ></i>
      </div> -->
      <div class="title">智能测评</div>
    </div>
    <div class="smart_middle">
      <div class="smart_picture">
        <img src="../assets/img/组25.png" alt="">
        <div class="smart_upload" @click="upload">上传文章</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      upload(){
        this.$router.push({name:"startTest"})
      },
    }
  }
</script>

<style scoped lang="scss">
  .SmartAssessment{
    background-color: #F4F4F4;
  }
  .smart_header {// 标题栏格式
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
  .title {
    text-align: center;
    font-weight: bold;
  }
  //标题以下
  .smart_middle{
    text-align: center;
    background-color: #F4F4F4;
    height:calc(100vh - 45px);
    div{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  // 图片
  .smart_picture{

    img{
      position: relative;
      bottom: 50px;
      width: 220px;
      height: 180px;
    }
  }
  // 开始上传
  .smart_upload{
    border: 1px solid #1F69FF;
    width: 220px;
    font-size: 20px;
    color: #1F69FF;
    text-align: center;
    border-radius: 7px;
    padding: 6px 0;
    margin: 0 auto;
    letter-spacing: 8px;
    font-weight: 600;
  }
</style>
