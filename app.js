const express = require('express')
const logger = require('morgan')
const cors = require('cors')

//
const contactApi = require('./routes/api/contacts')
const userApi = require('./routes/api/user')
const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
)

app.use('/avatars', express.static('public/avatars'))

app.use(express.json())

app.use('/', contactApi)
app.use('/', userApi)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, er: 'er' })
})

//

module.exports = app
