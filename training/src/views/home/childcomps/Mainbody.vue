<template>
<div>
  <div class="main">
      
      <main>
      <h2 class="iconfont icon-shizililiang"> 分享的强大力量</h2>
      <span>您可能是即将进入社会的应届生，会有对未来的迷茫，对学长，学姐工作的向往；</span>
      <span>您可能已在社会摸爬滚打多年，尝尽了生活的复杂，想回头对学生时代的自己说些肺腑之言</span>
      <span>您也可能已在‘求职’过程中大获全胜，即将在公司伏龙降虎</span>
      <span>您也可能...</span>

      <span class="second">希望每个人通过分享自己真实的求职,在职，行业经历和工作状态来帮助他人去做一些人生的选择和参考</span>
      <span class="last">希望匿名的方式可以换来真诚而大胆的的交流，而不是胡乱的吹水，拒绝内卷匹夫有责。</span>
      </main>
  </div>

  <div class="mainclone"></div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>



.main {
    z-index: 1;
    position: relative;
    color: #ecf0f1;
    width: 100%;
    padding-bottom: 50px;
    margin: 0 auto;
    text-align: center;
    background:#2c3e50;
    clip-path: ellipse(75% 100% at center top);
}

.mainclone {
    z-index: 0;
    position: absolute;
    top:3622px;
    left:0;
    width: 100%;
    height: 150px;
    background-color: #34495e;

}


main h2 {
    font-weight: 500;
    margin: 0 auto;
    margin-bottom: 40px;
    width: 700px;
    height: 80px;
    font-size: 55px !important;
    text-align: center;
    line-height: 80px;
    background-color: #27ae60;
    border-radius: 20px;
    color: white;
   
}

span {
    
    display: block;
    font-size: 18px;
    height: 30px;
}


.second {
    margin-top: 100px;
}


@media screen and (max-width: 420px){
    main h2 {
    font-weight: 500;
    margin: 0 auto;
    margin-bottom: 40px;
    width: 250px;
    height: 40px;
    font-size: 25px !important;
    text-align: center;
    line-height: 40px;
    background-color: #27ae60;
    border-radius: 10px;
    color: white;
   
}

span {
    margin: 15px auto;
    width: 350px;
    display: block;
    font-size: 12px;
    height: 30px;
}

.second {
    margin-top: 20px;
}

.last {
    margin-bottom: 50px;
}

.mainclone {
    display: none;
}
}
</style>