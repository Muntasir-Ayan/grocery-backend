const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema);
