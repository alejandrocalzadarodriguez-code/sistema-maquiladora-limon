// server.js - Servidor Express con PostgreSQL y dotenv
require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database'); // Archivo de configuración Sequelize
const app = express();

//  Imprimir variables de entorno cargadas
console.log('Variables de entorno cargadas:');
console.log({
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS ? '********' : null, // Ocultamos la contraseña
  DB_NAME: process.env.DB_NAME,
  DB_DIALECT: process.env.DB_DIALECT,
  JWT_SECRET: process.env.JWT_SECRET ? '********' : null
});

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
app.use('/api/auth', require('./routes/auth')); // Nueva ruta para login y registro

// Conexión a la base de datos PostgreSQL

// Conexión a la base de datos PostgreSQL
sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a PostgreSQL');
    return sequelize.sync(); // Sincroniza modelos con la base de datos
  })
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch(err => console.error('Error de conexión:', err));

    /* PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
});*/