const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const applicationRouter = require('./applicationRouter')

router.use('/user', userRouter)
router.use('/profile', applicationRouter)

module.exports = router