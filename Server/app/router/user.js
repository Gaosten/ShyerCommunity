const express = require('express')
const router = express.Router()
const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = 'register-rule'


router.get('/',async (req,res) => {
    res.status(200).send('请求成功')
})


//注册
router.post('/register',async (req,res)=>{
   
     User.findOne({
        $or:[{
            username:req.body.username
        },
        {
            name:req.body.name
        }]
    },async function(err,data){
        if(err){
            console.log(err);
            return res.status(500).json({
                err_code:500,
                message:'服务端错误'
            })
        } else if(data){
            
            return res.status(202).json({
                err_code:0,
                message:'用户名已存在'
            })
        }
        const newUser = await new User(req.body).save()
        req.session.user= req.body.name
      
        res.status(200).send(req.session.user) 
    })
})


//登录
router.post('/login',async (req,res) => {
    //await 等待异步操作的结果，否则还没有取到数据，就进行判断
    console.log(req.body.username);
    const user = await User.findOne({username:req.body.username})
    if(!user){
        return res.status(203).send('User is not exist')
    }
//解密
    
    let isPassword = await bcrypt.compareSync(req.body.password,user.password)//返回true或者flase来判断密码是否一致
    if(!isPassword){
        return res.status(203).send('wrong password')
    }else {
        // const token = user.id + '.' + user.username
        const {id,username} = user
        const token = jwt.sign({id,username},secret,{expiresIn:'24h'})
        res.send(token)
    }
})

//token验证功能
router.post('/verify',async (req,res) => {
    for(let i in req.body){
        var usertransfer = i
    }


    //jwt规范token，只headers中authorization中的后一部分
    const token = usertransfer.split(' ')[1]

    
    //解密token后查询用户id
    const {username} = jwt.verify(token,secret)

   //查询是否有此用户
    const user = await User.findOne({username:username})
    
    if(user){
        res.send(user)
    }

})

router.post('/center',(req,res) => {
    console.log(req.body);
    const user = User.findOneAndUpdate({name:req.body[1]},req.body[0],(err,res)=>
    {
        if(err){
            console.log('更新失败');
        } else {
            console.log(res);
        }
    })

    res.status(200).send('Successful upload!')
})

module.exports = router