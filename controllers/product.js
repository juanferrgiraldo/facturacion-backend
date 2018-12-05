const product = require('../models/product')

function getProduct (req, res) {
  let productId = req.body.code
  product.findOne({ code : productId }, (err, product) => {
    if(err) return res.status(500).send({ message: `Ocurrió un error mientras se buscaba el producto: ${err}`})
    if(!product) return res.status(404).send('El producto no existe')
    res.status(200).send({product})
  })
}

module.exports = {
  getProduct
}