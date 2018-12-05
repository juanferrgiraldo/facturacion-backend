const express = require('express')
const route = express.Router()

let productController = require('../controllers/product')
let saleController = require('../controllers/sale')

route.post('/buscar', productController.getProduct)
route.post('/pagar', saleController.createSale)
module.exports = route
