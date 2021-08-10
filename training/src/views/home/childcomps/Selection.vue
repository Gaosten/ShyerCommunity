<template>
<div class="father">
  <div class="selection">
      <div class="anxious">
          <div class="anface">
          <div class="eye1" ref="eye1"></div>
          <div class="eye2" ref="eye2"></div>
          </div>
          <div class="mouth1"></div>
          <div class="anxiousclick" @click='toComment()'>发布卡片</div>
      </div>
      <div class="teacher">
        <span class="iconfont icon-glasses"></span>
        <div class="reface">
          <div class="eye1" ></div>
          <div class="eye2"></div>
        </div>
        <div class="mouth2"></div>
        <div class="teacherclick" @click="toCommunity()">浏览卡片</div>
      </div>
  </div>



  </div>
</template>

<script>
export default {
 name:'Selection',
 mounted(){
   this.$bus.$on('toStart',function(){
     
   })
 },
 methods:{
   toComment(){
    this.$router.push('/topic')

   },
   toCommunity(){
     this.$router.push('/community')
   }
 }

}
</script>

<style scoped>
@import '//at.alicdn.com/t/font_2590945_fnyz8b0w2h6.css';



.father {
  margin-bottom: 50px;
  width: 100%;
  
}
.selection{
  display: flex;
  width: 100%;
  
  justify-content: space-around;
  flex-direction: row;
  overflow: hidden;
  flex-wrap: wrap;

  
 
}

.anxious::before {
  content: '';
  position: absolute;
  left: 0;
  border-radius: 50%;
  width: 325px;
  height: 325px;
  border: 4px solid #e67e22; 
  border-radius: 50%; 
  background: transparent; 
  animation: pulse1 1.5s cubic-bezier(.57, .06, .27, .84) infinite; 
  
-webkit-backface-visibility: hidden;  
-moz-backface-visibility: hidden;  
-ms-backface-visibility: hidden; 
backface-visibility: hidden;  
-webkit-perspective: 1000;  
-moz-perspective: 1000;  
-ms-perspective: 1000;  
perspective: 1000;   /* Other transform properties here */

  z-index: 1; 
}


.anxious,.teacher {
    position: relative;
    margin: 80px 0px;
    width: 325px;
    height: 325px;
    border-radius: 50%;
    background-color: #e67e22;
    text-align: center;
    line-height: 300px;   
}


.anxiousclick,.teacherclick {
  position: relative;
  top:59px;
  left:100px;
  
  width: 125px;
  height: 40px;
  border: 3px solid #bdc3c7;
  border-radius: 20px;
  color: #bdc3c7;
  line-height: 34px;
  text-align: center;
  z-index: 2;
 


}
.teacher {

  position: relative;
  background-color: #2ecc71;
  
}

.teacher::before {
  content: '';
  position: absolute;
  left: 0;
  border-radius: 50%;
  width: 325px;
  height: 325px;
  border: 4px solid #2ecc71; 
  border-radius: 50%; 
  background: transparent; 
  animation: pulse2 1.5s cubic-bezier(.57, .06, .27, .84) infinite; 
  
-webkit-backface-visibility: hidden;  
-moz-backface-visibility: hidden;  
-ms-backface-visibility: hidden; 
backface-visibility: hidden;  
-webkit-perspective: 1000;  
-moz-perspective: 1000;  
-ms-perspective: 1000;  
perspective: 1000;   /* Other transform properties here */

  z-index: 1; 
}

.click {
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: space-around;
}



.mouth1,.mouth2 {
  
  margin: 30px auto;
  width: 120px;
  height: 30px;
  border-bottom: 10px solid #2c3e50;
  border-radius: 50%;
  color: #bdc3c7;
  line-height: 34px;
  text-align: center;
  transition: 1s;
}


.eye1,.eye2 {
  transition: 1s;
  height: 20px;
  width: 100px;
  border-bottom: 15px solid #2c3e50;
}

.teacher .reface:nth-child(n) div {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #2c3e50;
  border: 20px solid #2c3e50;
  
}




.anface,.reface {
  margin-top: 100px;
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-around;
}

 .anxiousclick:hover,  .teacherclick:hover {
  box-shadow: 7px 7px rgba(0,0,0,0.5);
}

.anxious:hover  .anface > .eye1 {
  transition: 1s;
  transform: rotate(-30deg);
}

.anxious:hover  .anface > .eye2 {
  transition: 1s;
  transform: rotate(30deg);
}

.anxious:hover > .mouth1 {
   transition: 1s;
   transform: rotate3D(1,0,0,180deg);
}

.box {
  position:relative;
  width: 400px;
  height: 400px;
}

.teacher span:nth-child(1) {
  transition: 1s;
  position:absolute;
  width: 300px;
  height: 300px;
  left: 550px;
  top: -24px;
  font-size: 300px;

}

.teacher:hover > span:nth-child(1){
  transition: 1s;
  left: 15px;


}

.teacher:hover .reface:nth-child(n) div{
  transition: 1s;
  background-color: #fff;
  border-left: 25px solid #2c3e50;
  border-right: 10px solid #2c3e50;
}

@keyframes pulse1 {
  0% {
    transform: scale(1);
    border-color: #e67e22;
  }

  100% {
    transform: scale(1.2); 
    border-color: transparent; 
  }
}

@keyframes pulse2 {
  0% {
    transform: scale(1);
    border-color: #2ecc71;
  }

  100% {
    transform: scale(1.2); 
    border-color: transparent; 
  }
}

</style>

