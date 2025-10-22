
# Sistema Web de Control y Administración para Maquiladora de Limón

Este proyecto consiste en una aplicación web desarrollada para digitalizar y optimizar los procesos operativos y administrativos de la empresa Maquiladora San José, dedicada a la maquila de limón. El sistema permite gestionar proveedores, productos, lotes, inventarios y procesos de producción.

## 📁 Estructura del Backend

```
backend/
├── server.js                  # Archivo principal del servidor Express
├── models/                    # Modelos Mongoose
│   ├── Proveedor.js
│   ├── Producto.js
│   └── Lote.js
├── controllers/              # Lógica de negocio
│   ├── proveedorController.js
│   ├── productoController.js
│   └── loteController.js
├── routes/                   # Rutas REST
│   ├── proveedor.js
│   ├── producto.js
│   └── lote.js
```

## ⚙️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/sistema-maquiladora-limon.git
cd sistema-maquiladora-limon/backend
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura la conexión a MongoDB en `server.js`:
```js
mongoose.connect('mongodb://localhost:27017/maquiladora');
```

4. Inicia el servidor:
```bash
node server.js
```

## 🧪 Endpoints REST

### Proveedor
- `GET /api/proveedores` → Obtener todos los proveedores
- `POST /api/proveedores` → Crear nuevo proveedor
- `GET /api/proveedores/:id` → Obtener proveedor por ID
- `PUT /api/proveedores/:id` → Actualizar proveedor
- `DELETE /api/proveedores/:id` → Eliminar proveedor

### Producto
- `GET /api/productos` → Obtener todos los productos
- `POST /api/productos` → Crear nuevo producto
- `GET /api/productos/:id` → Obtener producto por ID
- `PUT /api/productos/:id` → Actualizar producto
- `DELETE /api/productos/:id` → Eliminar producto

### Lote
- `GET /api/lotes` → Obtener todos los lotes
- `POST /api/lotes` → Crear nuevo lote
- `GET /api/lotes/:id` → Obtener lote por ID
- `PUT /api/lotes/:id` → Actualizar lote
- `DELETE /api/lotes/:id` → Eliminar lote

## 🛠️ Tecnologías Utilizadas
- Node.js
- Express
- MongoDB
- Mongoose

## 📄 Licencia
Este proyecto es de uso académico y puede ser adaptado para fines empresariales.


## Código Base por Entidad

### models/ControlCalidad.js
```js
const mongoose = require('mongoose');

const controlcalidadSchema = new mongoose.Schema({
  // Define schema fields here
}});

module.exports = mongoose.model('ControlCalidad', controlcalidadSchema);

```

### models/Usuario.js
```js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  // Define schema fields here
}});

module.exports = mongoose.model('Usuario', usuarioSchema);

```

### models/Inventario.js
```js
const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
  // Define schema fields here
}});

module.exports = mongoose.model('Inventario', inventarioSchema);

```

### models/Reporte.js
```js
const mongoose = require('mongoose');

const reporteSchema = new mongoose.Schema({
  // Define schema fields here
}});

module.exports = mongoose.model('Reporte', reporteSchema);

```

### models/Recepcion.js
```js
const mongoose = require('mongoose');

const recepcionSchema = new mongoose.Schema({
  // Define schema fields here
}});

module.exports = mongoose.model('Recepcion', recepcionSchema);

```

### routes/recepcion.js
```js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/recepcionController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;

```

### routes/inventario.js
```js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/inventarioController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;

```

### routes/controlcalidad.js
```js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controlcalidadController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;

```

### routes/reporte.js
```js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/reporteController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;

```

### routes/usuario.js
```js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarioController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;

```

### controllers/usuarioController.js
```js
const Usuario = require('../models/Usuario');

exports.getAll = async (req, res) => {
  const items = await Usuario.find();
  res.json(items);
};

exports.create = async (req, res) => {
  const newItem = new Usuario(req.body);
  await newItem.save();
  res.json(newItem);
};

exports.getById = async (req, res) => {
  const item = await Usuario.findById(req.params.id);
  res.json(item);
};

exports.update = async (req, res) => {
  const updatedItem = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
};

exports.delete = async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ message: 'Usuario eliminado' });
};

```

### controllers/controlcalidadController.js
```js
const ControlCalidad = require('../models/ControlCalidad');

exports.getAll = async (req, res) => {
  const items = await ControlCalidad.find();
  res.json(items);
};

exports.create = async (req, res) => {
  const newItem = new ControlCalidad(req.body);
  await newItem.save();
  res.json(newItem);
};

exports.getById = async (req, res) => {
  const item = await ControlCalidad.findById(req.params.id);
  res.json(item);
};

exports.update = async (req, res) => {
  const updatedItem = await ControlCalidad.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
};

exports.delete = async (req, res) => {
  await ControlCalidad.findByIdAndDelete(req.params.id);
  res.json({ message: 'ControlCalidad eliminado' });
};

```

### controllers/reporteController.js
```js
const Reporte = require('../models/Reporte');

exports.getAll = async (req, res) => {
  const items = await Reporte.find();
  res.json(items);
};

exports.create = async (req, res) => {
  const newItem = new Reporte(req.body);
  await newItem.save();
  res.json(newItem);
};

exports.getById = async (req, res) => {
  const item = await Reporte.findById(req.params.id);
  res.json(item);
};

exports.update = async (req, res) => {
  const updatedItem = await Reporte.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
};

exports.delete = async (req, res) => {
  await Reporte.findByIdAndDelete(req.params.id);
  res.json({ message: 'Reporte eliminado' });
};

```

### controllers/recepcionController.js
```js
const Recepcion = require('../models/Recepcion');

exports.getAll = async (req, res) => {
  const items = await Recepcion.find();
  res.json(items);
};

exports.create = async (req, res) => {
  const newItem = new Recepcion(req.body);
  await newItem.save();
  res.json(newItem);
};

exports.getById = async (req, res) => {
  const item = await Recepcion.findById(req.params.id);
  res.json(item);
};

exports.update = async (req, res) => {
  const updatedItem = await Recepcion.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
};

exports.delete = async (req, res) => {
  await Recepcion.findByIdAndDelete(req.params.id);
  res.json({ message: 'Recepcion eliminado' });
};

```

### controllers/inventarioController.js
```js
const Inventario = require('../models/Inventario');

exports.getAll = async (req, res) => {
  const items = await Inventario.find();
  res.json(items);
};

exports.create = async (req, res) => {
  const newItem = new Inventario(req.body);
  await newItem.save();
  res.json(newItem);
};

exports.getById = async (req, res) => {
  const item = await Inventario.findById(req.params.id);
  res.json(item);
};

exports.update = async (req, res) => {
  const updatedItem = await Inventario.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
};

exports.delete = async (req, res) => {
  await Inventario.findByIdAndDelete(req.params.id);
  res.json({ message: 'Inventario eliminado' });
};

```
