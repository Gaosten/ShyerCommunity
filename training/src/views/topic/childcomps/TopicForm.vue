<template>
<div id="topic">
<div class="box">
  <el-form ref="form" :model="form" label-width="80px" :rules="rules">
  <el-form-item label="" prop="title">
    <el-input v-model="form.title" placeholder="请输入标题"></el-input>
  </el-form-item>
    <el-divider></el-divider>
    <h3>现实中您最贴近以下哪个角色<el-popover
        placement="top-start"
        title="关于角色"
        width="200"
        trigger="hover"
        content="您应该挺了解自己的吧，根据您现在自身状况选择一个角色吧，不要看脸，看描述选。">
        <el-button slot="reference">?</el-button>
        </el-popover></h3>
        
    <div class="outerselection">
    <el-radio-group v-model="form.radio1" class="selection">
      <el-radio-button @click.native="role11()" label="0"><i style="font-size:40px" class="iconfont icon-zhouma"></i> 哈伯根</el-radio-button>
      <el-radio-button @click.native="role22()" label="1"><i style="font-size:40px" class="iconfont icon-gaxiao"></i> 乔尔</el-radio-button>
      <el-radio-button @click.native="role33()" label="2"><i style="font-size:40px" class="iconfont icon-konghuang"></i> 恩诺</el-radio-button>
      <el-radio-button @click.native="role44()" label="3"><i style="font-size:40px" class="iconfont icon-fengci"></i>安纳</el-radio-button>
    </el-radio-group>
    </div>

     <div class="roles">
       <ul class="regular">
         <li  @click="changeRole(index)" v-for="(item,index) in images" :key="index">
           <img :src="item" alt="">
         </li>
         <li>
           哈伯根在高塔之中工作了数载，赚得盆满钵满，可是他对高塔的管理和平时的工作已经厌恶至极，离开高塔时，哈伯根回头望了望，心里似乎又有了年轻时的干劲
           <div> 关键词: 离职者，不满足行业现状</div>
           </li>
         <li>乔尔是高塔之中的名人，技术的天花板，对于他而言，工作即是生活，生活即是工作，他的座右铭是：‘子非鱼，焉知鱼之乐？
           <div> 关键词: 技术专家，热爱工作</div>
         </li>
         <li>恩诺望着大厦高耸进入云层，心里嘀咕着早晚有一天里面会有一张属于自己的椅子（但心里更多的却是焦虑与不安）
           <div> 关键词: 找工作中，迷茫...</div>
         </li>
         <li>安纳上班的第一天起就充满了迷茫，她热爱生活，更热爱工作，她盯了盯面前的电脑，心里盘算着和男朋友的旅行计划能否照常进行...
           <div> 关键词: 工作小白，在工作与生活中挣扎</div>
         </li>
       </ul>
       

        <ul class="shadow">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
     </div>

     <el-divider></el-divider>

  <div id="salary" >
    <transition name="slide-fade">
    <div v-if="form.radio1 != 2">
     <h3>选择您的薪资水平范围
       <el-popover
        placement="top-start"
        title="关于薪资"
        width="200"
        trigger="hover"
        content="填写薪资水平，使您的发布更具说服力，也会吸引更多看重工资的朋友来做考量">
        <el-button slot="reference">?</el-button>
        </el-popover>
        </h3>

      <el-select class="salary" v-model="form.salary" clearable placeholder="请选择" popper-class="selection-option"  :popper-append-to-body='false'>
        <el-option
          v-for="item in salarys"
          :key="item.salary"
          :label="item.label"
          :value="item.salary">
        </el-option>
      </el-select>
      </div>
      </transition>
    </div>

  <div id="timespan">
    <transition name="slide-fade">
    <div v-if="form.radio1 != 2">
       <h3>选择您的从业时间跨度
       <el-popover
        placement="top-start"
        title="关于从业时间"
        width="200"
        trigger="hover"
        content="填写从业时间，与您的角色选择匹配">
        <el-button slot="reference">?</el-button>
        </el-popover>
        </h3>

      <el-select class="timespan" v-model="form.timespan" clearable placeholder="请选择" popper-class="selection-option"  :popper-append-to-body='false'>
        <el-option
          v-for="item in timespans"
          :key="item.timespan"
          :label="item.label"
          :value="item.timespan">
        </el-option>
      </el-select>
      </div>
      </transition>
    </div>

  <div id="major">

       <h3>选择您所在的行业名称
       <el-popover
        placement="top-start"
        title="关于行业"
        width="200"
        trigger="hover"
        content="填写行业，我们可能会在首页划分专区">
        <el-button slot="reference">?</el-button>
        </el-popover>
        </h3>

      <el-select class="major" v-model="form.major" clearable placeholder="请选择" popper-class="selection-option"  :popper-append-to-body='false'>
        <el-option
          v-for="item in majors"
          :key="item.major"
          :label="item.label"
          :value="item.major">
        </el-option>
      </el-select>
    </div>

    <div id="diploma">

       <h3>选择您的学历水平
       <el-popover
        placement="top-start"
        title="关于学历"
        width="200"
        trigger="hover"
        content="学历作为求职的重要参考，希望你可以如实填写，您可以填写最高学历，也可以填写第一学历">
        <el-button slot="reference">?</el-button>
        </el-popover>
        </h3>

      <el-select class="diploma" v-model="form.diploma" clearable placeholder="请选择" popper-class="selection-option"  :popper-append-to-body='false'>
        <el-option
          v-for="item in diplomas"
          :key="item.diploma"
          :label="item.label"
          :value="item.diploma">
        </el-option>
      </el-select>
    </div>

    <div id="job">
       <transition name="slide-fade">
        <div v-if="form.radio1 != 2">
      <h3>选择您所在的公司规模
       <el-popover
        placement="top-start"
        title="关于公司规模"
        width="200"
        trigger="hover"
        content="填写公司规模，方便其他用户更好的了解您的分享">
        <el-button slot="reference">?</el-button>
        </el-popover>
        </h3>

      <el-select class="job" v-model="form.scale" clearable placeholder="请选择" popper-class="selection-option" :popper-append-to-body='false'>
        <el-option style="width:80%"
          v-for="item in scales"
          :key="item.scale"
          :label="item.label"
          :value="item.scale">
        </el-option>
      </el-select>
      </div>
      </transition>
    </div>

     <el-form-item label="" prop="content">
       <el-input type="textarea" v-model="form.desc" placeholder="请输入你你要发布的正文" rows="15"></el-input>
     </el-form-item>
     <el-form-item>
       <el-button type="primary" @click="onSubmit">立即发布</el-button>
       <el-button @click="cancel()">取消</el-button>
     </el-form-item>
</el-form>
</div>
</div>

</template>



<script src="//unpkg.com/element-ui@2.15.2/lib/index.js"></script>


<script>
export default {
    beforeUpdate(){
     
    },
    data() {
      return {
         rules:{
                title:[{required:true,message:'标题不得为空',tigger:'blur'},
                {min:3,max:16,message:'长度应该在3~16个字符',tigger:'blur'}],
                
            },
        screen:document.body.clientWidth,
        form: {
          scale:'',
          title: '',
          desc: '',
          radio1:0,
          salary:'',
          timespan:'',
          major:'',
          diploma:'',
          username:this.$store.state.name,
          avatarIndex:localStorage.getItem('avatarIndex'),
          avatarBorder:localStorage.getItem('avatarBorder')
        },
        images:[
          require("img/characters/0.png"),
          require("img/characters/1.png"),
          require("img/characters/2.png"),
          require("img/characters/3.png")
        ],
        salarys: [{
          salary: '￥6000以下',
          label: '￥6000以下',   
        }, {
          salary: '￥6000~10000',
          label: '￥6000~10000',
        }, {
          salary: '￥10000~15000',
          label: '￥10000~15000',
        }, {
          salary: '￥15000~25000',
          label: '￥15000~25000',
        }, {
          salary: '￥25000及以上',
          label: '￥25000及以上',
        }],
        timespans:[{
          timespan:'实习中',
          label:'实习中'
        },
        {
          timespan:'1年以内',
          label:'1年以内'
        },
        {
          timespan:'1年~3年',
          label:'1年~3年'
        },
        {
          timespan:'3年~7年',
          label:'3年~7年'
        },
        {
          timespan:'8年及以上',
          label:'8年及以上'
        }],
        majors:[
          {
            major:'互联网',
            label:'互联网'
          },
          {
            major:'机械及自动化相关',
            label:'机械及自动化相关'
          }
        ],
        scales:[
          {
            scale:'巨大型',
            label:'巨大型'
          },
          {
            scale:'大型',
            label:'大型'
          },
          {
            scale:'中小型',
            label:'中小型'
          },
          {
            scale:'创业者',
            label:'创业者'
          }
        ],
        diplomas:[
          {
            diploma:'前十985高校',
            label:'前十985高校'
          },
          {
            diploma:'海外本科院校',
            label:'海外本科院校'
          },
          {
            diploma:'一般985及211高校',
            label:'一般985及211高校'
          },
          {
            diploma:'其它本科院校',
            label:'其它本科院校'
          },
          {
            diploma:'专科院校',
            label:'专科院校'
          }

        ]

        
       
        
      }
       
    },
    computed:{
      pictures(index){
      
          return require("../../../assets/img/characters/" + index + ".png")
      }
    },
    methods: {
      onSubmit() {
        if(this.form.salary == '' && this.form.radio1 != 2){
         
          this.$message({
            type:'warning',
            message:'您的薪资信息还没有填写'
          })
        }
        else if(this.form.scale == '' && this.form.radio1 != 2){
          
          this.$message({
            type:'warning',
            message:'您的公司规模还没有填写'
          })
        }
        else if(this.form.timespan == '' && this.form.radio1 != 2){
          
          this.$message({
            type:'warning',
            message:'您的从业时间还没有填写'
          })
        }
        else if(this.form.diploma == ''){
          
          this.$message({
            type:'warning',
            message:'您的学历信息还没有填写'
          })
        }
        else if(this.form.major == ''){
          
          this.$message({
            type:'warning',
            message:'您的行业信息还没有填写'
          })
        }
        else if(this.form.title == ''){
          
          this.$message({
            type:'warning',
            message:'您的发布标题还没有填写'
          })
        }
        else if(this.form.desc == ''){
          
          this.$message({
            type:'warning',
            message:'您的发布内容还没有填写'
          })
        }else {
      
        this.$axios({
          url:'/topics',
          method:'post',
          data:this.form
        }).then(res => {
          this.$message({
            type:'success',
            message:'发布成功！'
          })
          this.$router.push('/community')
          
        })
        }
      },
      changeRole(index){
       this.form.radio1 = index
        this.$forceUpdate()
      
      
       
      },
      cancel(){
        
       this.$router.go(-1)
      
        
      }
      
        
      

    }
  }


</script>

<style scoped>
@import '//at.alicdn.com/t/font_2590945_97fgiwkvl0i.css';

body  .el-form /deep/ .el-form-item__error {
  left: 50% !important;
}

.outerselection {
  width: 100%;
  text-align: center;
}
h3 {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 20px;
  color: #ecf0f1;

}

i {
  vertical-align: middle;
}
#topic {
    background-color: #2c3e50;
}

.box {
    width: 90%;
    margin: 0px auto;
    padding: 100px;
    background-color: #2c3e50;
}

.box /deep/ .el-input__inner {

  height: 50px;
  border: 0px;
  outline: none;
  font-size: 25px;
}

.el-form /deep/ .selection-option {
  width: 100% !important;
}

.box /deep/ .el-radio {
  width: 50px;
}

.box  /deep/ .el-form-item__content {
  margin-left: 0 !important;
}

.box /deep/ .el-radio__inner {
  border: 0px;
}



.box .el-form .selection /deep/ .el-radio-button__inner {
  font-size: 25px;
  line-height: 45px;
  width: 200px;
  height: 70px;
}

#salary {
  
  margin: 0 auto;
}
.salary  {
  display: flex;
  margin: 40px auto;
  height: 30px;
  font-size: 20px;
}

.job {
  display: flex;
  margin: 40px auto;
  margin-bottom: 100px;
}

.major {
  display: flex;
  margin: 40px auto;
}

.diploma {
  display: flex;
  margin: 40px auto;
}

.timespan {
  display: flex;
  margin: 40px auto;
}

/* .salary /deep/ .el-input /deep/ input {
  width: 50px;
  flex: 1;
} */

body /deep/ .selection-option {
  border: 0px !important;
  width: 300px !important;
  
}

body /deep/ .el-input_icon {
  margin-right: auto;
}

.selection {
  width: 100%;
 
}

.roles {
  position: relative;
  width: 80%;
  margin: 0 auto;
}

.roles ul li {
  display: inline-block;
}

.roles ul li img {
  width: 161px;
  height: 243px;
  border-radius: 12px;
}


.roles .regular {
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  position: relative;
  z-index: 1;
  margin: 50px 0;
  margin-bottom: 150px;
  flex-wrap: wrap;
}

.shadow {
  position: absolute;
  display: flex;
  z-index: 0;
  top:0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}

.shadow li {
  display: inline-block;
  width: 161px;
  height: 243px;
  border-radius: 12px;
  background: #34495e;
  min-width: 161px;
}




.roles ul li:nth-child(5) {
  padding: 10px;
  text-indent: 2em;
  opacity: 0;
  position: absolute;
  width: 100%;
  height:143px;
  bottom: -148px;
  left: 32px;
  color: #7f8c8d;
  background: transparent;
  border-radius: 6px;
  transition: all .5s ease;
}

.roles ul li:nth-child(5) div {
   text-indent: 0;
  margin-top: 20px;
  padding: 5px;
  line-height: 30px;
  font-weight: bold;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  
}

.roles ul li:nth-child(5)::before {
  content: '哈伯根';
  display: block;
  text-indent: 0;
  width: 60px;
  height: 30px;
  font-size: 18px;
  background-color: black;
  color: white;
  position: absolute;
  top:-15px;
  left:-10px;
  transform: rotate(-30deg);
}

.roles ul li:nth-child(6) {
   padding: 10px;
  text-indent: 2em;
  opacity: 0;
  position: absolute;
  width: 868px;
  height:143px;
  bottom: -148px;
  left: 32px;
  color: #7f8c8d;
  background: transparent;
  border-radius: 12px;
  transition: all .5s ease;
}

.roles ul li:nth-child(6) div {
   text-indent: 0;
  margin-top: 20px;
  padding: 5px;
  line-height: 30px;
  font-weight: bold;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  
}

.roles ul li:nth-child(6)::before {
  content: '乔尔';
  display: block;
  text-indent: 0;
  width: 60px;
  height: 30px;
  font-size: 18px;
  background-color: black;
  color: white;
  position: absolute;
  top:-15px;
  left:-10px;
  transform: rotate(-30deg);
}


.roles ul li:nth-child(7) {
  padding: 10px;
  text-indent: 2em;
  opacity: 0;
  position: absolute;
  width: 868px;
  height:143px;
  bottom: -148px;
  left: 32px;
  color: #7f8c8d;
  background: transparent;
  border-radius: 12px;
  transition: all .5s ease;
}


.roles ul li:nth-child(7) div {
   text-indent: 0;
  margin-top: 20px;
  padding: 5px;
  line-height: 30px;
  font-weight: bold;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  
}
.roles ul li:nth-child(7)::before {
  content: '恩诺';
  display: block;
  text-indent: 0;
  width: 60px;
  height: 30px;
  font-size: 18px;
  background-color: black;
  color: white;
  position: absolute;
  top:-15px;
  left:-10px;
  transform: rotate(-30deg);
}


.roles ul li:nth-child(8) {
  padding: 10px;
  text-indent: 2em;
  opacity: 0;
  position: absolute;
  width: 868px;
  height:143px;
  bottom: -148px;
  left: 32px;
  color: #7f8c8d;
  background: transparent;
  border-radius: 12px;
  transition: all .5s ease;
}


.roles ul li:nth-child(8) div {
   text-indent: 0;
  margin-top: 20px;
  padding: 5px;
  line-height: 30px;
  font-weight: bold;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  
}

.roles ul li:nth-child(8)::before {
  content: '安纳';
  display: block;
  text-indent: 0;
  width: 60px;
  height: 30px;
  font-size: 18px;
  background-color: black;
  color: white;
  position: absolute;
  top:-15px;
  left:-10px;
  transform: rotate(-30deg);
}



.box span /deep/ .el-button {
  float: right;
  border-radius: 8px;
  width: 16px;
  height: 16px;
  padding: 0;
  vertical-align: middle !important;
  text-align: center;
  
}

.box h3 /deep/ span {
  float: right;
  width: 16px;
  height: 16px;
  text-align: center;
}

.box h3 .el-button /deep/ span {
 
  width: 14px;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  text-align: center;
}

.box .el-form-item__content button {
  width: 102px;
  height: 47px;
  line-height: 1.6;
}

.box .el-form-item__content button /deep/ span{
  display: inline-block;
  width: 56px;
  height: 16px;
  font-size: 14px;

}

.roles .regular li:nth-child(1):hover  {
  cursor: pointer;
  transform: translate(-15px,-15px); 
}

.roles .regular li:nth-child(1):hover~ li:nth-child(5) {
  opacity: 1;
  height: 100px;

}

.roles .regular li:nth-child(2):hover {
  cursor: pointer;
  transform: translate(-15px,-15px); 
}

.roles .regular li:nth-child(2):hover~ li:nth-child(6) {
  opacity: 1;
  height: 100px;

}

.roles ul li:nth-child(3):hover {
  cursor: pointer;
  transform: translate(-15px,-15px); 
}

.roles ul li:nth-child(3):hover~ li:nth-child(7) {
  opacity: 1;
  height: 100px;

}

.roles ul li:nth-child(4):hover {
  cursor: pointer;
  transform: translate(-15px,-15px); 
}

.roles ul li:nth-child(4):hover~ li:nth-child(8) {
  opacity: 1;
  height: 100px;

}



.regular li {
  min-width: 161px;
}

.regular li:nth-child(1) {

  transition: all .5s ease;
}

.regular li:nth-child(2) {

  transition: all .5s ease;
}


.regular li:nth-child(3) {

  transition: all .5s ease;
}


.regular li:nth-child(4) {

  transition: all .5s ease;
}



.el-textarea /deep/ textarea{
 
  resize: none;
  font-size: 16px;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


.el-textarea /deep/ .el-textarea__inner:hover {
  border: 2px solid #ecf0f1;

}

.el-textarea {
  border-radius: 0;
  width: 100%;
  margin: 0 auto;
}


.el-form-item__content .el-button{
  margin-left: 27%;
  border-radius: 20px;
  
}

.el-form-item__content .el-button  {
  overflow: hidden;
}

.el-form-item__content .el-button:hover{
  transform: scale(1.1);
}


@media screen and (max-width:400px){


  
body  .el-form /deep/ .el-form-item__error {
  left: 40% !important;
}

  h3 {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 20px;
  color: #ecf0f1;

}

i {
  vertical-align: middle;
}
#topic {
    background-color: #2c3e50;
}

.box {
    width: 100%;
    margin: 0px auto;
    padding: 50px;
    background-color: #2c3e50;
}

.box /deep/ .el-input__inner {

  height: 30px;
  line-height: 30px;
  border: 0px;
  outline: none;
  font-size: 18px;
}


.el-form /deep/ i {
  display: none !important;
}
.el-form ::-webkit-input-placeholder {
  font-size: 20px;
}

.box /deep/ .el-radio {
  width: 50px;
}

.box  /deep/ .el-form-item__content {
  margin-left: 0 !important;
}

.box /deep/ .el-radio__inner {
  border: 0px;
}



.box .el-form .selection /deep/ .el-radio-button__inner {
  font-size: 15px;
  line-height: 18px;
  width: 100px;
  height: 40px;
  text-align: center;
}

i {
  display: none;
}

.salary  {
  display: flex;
  margin: 40px auto;
}

.job {
  display: flex;
  margin: 40px auto;
  margin-bottom: 100px;
}

.major {
  display: flex;
  margin: 40px auto;
}

.diploma {
  display: flex;
  margin: 40px auto;
}

.timespan {
  display: flex;
  margin: 40px auto;
}

/* .salary /deep/ .el-input  {
  width: 80% !important;
  flex: 1;
} */

body  .selection-option {
  border: 0px !important;
  width: 10% !important;
}

.selection {
  width: 80%;
  margin: 0 auto;
 
}

.roles {
  position: relative;
  width: 80%;
  margin: 0 auto;
}

.roles ul li {
  display: inline-block;
  
}

.roles ul li img {
  width: 80px;
  height: 121px;
  border-radius: 12px;
}


.roles .regular {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 1;
  margin: 50px 0;
  margin-bottom: 250px;
  flex-wrap: wrap;
}

.shadow {
  position: absolute;
  display: flex;
  z-index: 0;
  top:0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}

.shadow li {
  display: inline-block;
  width: 80px;
  height: 121px;
  border-radius: 12px;
  background: #34495e;
  min-width: 80px;
}




.roles ul li:nth-child(5) {
  padding: 10px;
  text-indent: 2em;
  opacity: 0;
  position: absolute;
  width: 100%;
  height:143px;
  bottom: -148px;
  left: 10px;
  color: #7f8c8d;
  background: transparent;
  border-radius: 6px;
  transition: all .5s ease;
}

.roles ul li:nth-child(5) div {
  text-indent: 0;
  margin-top: 20px;
  padding: 3px;
  line-height: 20px;
  font-weight: bold;
  border-radius: 4px;
  color: white;
  font-size: 12px;
  background-color: #e67e22;
}

.roles ul li:nth-child(5)::before {
  content: '哈伯根';
  display: block;
  text-indent: 0;
  width: 60px;
  height: 30px;
  font-size: 18px;
  background-color: black;
  color: white;
  position: absolute;
  top:-15px;
  left:-10px;
  transform: rotate(-30deg);
}

.roles ul li:nth-child(6) {
   padding: 10px;
  text-indent: 2em;
  opacity: 0;
  position: absolute;
  width: 100%;
  height:143px;
  bottom: -148px;
  left: 10px;
  color: #7f8c8d;
  background: transparent;
  border-radius: 12px;
  transition: all .5s ease;
}

.roles ul li:nth-child(6) div {
  text-indent: 0;
  margin-top: 20px;
  padding: 3px;
  line-height: 20px;
  font-weight: bold;
  border-radius: 4px;
  color: white;
  font-size: 12px;
  background-color: #e67e22;
}




.roles ul li:nth-child(6)::before {
  content: '乔尔';
  display: block;
  text-indent: 0;
  width: 60px;
  height: 30px;
  font-size: 18px;
  background-color: black;
  color: white;
  position: absolute;
  top:-15px;
  left:-10px;
  transform: rotate(-30deg);
}


.roles ul li:nth-child(7) {
  padding: 10px;
  text-indent: 2em;
  opacity: 0;
  position: absolute;
  width: 100%;
  height:143px;
  bottom: -148px;
  left: 10px;
  color: #7f8c8d;
  background: transparent;
  border-radius: 12px;
  transition: all .5s ease;
}

.roles ul li:nth-child(7) div {
   text-indent: 0;
  margin-top: 20px;
  padding: 3px;
  line-height: 20px;
  font-weight: bold;
  border-radius: 4px;
  color: white;
  font-size: 12px;
  background-color: #e67e22;
}


.roles ul li:nth-child(7)::before {
  content: '恩诺';
  display: block;
  text-indent: 0;
  width: 60px;
  height: 30px;
  font-size: 18px;
  background-color: black;
  color: white;
  position: absolute;
  top:-15px;
  left:-10px;
  transform: rotate(-30deg);
}


.roles ul li:nth-child(8) {
  padding: 10px;
  text-indent: 2em;
  opacity: 0;
  position: absolute;
  width: 100%;
  height:143px;
  bottom: -148px;
  left: 10px;
  color: #7f8c8d;
  background: transparent;
  border-radius: 12px;
  transition: all .5s ease;
}

.roles ul li:nth-child(8) div {
   text-indent: 0;
  margin-top: 20px;
  padding: 3px;
  line-height: 20px;
  font-weight: bold;
  border-radius: 4px;
  color: white;
  font-size: 12px;
  background-color: #e67e22;
}


.roles ul li:nth-child(8)::before {
  content: '安纳';
  display: block;
  text-indent: 0;
  width: 60px;
  height: 30px;
  font-size: 18px;
  background-color: black;
  color: white;
  position: absolute;
  top:-15px;
  left:-10px;
  transform: rotate(-30deg);
}



.box span /deep/ .el-button {
  float: right;
  border-radius: 8px;
  width: 16px;
  height: 16px;
  padding: 0;
  vertical-align: middle !important;
  text-align: center;
  
}



.box h3 /deep/ span {
  float: right;
  width: 16px;
  height: 16px;
  text-align: center;
}

.box h3 .el-button /deep/ span {
 
  width: 14px;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  text-align: center;
}

.box .el-form-item__content button {
  width: 102px;
  height: 47px;
  line-height: 1.6;
}

.box .el-form-item__content button /deep/ span{
  display: inline-block;
  width: 56px;
  height: 16px;
  font-size: 14px;

}

.roles .regular li:nth-child(1):hover  {
  cursor: pointer;
  transform: translate(-15px,-15px); 
}

.roles .regular li:nth-child(1):hover~ li:nth-child(5) {
  opacity: 1;
  height: 100px;

}

.roles .regular li:nth-child(2):hover {
  cursor: pointer;
  transform: translate(-15px,-15px); 
}

.roles .regular li:nth-child(2):hover~ li:nth-child(6) {
  opacity: 1;
  height: 100px;

}

.roles ul li:nth-child(3):hover {
  cursor: pointer;
  transform: translate(-15px,-15px); 
}

.roles ul li:nth-child(3):hover~ li:nth-child(7) {
  opacity: 1;
  height: 100px;

}

.roles ul li:nth-child(4):hover {
  cursor: pointer;
  transform: translate(-15px,-15px); 
}

.roles ul li:nth-child(4):hover~ li:nth-child(8) {
  opacity: 1;
  height: 100px;

}




.regular li {
  min-width: 81px;
}

.regular li:nth-child(1) {

  transition: all .5s ease;
}

.regular li:nth-child(2) {

  transition: all .5s ease;
}


.regular li:nth-child(3) {

  transition: all .5s ease;
}


.regular li:nth-child(4) {

  transition: all .5s ease;
}



.el-textarea /deep/ textarea{
 
  resize: none;
  font-size: 16px;
}



/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


.el-textarea /deep/ .el-textarea__inner:hover {
  border: 2px solid #ecf0f1;

}

.el-textarea {
  border-radius: 0;
  width: 100%;
  margin: 0 auto;
}


.el-form-item__content .el-button{
  margin-left: 30%;
  border-radius: 20px;
  margin-top: 10px;
  
}

.el-form-item__content .el-button  {
  overflow: hidden;
}

.el-form-item__content .el-button:hover{
  transform: scale(1.1);
}


}


</style>