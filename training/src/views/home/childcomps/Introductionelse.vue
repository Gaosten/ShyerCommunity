<template>
  <div class="intro2">
      <h2 class="else">或是这样</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


@import '//at.alicdn.com/t/font_2590945_v3z6ztl20sd.css';


.intro2 {
    width: 80%;
    height: 100px;
    margin: 0 auto;
    margin-top: 100px;
    
}
.else {
    float: right;
    font-size: 50px;
    color: #ecf0f1;
    
    width: 250px;
    height: 65px;
    line-height: 50px;
    

}

.else::after {
    content: '\e69b';
    font-family: 'iconfont';
    position: relative;
    left: 20px;
}


</style>