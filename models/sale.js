const mongoose = require('mongoose')
const Schema = mongoose.Schema

const saleSchema = new Schema({
  saleCode: { type: String },
  saleDate: { type: Date, default: Date.now },
  products: [{ type: String }],
  totalPrice: { type: Number },  
  calculatedVatRate: { type: Number },
  cashier: { type: String }
})

module.exports = mongoose.model("sale", saleSchema)
