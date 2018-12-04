const express = require('express')
const route = express.Router()

let productController = require('../controllers/product')

route.post('/buscar', productController.getProduct)

module.exports = route
