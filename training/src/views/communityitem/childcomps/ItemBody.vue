<template>
  <div id="item">
      <div class="card">
      <div class="include">
      <h1 class="title">{{item.title}} </h1>
      <div class="time">{{item.created_time.split('T')[0]}}</div>
      </div>
      <div class="avatar"><img :src="require('../../../assets/img/avatars/'+ item.avatarIndex +'.png')" alt=""></div>
      <div class="username">{{item.username}}</div>
      <div class="role"><img src="" alt=""></div>
      <div class="label">{{item.label}}</div>


      
      <div v-if="item.diploma" class="diploma">{{item.diploma}}</div>
      <div v-if="item.major" class="major">{{item.major}}</div>
      <div v-if="item.scale" class="scale">{{item.scale}}</div>
      <div v-if="item.timespan" class="timespan">{{item.timespan}}</div>
      <div v-if="item.salary" class="salary">{{item.salary}}</div>
      <div v-if="item.desc" class="desc">{{item.desc}}</div>
      <div  class="clickcomment" @click="addShow()"><i class="iconfont icon-pinglun"></i> </div>
      </div>
      

       <div class="addcomment" v-if="addc">          
          <div class="before">|</div>
          <div class="peravatar"><img :src="require('../../../assets/img/avatars/'+ peravatar +'.png')" alt=""></div>
          <div class="creator">{{$store.state.name}}</div>
          <textarea class="add" v-model="form.comment" placeholder="说点啥呢..."></textarea>
          <div class="button" @click="push()">发表</div>
      </div>


      <div class="comment">
      
      <ul>
          <li v-for="(item,index) in commentList" :key="index">
              <div class="avatarcomment"><img :src="require('../../../assets/img/avatars/'+ item.avatarIndex +'.png')" alt=""></div>
              <div class="namecomment">{{item.name}}</div>
              <div class="timecomment">{{item.created_time.split('T')[0]}}</div>
              <div class="percomment">{{item.comment}}</div>

            <div class="wrapper"  v-if="showSec && currentLi == index">
               <div  class="seccomment" v-for="(item1,index1) in item.seccomment" :key="index1">
                  <div class="secavatar"><img :src="require('../../../assets/img/avatars/'+ Index +'.png')" alt=""></div>
                  <div class="from">{{item1.from}}</div>
                  <div class="transition" v-if="item1.to"><i class="iconfont icon-youjiantou"></i></div>
                  <div class="to">{{item1.to}}</div>
                  <div class="replytime">{{item1.time.split(' ')[0]}}</div>
                  <div class="seccontent">{{item1.content}}</div>
                  <div class="replyuser" @click="replysec(index1)"  v-if="adds && currentIndex1 == index1">取消</div>
                  <div class="replyuser" @click="replysec(index1)"  v-else><i class="iconfont icon-icon_reply"></i></div>
                  <div class="deletereply" v-if="item1.name == $store.state.name?true:false"></div>
                  <input class="replysec" type="text" :placeholder="'回复' + item1.from + '...'" v-if="adds && currentIndex1 == index1" v-model="replysecond">
                  <div class="sendsec" v-if="adds && currentIndex1 == index1" @click="replyToSecond(item1)">回复</div>
                </div>
            </div>



              <div class="addreply" v-if="addr && currentIndex == index">
                  <input type="text" placeholder="说点什么..." v-model="reply">
                  <div class="submitreply"  @click="replyComment(item)" ><i class="iconfont icon-fabu"></i></div>
              </div>
              <div class="delete"  @click="deleteComment(item)" v-show="$store.state.name == item.name?true:false"  ><i class="iconfont icon-lajitong1"></i></div>
              <div class="reply" @click="replyShow(index)">...</div>
              <div class="expand" v-if="showSec && currentLi == index" @click="expand(index)">收起</div>
              <div class="expand" v-else @click="expand(index)"><i class="iconfont icon-duihua"></i> 查看回复({{item.seccomment.length}})</div>
          </li>
      </ul>
      </div>

      


     

  </div>
</template>

<script>
export default {
activated(){
this.$axios({
    url:'/comment',
    method:'get',
    params:{
        _id:this.$store.state.item._id
    }
}).then(res => {
    console.log(res);
    this.commentList = res.data
})
this.item = this.$store.state.item
this.form.topicId = this.$store.state.item._id

},
data(){
    return {
        item:'',
        form:{
            comment:'',
            name:localStorage.getItem('name'),
            topicId:'',
            avatarIndex:localStorage.getItem('avatarIndex'),
            avatarBorder:localStorage.getItem('avatarBorder')
        },
        commentList:'',
        peravatar:localStorage.getItem('avatarIndex'),
        addc:false,
        addr:false,
        adds:false,
        reply:'',
        Index:localStorage.getItem('avatarIndex'),
        replysecond:'',
        currentIndex1:null,
        currentIndex:null,
        showSec:false
    }
},
methods:{
    push(){
        this.$axios({
            url:'/comment',
            method:'post',
            data:this.form
        }).then(res => {
            return this.$axios({
                url:'/add',
                method:'get',
                params:{
                    _id:this.$store.state.item._id
                }
            })
        }).then(res => {
                this.$router.go(0)
            
                this.$message({
                    type:'success',
                    message:'发表成功'
                })
            })

    
         

        

    },
    deleteComment(item){

        console.log('第一次');
        this.$axios({
            url:'/comment/delete',
            method:'get',
            params:{
                _id:item._id
            }
        }).then(res =>{
            console.log('第二次');
            return this.$axios({
                url:'/topics/delete',
                method:'get',
                params:{
                    topicId:item.topicId
                }
            })
        }).then(res => {
            this.$router.push('/community')
            this.$message({
                type:'success',
                message:'删除成功'
            })

            
        })

       
    },
    replyComment(item){

        let obj = {};
        obj.id = item._id
        obj.from = this.$store.state.name
        obj.content = this.reply
        obj.time = new Date().toLocaleString().split(':')[0] + '时'

        this.$axios({
            url:'/comment/second',
            method:'post',
            data:obj
        }).then(res => {
            this.$message({
                type:'success',
                message:'回复评论成功 '
            })
            this.$router.go(0)
            console.log(res.data);
        })
    },
    replyToSecond(item1){
        let obj = {};
        obj.id = item1.id
        obj.from = this.$store.state.name
        obj.to = item1.from
        obj.content = this.replysecond
        obj.time = new Date().toLocaleString().split(':')[0] + '时'

        this.$axios({
            url:'/comment/second',
            method:'post',
            data:obj
        }).then(res => {
            this.$message({
                type:'success',
                message:'回复评论成功 '
            })
            this.$router.go(0)
            console.log(res.data);
        })
    },
    addShow(){
        this.addc = !this.addc
    },
    replyShow(index){
        this.addr = !this.addr
        this.currentIndex = index

    },
    replysec(index1){
        console.log(index1);
        this.adds = !this.adds
        this.currentIndex1 = index1

    },
    expand(index){
        this.currentLi = index
        this.showSec = !this.showSec
    }
}
}
</script>

<style scoped>
@import '//at.alicdn.com/t/font_2590945_odvufr0w8td.css';

.replytime {
    position: absolute;
    right: 4px;
    font-size: 10px;
    display: inline-block;
    vertical-align: top;
    height: 30px;
    width: auto;
    line-height: 30px;
    margin-left: auto;
}

.expand {
    position: relative;
    bottom: -45px;
    font-size: 12px;
    color: #bdc3c7;
    margin: 0 auto;
    height: 25px;
    line-height: 25px;
    border-radius: 0px 0px 8px 8px;
    width: 100px;
    text-align: center;
    background-color: #34495e;
}

.transition {
    vertical-align: top;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    margin: 0 5px;
}

.transition i {
    color:white;
    font-size: 10px;
}

.to {
    vertical-align: top;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    
}
.sendsec {
    opacity: 0;
    position: absolute;
    bottom: 10px;
    right: 70px;
    font-size: 16px;
    line-height: 30px;
    margin-right: auto;
    width: 50px;
    height: 30px;
    text-align: center;
    border-radius: 10px;
    color:white;
    background-color: #27ae60;
}

.replysec::-webkit-input-placeholder {
    color: #bdc3c7;
}

.replysec {
    opacity: 0;
    position: absolute;
    bottom: 10px;
    right: 130px;
    outline: none;
    background-color: #e67e22;
    border: none;
    border-radius: 10px;
    height: 30px;
    width:40%;
    text-indent: .5em;
    color: white;
}
.seccomment .replyuser{
    opacity: 0;
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 16px;
    line-height: 30px;
    margin-right: auto;
    width: 50px;
    height: 30px;
    text-align: center;
    border-radius: 10px;
    color:white;
    background-color: #e67e22;
    
}

.seccontent {
    margin: 10px 0px;
    padding-bottom: 50px;
    color: #ecf0f1;
}
.seccomment {
    box-sizing: border-box;
    padding: 0 4px;
    padding-top: 5px;
    position: relative;
    
    border-radius: 10px;
    margin-bottom: 30px;
}

.seccomment:hover {
    background-color: #bdc3c7;
}

.seccomment:hover .replyuser {
    opacity: 1;
}

.seccomment:hover .replysec {
    opacity: 1;
}

.seccomment:hover .sendsec {
    opacity: 1;
}

.secavatar img{
    
    width: 30px;
    height: 30px;
    border-radius: 50%;

}

.secavatar {
    display: inline-block;
    height: 30px;
}

.from {
    vertical-align: top;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    margin-left: 4px;
}

.submitreply {
    position: absolute;
    top: 10px;
    right: -3px;
    vertical-align: top;
    margin-left: auto;
    display: inline-block;
    text-align: center;
    border-radius: 10px;
    font-size: 8px;
    width: 10%;
    height: 30px;
    line-height: 30px;
    background-color: #bdc3c7;
}

.submitreply i {
    font-size: 8px;
    text-align: center;
}

.submitreply:hover {
    transform: scale(1.1);
    cursor: pointer;
}


.icon-duanxin {
    display: inline-block;
    vertical-align: top;
    font-size: 25px;
    line-height: 30px;
    height: 30px;
}

.addreply {
    position: relative;
    width: 100%;
    height: 50px;
    color: #ecf0f1;
    resize: none;
    padding: 10px;
    font-size: 16px;
    outline: none;
    margin: 0 auto;
    border-radius: 20px;
    background-color: #34495e;
    margin-bottom: 54px;

}

.addreply input {
    width: 90%;
    height: 30px;
    color: #ecf0f1;
    padding: 10px;
    outline: none;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #34495e;
}


.clickcomment {
    background-color: #e67e22;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 110px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: white;
    border-radius: 10px;
    transition: all .3s ease;
    font-weight: 600;

}

.clickcomment:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.icon-pinglun {
    
    color: white;
    vertical-align: middle;

}

.peravatar {
    display: inline-block;
    vertical-align: top;
    margin-left: 5px;
}

.peravatar img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #e67e22;
}

.before {
    display: inline-block;
    font-size: 40px;
    line-height: 50px;
    height: 50px;
}

.creator {
    height: 50px;
    vertical-align: top;
    display: inline-block;
    line-height: 50px;
    margin-left: 5px;
    margin-bottom: 10px;
}

.card {
    background-color: #34495e;
    position: relative;
    padding: 10px 20px;
    border-radius: 10px;
    margin-bottom: 10px;
}


.avatarcomment {
     display: inline-block;
}
.avatarcomment img {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

 .namecomment {
    color: white;
    vertical-align: top;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    margin-left: 3px;
}


.timecomment {
    position: absolute;
    top:0;
    right: 10px;
    vertical-align: top;
    height: 40px;
    line-height: 40px;
    display: inline-block;
}

.percomment {
    color: #ecf0f1;
    border-radius: 8px;
    text-indent: 1em;
    line-height: 30px;
    margin-bottom: 10px;
}
.comment li {
    position: relative;
    background-color: #34495e;
    margin: 5px 0px;
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
}
body {
    background-color: #2c3e50;
}

#item {
    width: 80%;
    margin: 0 auto;
    margin-top: 150px;
    background-color: #2c3e50;
}

h1 {
    width: cal(100% - 100px);
    display: inline-block;
    color: white;
}




.avatar {
    display: inline-block;
    position: relative;
}


.avatar img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #e67e22;
}

.avatar::before {
    content: '';
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    border: 3px solid #e67e22;
    border-radius: 50%;
    animation:pulse1 1.5s ease infinite
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

.username {
    color: white;
    display: inline-block;
    width: 200px;
    height: 50px;
    vertical-align: top;
    line-height: 50px;
    margin-left: 10px;

}

.diploma {
    margin: 5px 5px;
    display: inline-block;
    width: 150px;
    height: 30px;
    line-height: 30px;
    color: white;
    text-align: center;
    background-color: #bdc3c7;
    border-radius: 8px;
}

.major {
    margin: 5px 5px;
    display: inline-block;
    width: 150px;
    height: 30px;
    line-height: 30px;
    color: white;
    text-align: center;
    background-color: #bdc3c7;
    border-radius: 8px;
}


.timespan{
    margin: 5px 5px;
    display: inline-block;
    width: 130px;
    height: 30px;
    line-height: 30px;
    color: white;
    text-align: center;
    background-color: #bdc3c7;
    border-radius: 8px;
}

.salary {
    margin: 5px 5px;
    display: inline-block;
    width: 130px;
    height: 30px;
    line-height: 30px;
    color: white;
    text-align: center;
    background-color: #bdc3c7;
    border-radius: 8px;
}

.scale {
    margin: 5px 5px;
    
    width: 130px;
    height: 30px;
    line-height: 30px;
    color: white;
    text-align: center;
    background-color: #bdc3c7;
    border-radius: 8px;
}

.desc {
    color: #bdc3c7;
    text-indent: 2em;
    margin: 20px 0;
    margin-bottom: 50px;
}


li {
    list-style: none;
}

.add {
    color: #ecf0f1;
    text-indent: 2em;
    resize: none;
    padding: 10px;
    font-size: 16px;
    width: 100%;
    outline: none;
    margin: 0 auto;
    border-radius: 20px;
    height: 200px;
    margin-bottom: 50px;
    background-color: #34495e;
}


.addcomment .button {
    position: relative;
    top:0;
    left: 50%;
    transform: translateX(-50px);
    height: 50px;
    width: 100px;
    line-height: 50px;
    text-align: center;
    color: white;
    background-color: #95a5a6;
    border-radius: 15px;
    margin-bottom: 10px;
    
}

.time {
    width: 100px;
    display: inline-block;
    height: 37px;
    line-height: 73px; 
    margin: 0;
    text-align: right;
    min-width: 40%;
}


.include {
    display: flex;
    justify-content: space-between;
}

.addcomment {
    margin-top: 10px;
    position: relative;
    width: 100%;
   
}

.delete {
    position: absolute;
    bottom: 10px;
    right: 70px;
    border-radius: 10px;
    height: 30px;
    width: 50px;
    line-height: 30px;
    text-align: center;
    background-color: #27ae60;
    transition: all .3s ease;
}

.reply {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 30px;
    line-height: 20px;
    margin-right: auto;
    width: 50px;
    height: 30px;
    text-align: center;
    border-radius: 10px;
    color:white;
    background-color: #e67e22;
    transition: all .3s ease;
}

.reply:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.delete i {
    color: white;
    font-size: 20px;
}


.delete:hover {
    cursor: pointer;
    transform: scale(1.1);
}
</style>

