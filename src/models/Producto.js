
// Modelo Producto
const mongoose = require('mongoose');
const productoSchema = new mongoose.Schema({
  nombre: String,
  unidadMedida: String,
  categoria: String,
  precioUnitario: Number
});
module.exports = mongoose.model('Producto', productoSchema);
