
// Modelo Lote
const mongoose = require('mongoose');
const loteSchema = new mongoose.Schema({
  idProveedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Proveedor' },
  fechaRecepcion: Date,
  cantidad: Number,
  estado: String
});
module.exports = mongoose.model('Lote', loteSchema);
