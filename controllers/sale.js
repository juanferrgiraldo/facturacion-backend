const sale = require('../models/sale')

function createSale (req, res) {
  let sale = new sale({
    saleCode: req.body.saleCode,
    saleDate: req.body.saleDate,
    products: req.body.products,
    totalPrice: req.body.totalPrice,  // ¿Cómo se van a enviar estas para uego ser calculadas en el back?
    calculatedVatRate: req.body.calculatedVatRate,
    cashier: req.body.cashier
  })
  sale.save((err, storedSale) => {
    if(err) res.status(500).send({message: `Error generando la compra: ${err}`})
    res.status(201).send({ sale: storedSale})
  })
}

module.exports = {
  createSale
}