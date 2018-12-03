const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const config = require('./config')
const routes = require('./routes')


mongoose.connect(config.db, {useNewUrlParser: true})

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false}))
app.use('/facturación', routes)

module.exports = app