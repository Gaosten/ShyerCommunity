const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema
const model = mongoose.model

const userSchema = new Schema({
    username:{type:String,required:true},
    password:{
        type:String,
        required:true,
        set(val){
            return bcrypt.hashSync(val,10)
        }
    },
    name:{type:String,required:true},
    gender:{
        type:String,
        enum: [0,1],   
    },
    label:{
        type:String
    },
    avatarBorder:{
        type:Number,
        default:1
    },
    avatarIndex:{
        type:Number,
        default:1
    }
})

const User = model('User',userSchema)
module.exports = User