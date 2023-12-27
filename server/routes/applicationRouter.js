const Router = require('express')
const router = new Router()
const applicationController = require('../controllers/ApplicationController')
const userController = require("../controllers/UserController");
const UploadMiddleware = require('../middleware/UploadMiddleware')

const multer = require("multer");
const upload = multer();

router.post('/add', upload.none, (req, res, next) => {
    console.log(req.body)
    return res.json({"answer": "123"})
})

module.exports = router