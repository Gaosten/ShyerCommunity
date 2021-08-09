const mongoose = require('mongoose')
const mongoURL = 'mongodb://jesko:gscgscgsc@localhost:27017/login'
const db = mongoose.connection
mongoose.set('useFindAndModify', false);
module.exports = app =>{

    mongoose.connect(mongoURL, { useNewUrlParser:true, useUnifiedTopology:true}).then(res => {
        console.log('数据库已连接');
    })



}
 



