const mongoose = require('mongoose')
const schema = mongoose.Schema

const saleSchema = new Schema({
  saleCode: { type: String },
  saleDate: { type: Date },
  products: [{ type: schema.Types.ObjectId, ref: 'product'}],
  totalPrice: { type: Number },  
  calculatedVatRate: { type: Number },
  cashier: { type: schema.Types.ObjectId, ref: 'cashier' }
})

mondule.exports = mongoose.model("sale", saleSchema)
