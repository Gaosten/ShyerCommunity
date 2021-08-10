

<template>
  <div id="main">
    <div class="loginenter" @click='loginOrRegister()' v-if="!$store.state.login" ><span class="seclogin">注册/登录</span></div>
    <div class="login"  v-else>
      <div><i class="iconfont icon-arrow-down-filling" ></i>  Hi {{$store.state.name}}</div>
      <div  @click='center()' ><i class="iconfont icon-gerenzhongxin"></i>个人中心</div>
      <div class="public"><i class="iconfont icon-modular" ></i> 我的发布</div>
      <div @click='logOut()'><i class="iconfont icon-icon" ></i> 注销</div>
    </div>
    <div class="search">
      <input type="text">
      <a href="">
        <i class="iconfont icon-sousuo1 searchfont" ></i>
      </a>
    </div>
    
    <nav>
      <a href="/home" class="iconfont icon-jia"></a>
      <a href="/about">关于</a>
      <a href="javascript:;" @click="toStart()">起步</a>
      <a href="/update">更新日志</a>
      <div class="animation start-about"></div>
    </nav>
  </div>
</template>

<script>

export default {
  name:'TabBar',
  created(){
    if(!localStorage.token){
      this.$store.commit('clearStatus')
    } else {
      this.$axios({
        url:'/verify',
        method:'post',
        data:localStorage.token
      }).then(res => {
        
        this.$store.commit('changeStatus',{
          login:true,
          name:res.data.name
        })
        this.$forceUpdate()
      })
    }
  },
  beforeMount(){
    
  },
  mounted(){
  
  },
  data(){
    return{
      login:false,
      username:'',
    }
  },
methods:{
  loginOrRegister() {
    this.$router.push('/login')
  },
  IfLogin(data){
    
    this.login = data[0]
    this.username = data[1]
  },
  logOut(){
    localStorage.removeItem('token')
    this.$store.commit('changeStatus',{
      login:false,
      username:null
    })
    this.$router.go('/home')  
  },
  center(){
    this.$router.push('/center')
  },
  toStart(){
    this.$emit('toStart','hhhh')
  }
}
}
</script>

<style scoped>




@import '//at.alicdn.com/t/font_2590945_q0tpesegonk.css';

.public {
  pointer-events: none;
  cursor: default;
  color: #7f8c8d;
}
#main {
  position: fixed;
  top:0;
  left:0;
  height: 50px;
  width: 100vw;
  z-index: 1000;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  background-color: #2c3e50;
}
.loginenter {
  position:absolute;
  display: inline-block;
  height: 44px;
  width: 150px;
  text-align: center;
  line-height: 45px;
  color: white;
  font-size: 18px;
  border-radius: 15px;
  background-color: #bdc3c7;
  transition: all .5s ease;
  
}

.login {
  overflow: hidden;
  position:absolute;
  display: inline-block;
  height: 44px;
  width: 220px;
  text-align: center;

  line-height: 45px;
  color: white;
  font-size: 18px;
  border-radius: 15px;
  background-color: #bdc3c7;
  transition: all .5s ease;
}

.login div:nth-child(1) {
  overflow: hidden;
}

.loginenter:hover {
  cursor: pointer;
  font-size: 20px;
}

.login div:nth-child(2):hover{
  background-color: #2ecc71;
  
}

.login div:nth-child(3):hover{
  background-color: #2ecc71;
}

.login div:nth-child(4):hover{
  background-color: #2ecc71;
  
}


.search {
  display: inline-block;
  height: 45px;
  margin-left: 230px;
  border-radius: 40px;
  background-color: #34495e;
  padding: 2px;
  
}

.search .searchfont {
  display: inline-block;
  font-size: 20px;
  color: white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #bdc3c7;
  line-height: 40px;
  text-align: center;
  transition: .4s;

}
.search input {
  width: 180px;
  color: white;
}

.search:hover input {
  width: 180px;
  padding: 0 8px;
}


.search:hover .searchfont {
  background: #16a085;
  color:white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  transition: .4s;
  
}

.search input  {
  border:none;
  background: none;
  outline: none;
  width: 0;
  transition: .4s;
  padding: 0;
}
nav a{

display: inline-block;
position: relative;
font-size: 18px;
line-height: 44px;
color: white;
text-align: center;
z-index: 1;
}

a:nth-child(1) {
font-size: 35px;
line-height: 44px;
width: 100px;
vertical-align: bottom;

}

a:nth-child(2) {
width: 100px;
}

a:nth-child(3) {
width: 100px;
}

a:nth-child(4) {
width: 100px;
}



.last {
  margin-right: 20px;
}



nav .animation {
  width: 100px;
  position: absolute;
  top: 0;
  z-index: 0;
  opacity: 0;
  height: 44px;
  border-radius: 9px;
  transition-property: background left;
  transition: left .5s ease 0s;
}

nav {
  
  position: relative;
  float: right;
  width: 400px;
}



a:nth-child(1):hover~.animation {
  background: #bdc3c7;
  opacity: 1;
  width: 100px; 
  left: 0;
}

a:nth-child(2):hover~.animation {
  background: #bdc3c7;
  opacity: 1;
  width: 100px; 
  left: 100px;
}

a:nth-child(3):hover~.animation {
  background: #bdc3c7;
  opacity: 1;
  width: 100px; 
  left: 200px;
}

a:nth-child(4):hover~.animation {
  background: #bdc3c7;
  opacity: 1;
  width: 100px; 
  left: 300px;
}

.login:hover {
  cursor: pointer;
  height: 178px;
}

.seclogin {
  display: block;
  animation: shake .8s infinite alternate-reverse;
}

@keyframes shake {

  100% {
    transform:scale(1.2) ;
  }
}

</style>