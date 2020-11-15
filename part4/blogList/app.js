const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const morgan = require('morgan')

logger.info('Connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
    useCreateIndex: true
})
    .then(result=>{
        logger.info('Connected to MongoDB')
    })
    .catch(error=>{
        logger.error('Error while connecting to MongoDB: ',error.message)
    })

app.use(cors())
app.use(express.json())
app.use(morgan('combined'))

app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

module.exports = app