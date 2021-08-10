<template>
  <div class="communitybody">


      <div class="screen">
      <lottie :options="defaultOptions1" :height="100" :width="100" v-on:animCreated="handleAnimation1" />
      <div class="options">
          <ul>
              <li @click="find0()">哈伯根</li>
              <li @click="find1()">恩诺</li>
              <li @click="find2()">乔尔</li>
              <li @click="find3()">安纳西克斯</li>
              <li @click="backToAll()" v-if="all"><i class="iconfont icon-ziyuan"> 返回全局</i></li>
          </ul>
      </div>
      </div>
      <ul class="item">
          <!-- <li v-for="(item,index) in topics" :key="index">

          </li> -->
          <li v-for="(item,index) in topics" :key="index" class="card" @click="toItem(item)">
              <div class="appendixs">
                  
                  <div class="role"><img :src="require('../../../assets/img/characters/'+ item.radio1 +'.png')" alt=""></div>
                  <div class="identifer">{{item.label}}</div>
                  <div></div>
              </div>
              <div class="essay">
                  <h3>{{item.title}}</h3>
                  <div v-if="item.major" class="major">{{item.major}}</div>
                  <div v-if="item.salary" class="salary">{{item.salary}}</div>
                  <div v-if="item.timespan" class="timespan">{{item.timespan}}</div> 
                  <div v-if="item.scale" class="scale">{{item.scale}}</div> 
                  <div v-if="item.diploma" class="diploma">{{item.diploma}}</div> 
                  <section>{{item.desc}}</section>
              </div>

               <div class="time"><i class="iconfont icon-youjiantou1"></i><i class="iconfont icon-duanxin"><i class="commentcount">{{item.commentcount/2}}</i></i>{{item.created_time.split('T')[0]}}</div>

              
          </li>
      </ul>

      
      <lottie :options="defaultOptions" :height="200" :width="200" v-on:animCreated="handleAnimation" />
      <div class="noitem"  v-show="noitem">-The End-</div>
  </div>
</template>

<script>
import end from "../../../assets/lottie/end.json";
import sizer from "../../../assets/lottie/sizer.json";

export default {
created(){
    
       

},
beforeMount(){
    this.getTopicInfo().then(res => {
        this.topics = res.data
        console.log(this.topics);
    })
 
},
mounted(){
    this.$nextTick(function(){
        
        // const ob = new IntersectionObserver();
        // ob.observe()
    })
},
data(){
    return {
         topics:'',
         page:0,
         noitem:false,
         defaultOptions: { animationData: end },
         defaultOptions1: { animationData: sizer },
         animationSpeed: 1,
         anim: {},
         anim1:{},
         all:false,
         plug:true
    }
},
methods:{
 getTopicInfo(){
        return this.$axios({
        url:'/topics',
        method:'get',
        params:{
            'page':this.page
        }
        })
    },
     handleAnimation: function(anim) {
        this.anim = anim;
        console.log(anim); //这里可以看到 lottie 对象的全部属性
    },
    handleAnimation1: function(anim1) {
        this.anim = anim1;
        console.log(anim1); //这里可以看到 lottie 对象的全部属性
    },
    async toItem(item){
        console.log(item);
        this.$store.commit('addItem',{
            item:item
        })
        this.$router.push('/item')
        
    },
    find0(){
        this.$axios({
            url:'/topics/category',
            method:'get',
            params:{
                radio1:0
            }
        }).then(res => {
            this.topics = res.data
            this.all = true
            this.plug = false
            this.$forceUpdate()//更改完数据立即刷新
        })
    },
     find1(){
        this.$axios({
            url:'/topics/category',
            method:'get',
            params:{
                radio1:1
            }
        }).then(res => {
            this.topics = res.data
            this.all = true
            this.plug = false
            this.$forceUpdate()//更改完数据立即刷新
        })
    },
     find2(){
        this.$axios({
            url:'/topics/category',
            method:'get',
            params:{
                radio1:2
            }
        }).then(res => {
            this.topics = res.data
            this.all = true
            this.plug = false
            this.$forceUpdate()//更改完数据立即刷新
        })
    },
     find3(){
        this.$axios({
            url:'/topics/category',
            method:'get',
            params:{
                radio1:3
            }
        }).then(res => {
            this.topics = res.data
            this.all = true
            this.plug = false
            this.$forceUpdate()//更改完数据立即刷新
        })
    },
    backToAll(){
        this.page = 0
        this.plug = true
        this.getTopicInfo().then(res => {
        this.topics = res.data
        console.log(this.topics);
    })
    }
    
    
},
computed:{
    
},
watch:{
    topics:function(){
        this.$nextTick(() => {

            if(this.plug){

            const lis = document.querySelectorAll('.card')
            let ob = new IntersectionObserver(config => {
                
                
                if(config[0].intersectionRatio > 0) {
                    this.page++
                    ob.unobserve(lis[19*this.page])
                    
                     this.$axios({
                        url:'/topics',
                        method:'get',
                        params:{
                            'page':this.page
                        }
                      }).then(res => {
                          this.topics.push(...res.data)
                          this.length = this.topics.length
                          this.topics.length % 20 == 0?this.noitem = false:this.noitem = true
                          
                      })
                }

               
                
            })
            
            ob.observe(lis[19+ 20*(this.page)])
           
            
        }
        })
    }
}
}
</script>

<style scoped>
@import url('//at.alicdn.com/t/font_2590945_cu6n54cuu48.css');

.screen {
    width: 80%;
    margin: 0 auto;
    position: relative;
    
}


.screen:hover .options{
    cursor: pointer;
    opacity: 1;
    width: 60%;
}




.screen .options {
    opacity: 1;
    width: 0;
    height: 80px;
    transition: all .5s ease;
}
.screen .options ul {
    
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    width: inherit;
    position: absolute;
    
    left: 50%;
    transform: translateX(-50%);
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: #bdc3c7;
}

.screen .options ul li {
    width: 25%;
    color: white;
    text-align: center;
    list-style: none;
    display: inline-block;
}

.screen .options ul li:hover {
    background-color: #e67e22;
}


.commentcount {
    
    font-size: 15px;
    
}


.noitem {
    margin: 10px auto;
    margin-bottom: 200px;
    width: 100px;
    text-align: center;
}
.iconfont {
    color: white;
}

.time {
    position: absolute;
    top:282px;
    left:6px;
    width: 98%;
    font-size: 12px;
    color: #95a5a6;

}


.icon-youjiantou1 {
    /* position: absolute; */
    line-height: 20px;
    margin-left: 5px;
    font-size: 25px;
    /* bottom: -6px;
    right: 7%; */
    float: right;
}


.icon-youjiantou1:hover {
    transform: scale(1.1);
}


.icon-duanxin {
      float: right;
      line-height: 20px;
    /* position: absolute; */
    /* right: 2%; */
    /* bottom: -6px; */
    font-size: 25px;
}

.icon-duanxin:hover {
    color: #3498db;
}


.essay div {
    margin-left: 8px;
    margin-bottom: 5px;
}

section {
   color: #d1d8e0;
   margin-left: 8px;
   overflow : hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;

}


.communitybody {
    background-color: #2c3e50;
}

.communitybody .major {
    border-radius: 10px;
    line-height: 30px;
    width: 150px;
    height: 30px;
    color: #ecf0f1;
    background-color: #3c6382;
    text-align: center;
    margin-bottom: 5px;
    
}

.communitybody .salary {
    border-radius: 10px;
    line-height: 30px;
    width: 150px;
    height: 30px;
    color: #ecf0f1;
    background-color: #3c6382;
    text-align: center;
    margin-bottom: 5px;
}


.communitybody .timespan {
    
    border-radius: 10px;
    line-height: 30px;
    width: 120px;
    height: 30px;
    color: #ecf0f1;
    background-color: #3c6382;
    text-align: center;
    margin-bottom: 5px;
}


.communitybody .diploma {
    display: inline-block;
    border-radius: 10px;
    line-height: 30px;
    width: 150px;
    height: 30px;
    color: #ecf0f1;
    background-color: #3c6382;
    text-align: center;
    margin-bottom: 5px; 
}

.communitybody .scale {
    display: inline-block;
    border-radius: 10px;
    line-height: 30px;
    width: 100px;
    height: 30px;
    color: #ecf0f1;
    background-color: #3c6382;
    text-align: center;
    margin-bottom: 5px; 
}

.username {
    width: 118px;
    font-size: 25px;
    text-align: center;

}

h3 {
    height: 45px;
    line-height: 45px;
    font-size: 25px;
    color: #ecf0f1;
    margin-left: 8px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.item {
    margin: 0 auto;
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

.item li {
    
    display: flex;
    position: relative;
    width: 49%;
    min-width: 360px;
    height: 310px;
    background-color: #34495e;
    padding: 15px;
    margin-top: 20px;
    box-shadow: 5px 5px 8px 0 rgba(0, 0, 0, 0.1);
    transition: all .3s ease
}

.item li:hover {
    cursor: pointer;
    transform: translateY(-10px);
    -moz-box-shadow: 0px 0px 32px 5px rgba(0, 0, 0, 0.3); 
	-webkit-box-shadow: 0px 0px 32px 5px rgba(0, 0, 0, 0.3); 
	box-shadow: 0px 0px 32px 5px rgba(0, 0, 0, 0.3); 
}


.identifer {
    position:absolute;
    top:255px;
    left: -15px;
    
    width: 100%;
    border-radius: 15px;
    color: #ecf0f1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-weight: 700;
    
    
}


.avatar {
    height: 40px;
    
    
    
}

.avatar span {
    display: inline-block;
    vertical-align:top;
    height: 40px;
    line-height: 40px;
}

.appendixs {
    position: relative;
    display: inline-block;
}

 .avatar img {

    width: 41px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid #ecf0f1;
}

.role {
    margin-top: 5px;
}
.role img {
     width: 161px;
     height: 243px;
     border-radius: 5px;
}

@media screen and (max-width:400px){
section {
   color: #d1d8e0;
   margin-left: 8px;
   overflow : hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;

}

.communitybody .major {
    border-radius: 10px;
    line-height: 25px;
    width: 150px;
    height: 25px;
    color: #ecf0f1;
    background-color: #3c6382;
    text-align: center;
    margin-bottom: 5px;
    
}

.communitybody .salary {
    border-radius: 10px;
    line-height: 25px;
    width: 150px;
    height: 25px;
    color: #ecf0f1;
    background-color: #3c6382;
    text-align: center;
    margin-bottom: 5px;
}


.communitybody .timespan {
    
    border-radius: 10px;
    line-height: 25px;
    width: 120px;
    height: 25px;
    color: #ecf0f1;
    background-color: #3c6382;
    text-align: center;
    margin-bottom: 5px;
}


.communitybody .diploma {
    display: inline-block;
    border-radius: 10px;
    line-height: 25px;
    width: 150px;
    height:25px;
    color: #ecf0f1;
    background-color: #3c6382;
    text-align: center;
    margin-bottom: 5px; 
}

.communitybody .scale {
    display: inline-block;
    border-radius: 10px;
    line-height: 25px;
    width: 100px;
    height: 25px;
    color: #ecf0f1;
    background-color: #3c6382;
    text-align: center;
    margin-bottom: 5px; 
}

}


</style>