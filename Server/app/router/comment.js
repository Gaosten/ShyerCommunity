const express = require('express')
const { findById } = require('../model/Comment')
const router = express.Router()
const Comment = require('../model/Comment')

router.post('/comment',async (req,res) => {
    
    const comment = await new Comment(req.body).save()
    
    res.status(200).send('发布成功')
})



router.get('/comment',async (req,res) => {
   
    const allcomment = await Comment.find({topicId:req.query._id})
    
    res.status(200).send(allcomment)
})

router.get('/comment/delete',async (req,res) => {
    const deleteOne = await Comment.findByIdAndDelete(req.query._id)

    res.status(200).send(deleteOne)
})


router.post('/comment/second', async (req,res) => {
    console.log(req.body);
    let goal = await Comment.updateOne({_id:req.body.id},{$push:{'seccomment':req.body}})
    res.status(200).send('成功')
})

module.exports = router