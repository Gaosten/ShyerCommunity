<template>
    <body>
    <tab-bar-mobile v-if="screenWidth" ></tab-bar-mobile>
    <tab-bar v-else @toStart='toStart'></tab-bar>
    <slogan></slogan>
    <div class="scroll" @click="scrollNext()">
    <lottie ref="arrow"  :options="defaultOptions" :height="150" :width="150" v-on:animCreated="handleAnimation" />
    <div class="start" >Start!</div>
    </div>
    <selection class="select" ref="selection"></selection>
    <swiper ref="intro"></swiper>
    <step-2></step-2>
    <main-body></main-body>
    <bottom-bar></bottom-bar>
    <back-to-up class="top"></back-to-up>
    </body> 
</template>

<script>
import TabBar from '../../components/common/tabbar/TabBar'
import Selection from './childcomps/Selection'
import Introduction from './childcomps/Introduction'
import Swiper from '../../components/common/swiper/Swiper.vue'
import IntroductionElse from './childcomps/Introductionelse'
import MainBody from './childcomps/Mainbody'
import BottomBar from '../../components/common/bottombar/BottomBar'
import Slogan from './childcomps/Slogan.vue'
import Step2 from './childcomps/Step2.vue'
import BackToUp from '../../components/common/backtoup/BackToUp.vue'
import TabBarMobile from '../../components/common/tabbarmobile/TabBarMobile.vue'
import scroll from "../../assets/lottie/scroll.json";



export default {
  components:{
    TabBar,
    Selection,
    Introduction,
    Swiper,
    IntroductionElse,
    MainBody,
    BottomBar,
    Slogan,
    Step2,
    BackToUp,
    TabBarMobile

  },
  data(){
    return {
        defaultOptions: { animationData: scroll},
        animationSpeed: 1,
        anim: {},
        target:'',
        screenWidth:false
    }
  },
  methods:{
    scrollNext(){
      console.log(this.$refs.intro);
      this.$refs.intro.$el.scrollIntoView({behavior:'smooth',block:'nearest'})
      
    
  },
   handleAnimation: function(anim) {
        this.anim = anim;
       
    },
    getMobile(){
      if(document.body.clientWidth < 615){
        this.screenWidth = true
        this.$store.commit('changeScreen')
      }else {
        this.screenWidth = false
        this.$store.commit('clearScreen')
      }
    },
    toStart(msg){
      console.log(msg);
      this.$refs.selection.$el.scrollIntoView({behavior:'smooth',block:'nearest'})
    }
  },
  mounted(){
    
    window.addEventListener('resize', this.getMobile)
    this.getMobile()
   
  }
}

</script>

<style>
@import '//at.alicdn.com/t/font_2590945_zmfabnrrebs.css';

body {
  
  background-color: #2c3e50;
  
}



.select {
  margin-top: 175px;
}

.start {
  opacity: 0;
  position: absolute;
  top: 57px;
  left: 100%;
  width: 80px;
  text-align: center;
  color: white;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-style: italic;
  font-size: 50px;
}

.scroll {
  position: relative;
  z-index: 100;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 50%;
  transition: all .3s ease;
}

.scroll:hover {
  cursor: pointer;
  opacity: 0.9;
  background-color: #f39c12;
}

.scroll:hover .start {
  opacity: 1;

}

@media screen and (max-width:420px){
  .start {
  opacity: 1;
  position: absolute;
  top: 130px;
  left: 30%;
  width: 50px;
  text-align: center;
  color: white;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-style: italic;
  font-size: 25px;
}
}
</style>





