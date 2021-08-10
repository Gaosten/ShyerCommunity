<template>
  <div class="swiper">
      <div class="basewrapper">
      <div class="rightwrapper">
      <div class="outerwrapper">
      <div class="wrapper">
      <main>
      <section>
        <div><img src="../../../assets/img/swiper-resource/0.png" alt=""></div>
        <div><img src="../../../assets/img/swiper-resource/1.png" alt=""></div>
        <div><img src="../../../assets/img/swiper-resource/2.png" alt=""></div>
        <div><img src="../../../assets/img/swiper-resource/3.png" alt=""></div>
        <div><img src="../../../assets/img/swiper-resource/0.png" alt=""></div>
      </section>

      <ul>
        <li class="iconfont icon-fangkuang"></li>
        <li class="iconfont icon-xingzhuang-sanjiaoxing"></li>
        <li class="iconfont icon-cha"></li>
        <li class="iconfont icon-yuanquanquan"></li>
     </ul>
    </main>
    </div>
    </div>
    </div>
    </div>

   



    
  </div>
</template>

<script>
export default {
    name:"Swiper"
}
</script>

<style scoped>


@import '//at.alicdn.com/t/font_2590945_02nisfd7cwix.css';

.swiper {
    
    display: grid;
    background-color: #2c3e50;
    width: 100%;
}

.basewrapper {
    width: 100%;
    background: url('../../../assets/img/back1.png') no-repeat;
    background-size: contain;
}

.outerwrapper {
    width: 100%;
    background: url('../../../assets/img/back2.png') no-repeat;
    background-size: contain;
}

.rightwrapper {
    width: 100%;
    background: url('../../../assets/img/back3.png') no-repeat right center;
    background-size: contain;
}

.wrapper {
    width: 100%;
    background: url('../../../assets/img/glow.png') no-repeat center;
    background-size: contain;
}



main {
    position: relative;
    width: 900px;
    margin: 0 auto;
    align-self: center;
    justify-self: center;
    overflow: hidden;
    background: url('../../../assets/img/moon.png') no-repeat ;
    background-size: 46%;
}

section {
  
    width: 4500px;
    height: 1000px;
    display: grid;
    /* overflow: hidden; */
    grid-template: 1fr/repeat(5,900px);
    animation-name: slide;
    animation-duration: 12s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
}

img {
    width: 100%;
    height: 1000px;
    
}

.tab {
    position: relative;
    background-color: #2c3e50;
    height: 30px;
}

ul {
    
    position: absolute;
    left:50%;
    bottom: 10px;
    transform: translateX(-50%);
    display: grid;
    grid-template: 1fr/repeat(4,1fr);
   
}

li {
    
    list-style: none;
    width: 40px;
    text-align: center;
    font-weight: 700;
}

ul li:nth-child(1){
    color: white;
    animation: li1 12s infinite;
}

ul li:nth-child(2){
    color: white;
    animation: li2 12s infinite;
}

ul li:nth-child(3){
    color: white;
     animation: li3 12s infinite;
}

ul li:nth-child(4){
    color: white;
    font-weight: 400;
    animation: li4 12s infinite;
}

@keyframes li1 {
    20% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes li2 {
    45% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
    
}

@keyframes li3 {
    70% {
        transform: rotate(0deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes li4 {
   
    95% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
@keyframes slide {
  

    20% {
        transform:translateX(0px);
    }

     25%{
        transform:translateX(-900px);
    }

    45% {
        transform:translateX(-900px);
    }
    

     50%{
        transform:translateX(-1800px);
    }

    70% {
        transform:translateX(-1800px);
    }
    

    75%{
        transform:translateX(-2700px);
    }

    95% {
        transform:translateX(-2700px);
    }

    100% {
        transform: translateX(-3600px);
    }
    
    
}

section:hover,
section:hover+ul > li {
    cursor: pointer;
    animation-play-state: paused;
   
}


main::before {
    content: '1.选择您的角色';
    position: absolute;
    top: 50px;
    left: 246px;
    width: 400px;
    height: 80px;
    font-size: 55px;
    text-align: center;
    line-height: 80px;
    background-color: #27ae60;
    border-radius: 20px;
    color: white;
}
section div {
    position: relative;
}
section div:nth-child(1)::before {
    content: '恩诺';
    position: absolute;
    top: 221px;
    left: 690px;
    width: 200px;
    height: 80px;
    font-size: 55px;
    text-align: center;
    line-height: 80px;
    background-color: #e67e22;
    transform:rotate(15deg);
    color: white;
}

section div:nth-child(1)::after {
    content: '恩诺望着大厦高耸进入云层，心里嘀咕着早晚有一天里面会有一张属于自己的椅子（但心里更多的却是焦虑与不安）';
    position: absolute;
    top: 305px;
    left: 339px;
    width: 400px;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    color: white;
}

section div:nth-child(2)::before {
    content: '哈伯根';
    position: absolute;
    top: 221px;
    left: 690px;
    width: 200px;
    height: 80px;
    font-size: 55px;
    text-align: center;
    line-height: 80px;
    background-color: #e67e22;
    transform:rotate(15deg);
    color: white;
}

section div:nth-child(2)::after {
    content: '哈伯根在高塔之中工作了数载，赚得盆满钵满，可是他对高塔的管理和平时的工作已经厌恶至极，离开高塔时，哈伯根回头望了望，心里似乎又有了年轻时的干劲';
    position: absolute;
    top: 305px;
    left: 339px;
    width: 400px;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    color: white;
}
section div:nth-child(3)::before {
    content: '乔尔';
    position: absolute;
    top: 221px;
    left: 690px;
    width: 200px;
    height: 80px;
    font-size: 55px;
    text-align: center;
    line-height: 80px;
    background-color: #e67e22;
    transform:rotate(15deg);
    color: white;
}

section div:nth-child(3)::after {
    content: '乔尔是高塔之中的名人，技术的天花板，对于他而言，工作即是生活，生活即是工作，他的座右铭是：‘子非鱼，焉知鱼之乐？’';
    position: absolute;
    top: 305px;
    left: 339px;
    width: 400px;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    color: white;
}

section div:nth-child(4)::before {
    content: '安纳西克斯';
    position: absolute;
    top: 221px;
    left: 590px;
    width: 300px;
    height: 80px;
    font-size: 55px;
    text-align: center;
    line-height: 80px;
    background-color: #e67e22;
    transform:rotate(15deg);
    color: white;
}

section div:nth-child(4)::after {
    content: '安纳上班的第一天起就充满了迷茫，她热爱生活，更热爱工作，她盯了盯面前的电脑，心里盘算着和男朋友的旅行计划能否照常进行...';
    position: absolute;
    top: 305px;
    left: 339px;
    width: 400px;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    color: white;
}




section div:nth-child(5)::before {
    content: '恩诺';
    position: absolute;
    top: 221px;
    left: 690px;
    width: 200px;
    height: 80px;
    font-size: 55px;
    text-align: center;
    line-height: 80px;
    background-color: #e67e22;
    transform:rotate(15deg);
    color: white;
}

section div:nth-child(5)::after {
    content: '恩诺望着大厦顶部藏在云朵的朦胧之中，心里嘀咕着早晚有一天大厦里面会有一张属于自己的椅子';
    position: absolute;
    top: 305px;
    left: 339px;
    width: 400px;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    color: white;
}


@media screen and (max-width:420px){
    

main {
    
    position: relative;
    width: 350px;
    margin: 0 auto;
    align-self: center;
    justify-self: center;
    overflow: hidden;
    background: url('../../../assets/img/moon.png') no-repeat ;
    background-size: 46%;
}

section {
  
    width: 1750px;
    height: 400px;
    display: grid;
    /* overflow: hidden; */
    grid-template: 1fr/repeat(5,350px);
    animation-name: slide;
    animation-duration: 12s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
}

img {
    width: 100%;
    height: 400px;
    
}

.tab {
    position: relative;
    background-color: #2c3e50;
    height: 30px;
}

@keyframes slide {
  

    20% {
        transform:translateX(0px);
    }

     25%{
        transform:translateX(-350px);
    }

    45% {
        transform:translateX(-350px);
    }
    

     50%{
        transform:translateX(-700px);
    }

    70% {
        transform:translateX(-700px);
    }
    

    75%{
        transform:translateX(-1050px);
    }

    95% {
        transform:translateX(-1050px);
    }

    100% {
        transform: translateX(-1400px);
    }
    
    
}

section:hover,
section:hover+ul > li {
    cursor: pointer;
    animation-play-state: paused;
   
}


main::before {
    content: 'I.选择您的角色';
    position: absolute;
    top: 0px;
    left: 80px;
    width: 200px;
    height: 40px;
    font-size: 25px;
    text-align: center;
    line-height: 40px;
    background-color: #27ae60;
    border-radius: 10px;
    color: white;
}
section div {
    position: relative;
}
section div:nth-child(1)::before {
    content: '恩诺';
    position: absolute;
    top: 121px;
    left: 240px;
    width: 100px;
    height: 40px;
    font-size: 25px;
    text-align: center;
    line-height: 40px;
    background-color: #e67e22;
    transform:rotate(15deg);
    color: white;
}

section div:nth-child(1)::after {
    content: '恩诺望着大厦顶部藏在云朵的朦胧之中，心里嘀咕着早晚有一天大厦里面会有一张属于自己的椅子（但心里更多的却是焦虑与不安）';
    position: absolute;
    top: 180px;
    left: 160px;
    width: 180px;
    font-size: 10px;
    text-align: center;
    line-height: 14px;
    color: white;
}

section div:nth-child(2)::before {
    content: '哈伯根';
    position: absolute;
    top: 121px;
    left: 240px;
    width: 100px;
    height: 40px;
    font-size: 25px;
    text-align: center;
    line-height: 40px;
    background-color: #e67e22;
    transform:rotate(15deg);
    color: white;
}

section div:nth-child(2)::after {
    content: '哈伯根工作多年，赚得盆满钵满，可是他对高塔已经厌恶至极，离开时，哈伯根回头望了望，心里似乎又有了年轻时的干劲';
    position: absolute;
    top: 180px;
    left: 160px;
    width: 180px;
    font-size: 10px;
    text-align: center;
    line-height: 14px;
    color: white;
}
section div:nth-child(3)::before {
    content: '乔尔';
    position: absolute;
    top: 121px;
    left: 240px;
    width: 100px;
    height: 40px;
    font-size: 25px;
    text-align: center;
    line-height: 40px;
    background-color: #e67e22;
    transform:rotate(15deg);
    color: white;
}

section div:nth-child(3)::after {
    content: '乔尔是高塔之中的名人，技术的天花板，对于他而言，工作即是生活，生活即是工作，他的座右铭是：‘子非鱼，焉知鱼之乐？’';
    position: absolute;
   top: 180px;
    left: 140px;
    width: 200px;
    font-size: 10px;
    text-align: center;
    line-height: 14px;
    color: white;
}

section div:nth-child(4)::before {
    content: '安纳西克斯';
    position: absolute;
    top: 121px;
    left: 210px;
    width: 130px;
    height: 40px;
    font-size: 25px;
    text-align: center;
    line-height: 40px;
    background-color: #e67e22;
    transform:rotate(15deg);
    color: white;
}

section div:nth-child(4)::after {
    content: '安娜上班的第一天起就充满了迷茫，她热爱生活，更热爱工作，她盯了盯面前的电脑，心里盘算着和男朋友的旅行计划能否照常进行...';
    position: absolute;
    top: 180px;
    left: 160px;
    width: 180px;
    font-size: 10px;
    text-align: center;
    line-height: 14px;
    color: white;
}




section div:nth-child(5)::before {
    content: '恩诺';
    position: absolute;
    top: 121px;
    left: 240px;
    width: 100px;
    height: 40px;
    font-size: 25px;
    text-align: center;
    line-height: 40px;
    background-color: #e67e22;
    transform:rotate(15deg);
    color: white;
}

section div:nth-child(5)::after {
    content: '恩诺望着大厦顶部藏在云朵的朦胧之中，心里嘀咕着早晚有一天大厦里面会有一张属于自己的椅子';
    position: absolute;
    top: 305px;
    left: 339px;
    width: 400px;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    color: white;
}



}

</style>