const Proveedor = require('../models/Proveedor');

// Obtener todos los proveedores
exports.getAll = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    console.log('Consulta de proveedores realizada');
    res.json(proveedores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los proveedores' });
  }
};

// Crear un nuevo proveedor
exports.create = async (req, res) => {
  try {
    const nuevo = await Proveedor.create({
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      fecha_creacion: new Date(),
      usuario_responsable: req.body.usuario_responsable
    });
    res.status(201).json(nuevo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el proveedor' });
  }
};

// Obtener proveedor por ID
exports.getById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (!proveedor) return res.status(404).json({ error: 'Proveedor no encontrado' });
    res.json(proveedor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el proveedor' });
  }
};

// Actualizar proveedor por ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Proveedor.update(
      {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        fecha_actualizacion: new Date(),
        usuario_responsable: req.body.usuario_responsable
      },
      {
        where: { id_proveedor: req.params.id }
      }
    );

    if (!updated) return res.status(404).json({ error: 'Proveedor no encontrado' });

    const proveedorActualizado = await Proveedor.findByPk(req.params.id);
    res.json(proveedorActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el proveedor' });
  }
};

// Eliminar proveedor por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Proveedor.destroy({
      where: { id_proveedor: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: 'Proveedor no encontrado' });

    res.json({ mensaje: 'Proveedor eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el proveedor' });
  }
};