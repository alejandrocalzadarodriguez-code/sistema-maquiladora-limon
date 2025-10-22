
const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
  idProducto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  cantidad: { type: Number, required: true },
  ubicacion: { type: String, required: true },
  fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inventario', inventarioSchema);

