
const mongoose = require('mongoose');

const controlCalidadSchema = new mongoose.Schema({
  idLote: { type: mongoose.Schema.Types.ObjectId, ref: 'Lote', required: true },
  resultado: { type: String, required: true }, // Ejemplo: "Aprobado", "Rechazado"
  fechaEvaluacion: { type: Date, default: Date.now },
  evaluador: { type: String, required: true } // Nombre del evaluador
});

module.exports = mongoose.model('ControlCalidad', controlCalidadSchema);

