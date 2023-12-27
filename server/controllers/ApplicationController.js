const ApiError = require("../errors/ApiError");
const {User, UserInfo} = require("../models/models");
const bcrypt = require("bcrypt");
const path = require("path")
const multer = require("multer")
class ApplicationController {


    async add(req, res, next) {
        console.log(req.body)
        const {full_name, university, report, supervisor, conference, direction, language, article, theses} = req.body
        console.log({full_name, university, report, supervisor, conference, direction, language, article, theses})
        return res.json({full_name})
        // const candidate = await User.findOne({where: {email}})
        // if (candidate) {
        //     return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        // }
        // const hashedPassword = await bcrypt.hash(password, 5)
        // const user = await User.create({email, password: hashedPassword})
        // const userInfo = await UserInfo.create({full_name, email, phone, university, city, userId: user.id})
        // const token = generateJwt(user.id, user.email)
        // return res.json({token})
    }


}

module.exports = new ApplicationController()