const Sale = require('../models/sale')

function createSale (req, res) {  
  let code;
  let totalPrice = 0;
  let calculatedVatRate = 0;
  let productsId = [];
  let products = req.body.products;
  
  Sale.countDocuments({}, function(err,count) {
    code = String(count +1);
    console.log("CODE",code);
  })

  console.log("CODE1",code);

  for(product in products) {
    product = products[product]
    totalPrice += product.unitPrice;
    calculatedVatRate += (product.unitPrice * product.vatRate)/100;
    productsId.push(product.code)
    //console.log(totalPrice, calculatedVatRate);
  }
  
  let sale = new Sale({
    saleCode: codeh,    
    products: req.body.products,
    totalPrice: totalPrice,  // ¿Cómo se van a enviar estas para uego ser calculadas en el back?
    calculatedVatRate: Math.floor(calculatedVatRate),
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