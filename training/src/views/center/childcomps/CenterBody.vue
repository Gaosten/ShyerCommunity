<template>
<div id="center">
<div class="avatar">
  <el-col :span="12">
      <div class="sub-title"> 更改 {{$store.state.username}} 头像</div>
      <div class="demo-basic--circle">
        <div class="block" ref="block"><el-avatar :size="150" fit='fill' :src="avaterURL"></el-avatar></div>
      </div>
  </el-col> 
</div>

<ul class="color">
    <li  @click="substitute(index)" :class='"li" + index' :style="{'background-color':item}" v-for='(item,index) in colors' :key='index'></li>
</ul>

<form>

    
    <span>自定义标签</span>
    <input type="text" v-model="form.label" placeholder="自定义标签会显示在您发布的话题中...">
    <ul>
        <li  @click="upload(index)" v-for="(item,index) in avatars" :key="index"><img :src="item" alt=""></li>
    </ul>
    <div class="gender">
    <input ref="man"    @click="man()" type="radio" v-model='form.gender' value="0">
    <input ref="woman"  @click="woman()" type="radio" v-model='form.gender' value="1">
    <div></div>
    </div>

</form>

<ul class="submit">
    <li @click="save()"><i class="iconfont icon-baocun"></i>保存</li>
    <li><i class="iconfont icon-icon--"></i></li>
</ul>

</div>
</template>

<script>
export default {
mounted(){
    this.lis = document.querySelectorAll('li')
},
data() {
      return {
        colors:[
            '#8e44ad',
            '#27ae60',
            '#3498db',
            '#e67e22',
            '#fd79a8',
            '#6c5ce7',
            '#ffeaa7',
            '#55E6C1'
        ],
        lis:'',
        form:{
          avatarBorder:4,
          gender:'',
          avatarIndex:0,
          label:''
      },
        avatars:[
          require("img/avatars/0.png"),
          require("img/avatars/1.png"),
          require("img/avatars/2.png"),
          require("img/avatars/3.png")
        ],
        avaterURL:require("img/avatars/1.png")
      }
    },
methods:{
    substitute(index){
            
           this.form.avatarBorder = index + 1
           this.$forceUpdate()
           console.log(this.form.gender);
           this.$refs.block.style.borderColor = this.lis[index].style.backgroundColor
           
           const runkeyframes =` @keyframes pulse1 {
             0% {
               transform: scale(1);
               border-color: ${this.colors[index]};
             }
            
             100% {
               transform: scale(1.4); 
               border-color: transparent; 
             }`
            // 创建style标签
            const style = document.createElement('style');
            // 设置style属性
            style.type = 'text/css';
            // 将 keyframes样式写入style内
            style.innerHTML = runkeyframes;
            // 将style样式存放到head标签
            document.getElementsByTagName('head')[0].appendChild(style);

            
                },
        upload(index){
          this.avaterURL = require('img/avatars/' +index +'.png')
          this.form.avatarIndex = index
              },
        man(){
            this.$refs.woman.style.backgroundColor = 'transparent'
            this.$refs.man.style.backgroundColor = '#95a5a6'
      },woman(){
            this.$refs.man.style.backgroundColor = 'transparent'
            this.$refs.woman.style.backgroundColor = '#95a5a6'
      },
      save(){
          localStorage.setItem('avatarIndex',this.form.avatarIndex)
          localStorage.setItem('avatarBorder',this.form.avatarBorder)
          localStorage.setItem('label',this.form.label)
          const data = [this.form,localStorage.getItem('name')]
          this.$axios({
              url:'/center',
              method:'post',
              data:data
          }).then(res => {
              this.$message({
                  type:'success',
                  message:'保存成功'
              })
              console.log('上传成功');
          },err => {
              console.log('失败');
          })
      }

      }
    
}
</script>

<style >
@import url('//at.alicdn.com/t/font_2590945_c6sfasyewlw.css');


li {
    list-style: none;
}

.submit {
    position: absolute;
    perspective: 320px;
    top:490px;
    left:720px;
}
.submit li {
    border-radius: 10px;
    margin: 0 20px;
    display: inline-block;
    width: 80px;
    height: 40px;
    background-color: #ecf0f1;
    text-align: center;
    line-height: 40px;
    transition: .3s linear;
}

.submit li:nth-child(2) {
    width: 40px;
    font-weight: 600;
}

.submit li:nth-child(1):hover {
    cursor: pointer;
    transform: rotateX(20deg);
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.5);
}

.submit li:nth-child(2):hover {
   cursor: pointer;
   transform: scale(1.1);
}

form ul {
    width: 700px;
    height: 150px;
    display: flex;
    justify-content: space-around;
    position: absolute;
    top:-211px;
    left:-22px;
}
form li {
    border-radius: 50%;
    display: inline-block;
    width: 150px;
    height: 150px;
    
    box-shadow: 0px 5px 8px 0 rgba(0, 0, 0, 0.1);
}

form li img {
    
    border-radius: 50%;
    width: 150px;
    height: 150px;
    transition: all .5s ease;
    
}

form li img:hover {
    cursor: pointer;
    
    box-shadow: 9px 10px 8px 0 rgba(0, 0, 0, 0.8);
}

form {
    position: absolute;
    top:320px;
    right:0px;
}

form input {
    display: block;
    width: 700px;
    height: 40px;
    font-size: 20px;
    color: #bdc3c7;
    outline: none;
    border-radius: 15px;
    background-color: #34495e;
    text-indent: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
}

form .gender {
    border-radius: 15px;
    position: absolute;
    top:-293px;
    left:-1px;
}

form .gender input[type=radio] {
    
    display: inline-block;
    width: 60px;
    height: 35px;
    -webkit-appearance: none;
    
}
form .gender input {
    position: relative;
    z-index: 0;
    background: transparent;
}




form .gender input:nth-child(1)::before{
    position: absolute;
    top:6px;
    left:0;
    content: '\e639';
    font-family: 'iconfont';

}

form .gender input:nth-child(2)::before{
    position: absolute;
    top:6px;
    left:0;
    content: '\e63f';  
    font-weight: 600;
    font-family: 'iconfont';

}

form .gender input:nth-child(1):hover {
    cursor: pointer;
    

}

form .gender input:nth-child(2):hover {
    cursor: pointer;
    

}

form span {

    height: 30px;
    line-height: 30px;
    display: inline-block;
    color: white;
}

form span:nth-child(2) span{ 
    position: relative;
    top:0;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: inline-block;
}



#center {
    position: relative;
    width: 80%;
    height: 800px;
    background-color: #2c3e50;
    margin: 100px auto;
    z-index: 0;
    
}

.avatar {
    width: 80%;
    height: 250px;
    margin: 20px 0;
}

.avatar .el-col  .sub-title{
    text-align: center;
    line-height: 39px;
    background-color: #bdc3c7;
    height: 40px;
    width: 200px;
    border-radius: 15px;
    color: white;
    margin: 30px 0;
    margin-left: -18px;
    font-size: 20px;
    
}

.avatar .el-col .block {
    position: relative;
    box-sizing: content-box;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 8px solid #e67e22; ;
    z-index: 1;
}

.avatar .el-col .block span {
    position: absolute;
  
}

.avatar .el-col .block::before{
  content: '';
  position: absolute;
  left: 0;
  top:0;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 8px solid #e67e22; 
  border-radius: 50%; 
  background: transparent; 
  animation: pulse1 2s cubic-bezier(.57, .06, .27, .84) infinite; 
  z-index: 0; 
}

.avatar .el-col .demo-basic--circle {
    width: 200px;
}



@keyframes pulse1 {
  0% {
    transform: scale(1);
    border-color: #e67e22;
  }

  100% {
    transform: scale(1.4); 
    border-color: transparent; 
  }
}



.color {
    margin: 50px -30px;
    width: 230px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.color li {
    border: 5px solid #bdc3c7;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin: 5px 5px;
    
}


</style>