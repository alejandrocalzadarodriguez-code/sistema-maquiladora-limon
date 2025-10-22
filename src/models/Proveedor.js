const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
  nombre: String,
  direccion: String,
  telefono: String,
  email: String
});

module.exports = mongoose.model('Proveedor', proveedorSchema);
