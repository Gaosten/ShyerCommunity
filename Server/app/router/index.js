const userRouter = require('./user')
const topicRouter = require('./topics')
const commentRouter = require('./comment')

module.exports = app => {
    app.use('/user',userRouter,topicRouter,commentRouter)
    
}