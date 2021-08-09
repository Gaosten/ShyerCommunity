const session = require('express-session')
const express = require('express')
const mongo = require('./config/db')
const routes = require('./router/index')
const app =  new express()
const cors = require('cors')

//使用以及配置中间件
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
mongo(app)
app.use(cors())
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true
}))
app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});
//在路由之前配置中间件
routes(app)

app.listen(3000,() => {
    console.log('3000服务器已启动...');
})