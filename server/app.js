require('dotenv').config()
const express = require('express')
const sequelize = require('../../test-task-itmo/db')
const models = require('./models/models')
const cors = require('cors')
const Router = require('./routes')
const applicationRouter = require('./routes/applicationRouter')
const errorHandler = require('./middleware/ErrorHadlingMiddleware')

const {Client, Pool} = require('pg')


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', Router)


app.use(errorHandler)


const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}..`))
    } catch(e) {
        console.log('Server error:', e.message)
        process.exit(1)
    }
}

start()