<template>
   <div class="secstep">
        <ul>
            <li><div class="title"><i class="iconfont icon-xinzi"></i> 薪资水平</div><div class="content">填写薪资水平，使您的发布更具说服力，也会吸引更多看重工资的朋友来做考量！</div></li>
            <li><div class="title"><i class="iconfont icon-time"></i> 从业时间</div><div class="content">填写从业时间，与您的角色选择匹配,吸引更多大咖！</div ></li>
            <li><div class="title"><i class="iconfont icon-xingye"></i> 所在行业</div><div class="content">填写行业，他人可在首页专区快速定位到您的卡片！</div></li>
            <li><div class="title"><i class="iconfont icon-tijikongjian-xianxing"></i> 公司规模</div><div class="content">填写公司规模，方便其他用户更好的了解您的故事！</div></li>
            <li><div class="title"><i class="iconfont icon-xuelixinxichaxun"></i> 学历水平</div><div class="content">学历作为求职的重要参考，希望你可以如实填写，您可以填写最高学历，也可以填写第一学历！</div></li>
            <li><div class="interface"><a  href="/topic">Go !</a></div></li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('//at.alicdn.com/t/font_2590945_rd559qsliee.css');
.secstep ul li:last-child {
    padding-top: 50px;
}

.secstep .interface {
    position: relative;
    width: 150px;
    height: 60px;
    font-size: 50px;
    background-color: #bdc3c7;
    color: white;
    text-decoration: none;
    border-radius: 20px;
}


.secstep .interface::before {
  content: '';
  position: absolute;
  left: 0;
  
  width: 150px;
  height: 60px;
  border: 4px solid #bdc3c7; 
  border-radius: 20px;
  background: transparent; 
  animation: pulse1 1.5s cubic-bezier(.57, .06, .27, .84) infinite; 
  z-index: 0; 
}

@keyframes pulse1 {
  0% {
    transform: scale(1);
    border-color: #bdc3c7;
  }

  100% {
    transform: scale(1.1); 
    border-color: transparent; 
  }
}

.secstep .interface::after {
    content: '\e619';
    position: absolute;
    top: -32px;
    right: -20px;
    font-family: 'iconfont';
    transform: rotate(-15deg);
}


a {
    position: relative;
    z-index:2;
    display: block;
    width: 100%;
    line-height: 60px;
    text-align: center;
    color: white;
    transition: all .3s ease;
}

a:hover {
    cursor: pointer;
    font-size: 40px;
}
.secstep {
    position: relative;
    padding-top: 160px;
    width: 80%;
    margin: 0 auto;
    top: 0;
    
}

.secstep::before {
    content:'2.介绍自己';
    position: absolute;
    top: 50px;
    left: 35%;
    width: 400px;
    height: 80px;
    font-size: 55px;
    text-align: center;
    line-height: 80px;
    background-color: #27ae60;
    border-radius: 20px;
    color: white;

}


.secstep ul {
    width:100%;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.secstep li {
    width: 50%;
    min-width: 375px;
    height: 200px;
    list-style: none;
    display: inline-block;
    display: flex;
    margin-bottom: 10px;
}

.secstep li .content {
    position: relative;
    color: white;
    height: 70%;
    padding: 15px 10px;
    font-size: 20px;
    /* background-color: #95a5a6; */
    border-radius: 10px;

}

.secstep li .title {
    position: relative;
    display: inline-block;
    margin: auto auto;
    width: 200px;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    text-align: center;
    color: white;
    transform: rotate(-15deg);
    background-color: #e67e22;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
}



.secstep li .title i{
    font-size: 30px;
}


.secstep li .title::before {
    content: '';
    position: absolute;
    top: 12px;
    left: -1px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-left: 40px solid #2c3e50;
   
}

.secstep li .title::after {
    content: '';
    position: absolute;
    top: 55px;
    right: -1px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-right: 25px solid #2c3e50;
}

.secstep li div {
    display: inline-block;
    margin: 0 auto;
    width: 200px;
    height: 80px;
}


@media  screen and (max-width:420px) {
    .secstep::before {
    content:'II.介绍自己';
    position: absolute;
    top: 50px;
    left: 25%;
    width: 150px;
    height: 40px;
    font-size: 25px;
    text-align: center;
    line-height: 40px;
    background-color: #27ae60;
    border-radius: 10px;
    color: white;

}
}
</style>