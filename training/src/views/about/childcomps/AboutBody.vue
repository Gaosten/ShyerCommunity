<template>
  <div class="aboutbody">
      <div class="main">
          <h2>关于 我</h2>
          <lottie :options="defaultOptions" :height="200" :width="200" v-on:animCreated="handleAnimation" />
          <div class="biochinese">Jesko，本科北京化工大学，目前是香港科技大学在读硕士，业余爱好前端技术，
              数据挖掘，AI炼丹家。喜欢猫猫狗狗，弹吉他。梦想是造出属于自己的沙雕轮子，早日成为轮子哥。
          </div>
          <div class="bio">Jesko, undergraduate in mechanical automation at Beijing University of Chemical Technology for four years, currently a master's degree in mechanical and Internet of Things engineering at Hong Kong University of Science and Technology, hobby of Web, front-end technology,
               Data mining. Like EMO, guitar. The dream is to create your own sand sculpture wheel and become the wheel brother as soon as possible.</div>
          <ul>
              <li><a href=""><i class="iconfont icon-github"></i></a></li>
              <li><a href="https://space.bilibili.com/248622428?from=search&seid=16917590402169685857"><i class="iconfont icon-bilibili"></i></a></li>
          </ul>
          <h2>关于 Shyer®</h2>
          <lottie :options="defaultOptions1" :height="100" :width="100" v-on:animCreated="handleAnimation1" />
          <div class="biochinese"> 希望大家在工作这方面不要焦虑，适合自己的就是最好的，更不要道听途说，把每份职业的从业感受分享出来，别 shy ，去 share，所以网站叫Shyer吧。</div>
          <div class="bio">I hope that everyone will not be anxious in this aspect of chasing work. What suits you is the best, not to mention hearsay, share the experience of each profession, don't shy, go to share, so just call it Shyer.</div>

      
      
      
      </div>
  </div>
</template>

<script>
import dog from "../../../assets/lottie/dog.json";
import company from "../../../assets/lottie/company.json";


export default {
data(){
    return {
        defaultOptions: { animationData: dog},
        defaultOptions1: { animationData: company},
        animationSpeed: 1,
        anim: {},
        anim1: {}
    }
},
methods:{
     handleAnimation: function(anim) {
        this.anim = anim;
        console.log(anim); //这里可以看到 lottie 对象的全部属性
    },
    handleAnimation1: function(anim1) {
        this.anim1 = anim1;
        console.log(anim1); //这里可以看到 lottie 对象的全部属性
    }
}
}
</script>

<style scoped>
@import '//at.alicdn.com/t/font_2590945_po5vo0u5jtd.css';



ul {
    width: 30%;
    margin: 20px auto;
    height: 100px;
    display: flex;
    justify-content: center;
}


li {
    margin:0 auto;
    display: inline-block;
    list-style: none;
    width: 20%;
    text-align: center;
    
}

.icon-github {
    color: white;
    font-size: 40px;
    text-decoration: heighlight;
    
}

.icon-github:hover {
    cursor: pointer;
    text-shadow: 5px 5px 5px black;
}

.icon-bilibili {
    font-size: 40px;
    color: #ffffff;
    
}

.icon-bilibili:hover {
    cursor: pointer;
    text-shadow: 5px 5px 5px black;
}

.aboutbody {
    margin-top: 50px;
    background-color: #2c3e50;
}


.main {
    width: 85%;
    
    margin: 0 auto;
    padding-top: 50px;
    
}


h2 {
    background-color: #bdc3c7;
    border-radius: 20px;
    text-align: center;
   
    margin:0 auto;
    line-height: 60px;
    color: white;
    height: 60px;
    
}

.bio {
    width: 60%;
    margin: 50px auto;
    text-align: center;
    
}

.biochinese {
    width: 60%;
    margin: 20px auto;
    text-align: center;
    color: snow;
}

@media screen and (max-width:420px){

ul {
    width: 100%;
    margin: 0 auto;
}
}

</style>