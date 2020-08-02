<template>
  <div class="start_test">
    <div class="start_picture">
      <div>
        <span class="start_number">{{number}}</span>
        <span class="pencent">%</span>
        <div class="start_upload">正在上传</div>
      </div>
    </div>
    <div class="start">开始测评</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        number:85,
      }
    }
  }
</script>

<style scoped lang="scss">
  .start_test{
    background-image: linear-gradient(to bottom ,#F4F4F4 0%,#F4F4F4 70%,#E7F1F8 100%);
    //background-color: #F4F4F4;
    width: 100vw;
    height: 100vh;
  }
  .start_picture{//图片部分
    height: 280px;// 背景框大小
    position: relative;
    top: 270px;// 图片位置
    transform: translateY(-50%);
    //background-color: yellow;
    background-image: url(../assets/img/开始测评.png);
    background-repeat: no-repeat;
    background-size: 280px 210px;
    background-position: center;
    text-align: center;
    color: white;
    padding-top: 190px;// 控制文字位置
    text-shadow: 2px 2px 3px #397CCB;
  }
  .start_number{ // 分数
    font-size: 50px;

  }
  .start_upload{//正在上传
    font-size: 10px;
    color: #E9F6FF;
  }
  .start{//开始测评
    width:270px;
    padding: 12px 0;
    background-image: linear-gradient(to right,#9CB9FF,#6793FC);
    border: 1px solid #6793FC;
    font-size: 16px;
    letter-spacing: 6px;
    color: white;
    text-align: center;
    border-radius: 50px;
    margin: 0 auto;
    box-shadow: 2px 2px 0 2px #E0ECF6;
  }
</style>
