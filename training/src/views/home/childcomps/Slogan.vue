<template>
<div id="slogan">
<div class="slogan">
<span class="first">“</span>
<p>您可能是<span ref="span1" id="one"></span></p>

<span class="second">拒绝焦虑，从这一刻的分享开始。</span>
<div class="tail">”</div>
<img src="../../../assets/img/cloud.png" alt="" class="cloud">
<img src="../../../assets/img/cloud1.png" class="cloud1" alt="">

</div>
</div>
</template>


<script>

import scroll from "../../../assets/lottie/scroll.json";
import {init} from 'ityped'
export default {
data(){
    return {
        defaultOptions: { animationData: scroll},
        animationSpeed: 1,
        anim: {},
        target:''
    }
},
methods:{
    handleAnimation: function(anim) {
        this.anim = anim;
        console.log(anim); //这里可以看到 lottie 对象的全部属性
    }
},
mounted(){
  init(this.$refs.span1, { showCursor: true,cursorChar: "|",strings: ['工作狂。', '学生党。','裸辞勇士。' ,'求职小白。'] });
   
}
}
</script>



<style scoped>



@keyframes float {
    0% {
        opacity: 0.7;
        transform: translateX(-30px);
    }

    25% {
        opacity: 1;
        transform: scale(1.3);
        transform: translateX(30px);
    }

    50% {
        opacity: 0.7;
        transform: translateX(-30px);
    }

    75% {
        opacity: 1;
        transform: scale(1.3);
        transform: translateX(30px);
    }
}




#slogan .start{
  margin: 0 auto;
  color: white;
  display: block;
  width: 80px;
  text-indent: 1.3em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-style: italic;
}

span {
    display: inline-block;
}

#slogan {
    position: relative;
    width: 80%;
    margin: 0 auto;
    margin-top: 100px;
    height: 500px;
}

.slogan {
    position: relative;
    top: 0;
    width: 80%;
    margin: 0 auto;
}

#slogan .first {
    display: block;
    color: #e67e22;
    height: 100px;
    
    font-size: 220px;
    text-shadow: 0px 18px 15px rgba(0, 0, 0, 0.3);
    
}

#slogan p {
    display: block;
    
    height: 135px;
    line-height: 135px;
    color:#ecf0f1;
    font-size: 60px;
}

#slogan p span {
    color:#ecf0f1;
    font-size: 60px;

}

#slogan .second {
    display: block;
    color:#ecf0f1;
    position: relative;
    margin-top: 0;
    
    font-size: 60px;
    height: 100px;
    width: 100%;
    line-height: 100px;

}

#slogan .second::before {
    position: absolute;
    content: '';
    top:38px;
    left:120px;
    width: 122px;
    height: 8px;
    background-color: #e67e22;
}

#slogan .second::after {
    position: absolute;
    content: '';
    top:56px;
    left:120px;
    width: 122px;
    height: 8px;
    background-color: #e67e22;
}



.tail {
    
    width: 100%;
    height: 100px;
    text-align: right;
    color: #e67e22;
    font-size: 220px;
    text-shadow: 0px 18px 15px rgba(0, 0, 0, 0.3);
}


#slogan /deep/ .ityped-cursor {
    display: inline-block;
    font-size: 60px;
    opacity: 1;
    color: #95a5a6;
    -webkit-animation: blink 0.3s infinite;
    -moz-animation: blink 0.3s infinite;
    animation: blink 0.3s infinite;
    animation-direction: alternate;
}
 
@keyframes blink {
    100% {
        opacity: 0;
    }
}
 
@-webkit-keyframes blink {
    100% {
        opacity: 0;
    }
}
 
@-moz-keyframes blink {
    100% {
        opacity: 0;
    }
}

#slogan img {
    z-index: 1;
    position: absolute;
    top:296px;
    left:-100px;
    width: 624px;
    height: 283px;
    background-color: transparent;
    animation: float 25s ease infinite alternate-reverse;
    
}

#slogan .cloud1 {
    z-index: 1;
    position: absolute;
    top:0px;
    left: 500px;
    width: 624px;
    height: 283px;
    background-color: transparent;
    animation: float 20s ease infinite alternate-reverse;
    
}

@media screen and (max-width:420px) {

#slogan .start{
  margin: 0 auto;
  color: white;
  display: block;
  width: 80px;
  text-indent: 1.3em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-style: italic;
}

span {
    display: inline-block;
}

#slogan {
    position: relative;
    width: 95%;
    margin: 0 auto;
    margin-top: 100px;
    height: 500px;
}

.slogan {
    position: relative;
    top: 0;
    width: 95%;
    margin: 0 auto;
}

#slogan .first {
    position: relative;
    top: 47px;
    display: block;
    color: #e67e22;
    height: 100px;
    width: auto;
    font-size: 150px;
    text-shadow: 0px 18px 15px rgba(0, 0, 0, 0.3);
    
}

#slogan p {
    display: block;
    position: relative;
    height: 65px;
    line-height: 135px;
    color:#ecf0f1;
    font-size: 30px;
}

#slogan p span {
    
    color:#ecf0f1;
    font-size: 30px;
    

}

#one {
    width: auto;
}

#slogan .second {
    display: block;
    color:#ecf0f1;
    position: relative;
    margin-top: 25px;
    
    font-size: 30px;
    height: 50px;
    width: 100%;
    line-height: 50px;

}

#slogan .second::before {
    position: absolute;
    content: '';
    top:17px;
    left:60px;
    width: 62px;
    height: 6px;
    background-color: #e67e22;
}

#slogan .second::after {
    position: absolute;
    content: '';
    top:28px;
    left:60px;
    width: 62px;
    height: 6px;
    background-color: #e67e22;
}



.tail {
    
    width: 20%;
    margin-left: auto;
    height: 100px;
    text-align: right;
    color: #e67e22;
    font-size: 150px;
    text-shadow: 0px 18px 15px rgba(0, 0, 0, 0.3);
}

#slogan /deep/ .ityped-cursor {
    width: 15px;
    
    display: inline-block;
    font-size: 30px;
    opacity: 1;
    color: #95a5a6;
    -webkit-animation: blink 0.3s infinite;
    -moz-animation: blink 0.3s infinite;
    animation: blink 0.3s infinite;
    animation-direction: alternate;
}

@keyframes blink {
    100% {
        opacity: 0;
    }
}
 
@-webkit-keyframes blink {
    100% {
        opacity: 0;
    }
}
 
@-moz-keyframes blink {
    100% {
        opacity: 0;
    }
}

#slogan img {
    z-index: 1;
    position: absolute;
    top:296px;
    left:-100px;
    width: 624px;
    height: 283px;
    background-color: transparent;
    animation: float 25s ease infinite alternate-reverse;
    
}

#slogan .cloud1 {
    z-index: 1;
    position: absolute;
    top:0px;
    left: 160px;
    width: 624px;
    height: 283px;
    background-color: transparent;
    animation: float 20s ease infinite alternate-reverse;
    
}

}


</style>

