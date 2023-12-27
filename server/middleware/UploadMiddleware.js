const path = require("path")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../files");
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname));
    },
})
const upload = multer({ storage: storage })
module.exports = function (req, res, next) {
    upload.single('article')
    next()
}