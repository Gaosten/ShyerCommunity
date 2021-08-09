const express = require('express')
const router = express.Router()
const Topic = require('../model/Topic')

router.post('/topics',async (req,res) => {
    console.log('来了');
    const newTopic = await new Topic(req.body).save()
    res.status(200).send('发布成功')
})


router.get('/topics',async (req,res) => {
    console.log(req.query.page);
    const all = await Topic.find().skip(req.query.page*20).limit(20)
    res.status(200).send(all)
    
})

router.get('/add',async (req,res) => {

    const topic = await Topic.findByIdAndUpdate(req.query._id,{$inc:{ commentcount: 1 }},function(err,counter){
        
    }) 

    res.status(200).send('成功')
    
})


router.get('/topics/delete',async (req,res) => {
    console.log('收到了');
    console.log(req.query.topicId);
    const topicOne = await Topic.findByIdAndUpdate(req.query.topicId,{$inc:{ commentcount: -1 }},function(err,counter){
        console.log(counter);
    })

    res.status(200).send('成功')
})


router.get('/topics/category', async (req,res) => {
    const category = await Topic.find({radio1:req.query.radio1})


    res.status(200).send(category)
})

module.exports = router