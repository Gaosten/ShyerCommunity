const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const topicSchema = new Schema({
    commentcount:{
        type:Number,
        default:0
    },
    avatarIndex:{
        type:String
    },
    avatarBorder:{
        type:String
    },
    username:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    radio1:{
        type:Number,
        enum: [0,1,2,3,4],
        required:true
    },
    salary:{
        type:String,
        required:false
    },
    major:{
        type:String,
        required:true
    },
    diploma:{
        type:String,
        required:false
    },
    job:{
        type:String,
        required:false
    },
    desc:{
        type:String,
        required:true
    },
    timespan:{
        type:String,
        required:false
    },
    scale:{
        type:String,
        
    },
    created_time: {
        type: Date,
        //这里不能写Date.now()，因为会即刻调用,
        // 这里给了一个方法Date.now
        // 当new model的时候，如果没有传递created_time属性，mongoose就会调用该方法
        default: Date.now
    }
})

const Topic = model('Topic',topicSchema)
module.exports = Topic