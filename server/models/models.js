const sequelize = require('../../../test-task-itmo/db')
const {DataTypes} = require('sequelize')

const User = sequelize.define(
    'user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: false,
        freezeTableName: true
    })

const UserInfo = sequelize.define(
    'user_info', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true},
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    university: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: false,
        freezeTableName: true
    })

User.hasOne(UserInfo)
UserInfo.belongsTo(User)

module.exports = {
    User,
    UserInfo
}