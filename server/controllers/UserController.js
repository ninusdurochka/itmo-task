const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {User, UserInfo} = require('../models/models')
const ApiError = require('../errors/ApiError')

const generateJwt = (id, email) => {
    return jwt.sign(
        {id: id, email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'})
}

class UserController {
    async registration(req, res, next) {
        const {full_name, email, phone, university, city, password} = req.body
        console.log(req.body)
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashedPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashedPassword})
        const userInfo = await UserInfo.create({full_name, email, phone, university, city, userId: user.id})
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.badRequest('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email)
        return res.json({token})
    }
}

module.exports = new UserController()