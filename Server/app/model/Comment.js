const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commentSchema = new Schema({
    avatarIndex:{
        type:String,
        default:1
    },
    avatarBorder:{
        type:String,
        default:1
    },
    topicId: {
        type: String,
        required:true
    },
    username: {
        type: String,
        
    },
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    seccomment:{
        type:Array,
        default:[]
    },
    created_time: {
        type: Date,
        //这里不能写Date.now()，因为会即刻调用,
        // 这里给了一个方法Date.now
        // 当new model的时候，如果没有传递created_time属性，mongoose就会调用该方法
        default: Date.now
    }
})

const Comment = mongoose.model('Comment',commentSchema)
module.exports = Comment