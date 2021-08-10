<template>
  <div id="update">
      <div class="title">
      <lottie class="sleep" :options="defaultOptions" :height="60" :width="60" v-on:animCreated="handleAnimation" />
      <h2>更新日志 v1.1.0</h2>
      </div>
      <div class="mainbody">
          <ul>
              <li>新的原创人物插画，有想法可以联系！</li>
              <li>发布信息时增添性别标签</li>
              <li>移动端，个人中心适配</li>
              <li>搜索关键词功能</li>
          </ul>

          <div class="contact">
             <a href="javascript:;"><i class="iconfont icon-icon_xinyong_xianxing_jijin-160"></i> 我会用Ipad画画！</a>
          </div>
      </div>
  </div>
</template>

<script>

import update from "../../../assets/lottie/update.json";
export default {
data(){
    return {
    defaultOptions: { animationData: update},
      animationSpeed: 1,
      anim: {},
    }
}
}
</script>

<style scoped>
@import '//at.alicdn.com/t/font_2590945_jtveajenk3e.css';

.title {
    margin: 0 auto;
    text-align: center;
}
#update {
    margin: 100px 0;
}
.sleep {
    display: inline-block;
}
h2 {
    vertical-align: top;
    line-height: 60px;
    display: inline-block;
    width: 20%;
    height: 60px;
    color: #bdc3c7;
    text-align: center;
    margin: 0px auto;
}

.mainbody {
    width: 80%;
    margin: 0 auto;
    height: 700px;
    background-color: #34495e;
    border-radius: 20px;
    box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.3);
    background: url('../../../assets/img/update.png') no-repeat right bottom;
    background-size: 50%;
}

.mainbody ul {
    width: 70%;
    margin: 20px auto;
    padding: 50px 0;
}

.mainbody ul li {
    height: 40px;
    color: white;
    font-size: 20px;
}

.contact {
    position: relative;
    top: -191px;
    right: -334px;
    width: 20%;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    margin-left: 30%;
    text-align: center;
    background-color: #bdc3c7;
    border-radius: 10px;
}

.contact i {
    font-weight: 700;
    font-size: 20px;
}

.contact:hover::after {
    display: block;
}

.contact::after {
    
    transition: .5s;
    display: none;
    
    content: '';
    font-size: 12px;
    position: absolute;
    top: 50px;
    left:23px;
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    background: url(../../../assets/img/wechat.png) no-repeat;
    background-size: contain;
    z-index: 2;
}


@media screen and (max-width:600px){
    h2 {
    vertical-align: top;
    line-height: 60px;
    display: inline-block;
    width: 40%;
    font-size: 18px;
    height: 60px;
    color: #bdc3c7;
    text-align: center;
    margin: 0px auto;
}

.mainbody ul li {
    height: 40px;
    color: white;
    font-size: 16px;
    margin: 5px 0px;
}

.mainbody {
    width: 80%;
    margin: 0 auto;
    height: 700px;
    background-color: #34495e;
    border-radius: 20px;
    box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.3);
    background: url('../../../assets/img/update.png') no-repeat right bottom;
    background-size: 90%;
}

.contact {
    position: relative;
    top: 0px;
    left: -15%;
    width: 75%;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    margin-left: 30%;
    text-align: center;
    background-color: #bdc3c7;
    border-radius: 10px;
}



.contact:hover::after {
    display: block;
}

.contact::after {
    transition: .5s;
    display: none;
    content: '';
    position: absolute;
    top: 50px;
    left:5px;
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    background: url(../../../assets/img/wechat.png) no-repeat;
    background-size: contain;
    z-index: 2;
}



}

</style>