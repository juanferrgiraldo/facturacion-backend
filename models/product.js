const mongoose = require('mongoose')

const productSchema = new Schema({
  code: { type: String },
  name: { type: String },
  unitPrice: { type: Number},
  vatRate: { type: Number }
})

module.exports = mongoose.model("product", productSchema)
