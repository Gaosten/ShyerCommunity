<template>
  <div class="intro" ref="intro">
      <h2><i class="iconfont icon-mubiao"></i>选择您的角色</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


@import '//at.alicdn.com/t/font_2590945_02nisfd7cwix.css';


.intro {
    width: 80%;
    height: 100px;
    margin: 0 auto;
    
}

h2 {
    
    font-size: 50px;
    color: #ecf0f1;
    width: 250px;
    height: 65px;
    line-height: 50px;
    

}

h2::after {
    content: '\e69b';
    font-family: 'iconfont';
    position: relative;
    left: 20px;
}


h2 i {
    width: 50px;
    height: 50px;
    font-size: 25px;
}

</style>