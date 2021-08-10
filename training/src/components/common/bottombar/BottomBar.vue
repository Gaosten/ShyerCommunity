<template>
  <div class="bottombar">
      <div class="mainbar">
          <div class="left">
              <img src="//img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg" alt="">
              <img src="../../../assets/img/logo.png" alt="">
              <div class="houdunren"><i class="iconfont icon-script"></i>houdunren.com</div>


              <div class="new">
             
              <img :src="svgURL" class="webpack" alt="">
              <i style="color:yellow" class="iconfont icon-babel"></i>
              <img :src="nodeURL" class="node" alt="">
              <img :src='mongoURL'  class="mongo" alt="">
              <img :src='npmURL'  class="npm" alt="">
              
              </div>
              
              <p class="pfirst">感谢以上技术及交流平台提供的灵感来源</p>
              <p>转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源</p>
              <p>创作于西贡区 清水湾 中国香港</p>
              <p class="plast">©2021 Hong Kong, powered by Node.js</p>
              <a class="Footer-item"  rel="noopener noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088"><img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png" alt="">京公网安备 11010802020088 号</a>
          </div>
          <div class="right">
              <ul class="connect">
                  <li class="iconfont icon-weixin wechat"></li>
                  <li class="iconfont icon-tubiao209 email"></li>
                  <li class="iconfont icon-weibo weibo"></li>
              </ul>

              <div class="news" @click="update()"><img src="../../../assets/img/news.png" alt=""></div>
          </div>
      </div>
  </div>
</template>


<script>

import img from 'img/webpack.svg'
import img1 from 'img/node.svg'
import img2 from 'img/mongo.png'
import img3 from 'img/npm.png'

export default {
data(){
    return {
        svgURL:img,
        nodeURL:img1,
        mongoURL:img2,
        npmURL:img3
    }
},
methods:{
    update(){
        this.$router.push('/update')
    }
}
}

</script>

<style scoped>
@import '//at.alicdn.com/t/font_2590945_upahsoj6om.css';


@media screen and (max-width:400px) {
   .news {
    
    width: 200px;
    height: 200px;
    margin: 0 auto;
    transition: all .3s ease;
}
}
.news {
    
    width: 200px;
    height: 200px;
    
    transition: all .3s ease;
}

.news:hover {
    cursor: pointer;
    transform: rotate(20deg)
}


.left .webpack {
    width: 60px;
}

.left .npm {
    display: block;
    width: 40px;
}

.left .mongo {
    width: 80px;
    height: 40px;
}

.icon-babel {
    font-size: 25px;
    height: 40px;
}

.box .left .new .node {
    margin-left: 0px;
    width: 40px;
    height: 40px;
}

.bottombar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
    background-color: #34495e;
    
}

.mainbar {
    display: flex;
    width: 85%;
    height: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
  
}

.left {
    min-width: 375px;
    position: relative;
    width: 50%;
    height: cal(100% - 20px);
    margin-top: 20px;
    
    
}

.left img {
    display: inline-block;
    width: 110px;
    background-size: contain;
}



.left img:nth-child(2){
    display: inline-block;
    width: 25px;
    height: 30px;
    margin-left: 20px;
    padding-bottom: 5px;
    
}

.left div {
    display: inline-block;
    width: 50px;
    height: 30px;
    line-height: 30px;
    
    vertical-align: top;
      
}

.left .new {
    position: relative;
    margin-left: -5px;
    width: 400px;
    display: block;
    font-size: 14px;
}

.left .new div {
    
    width: 93px;
    line-height: 30px;
}

.left .new img {
    margin: 10px 10px;
    height: 40px;
}




.left .new i {
    position: absolute;
    top: 85px;
    left: 77px;
    margin-right: 20px;
    font-size: 50px;
    padding: 0;
}



.pfirst {
    margin-top: 100px;
}

p {
    font-size: 12px;
}

.plast {
    margin: 20px 0;
}
.left  .houdunre i {
    display: inline-block;
    height: 30px;
    font-size: 18px;
    font-weight: 600;
    vertical-align:text-bottom;
}

.left .houdunren {
    display: inline-block;
    color: #ee5253;
    margin-left: 10px;
    line-height: 30px;
    font-size: 18px;
    font-weight: 600;
}

.right {
    min-width: 50%;
    display: flex;
    width: 50%;
    height: 100%;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
  
   
}
.connect {
    float: right;
    
    width: 50%;
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
}
.right ul li {
    margin-top: 15px;
    list-style: none;
    color: #bdc3c7;
    font-size: 40px;
    transition: .5s;
}

.wechat:hover {
    transition: .5s;
    color: white;
    cursor: pointer;
}

.wechat:hover::after {
    transition: .5s;
    display: block;
 
}

.wechat {
    position: relative;
}


.wechat::after {
    transition: .5s;
    display: none;
    content: '';
    position: absolute;
    top: 50px;
    left:0;
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    background-image: url(../../../assets/img/wechat.png);
    background-size: contain;
    z-index: 2;
}

.weibo:hover {
    transition: .5s;
    color: white;
    cursor: pointer;
}

.weibo:hover::after {
    transition: .5s;
    display: block;
 
}

.weibo {
    position: relative;
}


.weibo::after {
    transition: .5s;
    display: none;
    content: '';
    position: absolute;
    top: 50px;
    left:-30px;
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    background-image: url(../../../assets/img/wechat.png);
    background-size: contain;
    z-index: 2;
}

.email:hover {
    transition: .5s;
    color: white;
    cursor: pointer;
}

.email:hover::after {
    transition: .5s;
    display: block;
    z-index: 2;
}

.email {
    position: relative;
}


.email::after {
    transition: .5s;
    display: none;
    content: 'Email:812934639@qq.com';
    font-size: 16px;
    color: #95a5a6;
    padding: 10px;
    padding-top: 30px;
    position: absolute;
    top: 50px;
    left:-76px;
    width: 220px;
    height: 80px;
    background-color: white;
    border-radius: 10px;
    z-index: 2;
}



img {
    width: 100%;
}

.Footer-item img {
    width: 20px;
    height: 20px;
    vertical-align: bottom;
}

a {
    display: inline-block;
    width: 200px;
    height: 20px;
    line-height: 20px;
    vertical-align: top;
    font-size: 10px;

}

@media screen and (max-width:420px) {
    .right {
        display: none;
    }
}
</style>