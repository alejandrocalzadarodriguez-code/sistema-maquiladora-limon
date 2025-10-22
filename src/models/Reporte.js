const mongoose = require('mongoose');

const reporteSchema = new mongoose.Schema({
  idRecepcion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recepcion',
    required: true
  },
  tipo: {
    type: String,
    enum: ['Recepción', 'Calidad', 'Inventario'], // puedes ajustar los tipos según tu lógica
    required: true
  },
  fechaGeneracion: {
    type: Date,
    default: Date.now
  },
  generadoPor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Reporte', reporteSchema);
