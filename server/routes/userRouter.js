const Router = require('express')
const router = new Router()
const userController = require('../controllers/UserController')
const AuthMiddleware = require('../middleware/AuthMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', AuthMiddleware, userController.check)

module.exports = router