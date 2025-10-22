// Servidor Express
const express = require('express');
const app = express();

app.use('/api/productos', require('./routes/producto'));
app.use('/api/lotes', require('./routes/lote'));

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
