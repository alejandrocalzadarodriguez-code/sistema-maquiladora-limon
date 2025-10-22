// server.js - Servidor Express
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/proveedores', require('./routes/proveedor'));
app.use('/api/productos', require('./routes/producto'));
app.use('/api/lotes', require('./routes/lote'));
app.use('/api/recepcion', require('./routes/recepcion'));
app.use('/api/inventario', require('./routes/inventario'));
app.use('/api/controlcalidad', require('./routes/controlcalidad'));
app.use('/api/reporte', require('./routes/reporte'));
app.use('/api/usuarios', require('./routes/usuario'));

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
