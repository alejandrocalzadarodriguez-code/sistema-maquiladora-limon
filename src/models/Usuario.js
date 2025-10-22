
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  usuario: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, enum: ['admin', 'operador', 'calidad', 'proveedor'], required: true }
});

module.exports = mongoose.model('Usuario', usuarioSchema);

