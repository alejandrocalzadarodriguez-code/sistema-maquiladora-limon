const mongoose = require('mongoose');

const recepcionSchema = new mongoose.Schema({
  idLote: { type: mongoose.Schema.Types.ObjectId, ref: 'Lote', required: true },
  fecha: { type: Date, default: Date.now },
  responsable: { type: String, required: true },
  observaciones: { type: String }
});

module.exports = mongoose.model('Recepcion', recepcionSchema);
