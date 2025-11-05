const Proveedor = require('../models/Proveedor');

// Obtener todos los proveedores
exports.getAll = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los proveedores' });
  }
};

// Crear un nuevo proveedor
exports.create = async (req, res) => {
  try {
    const nuevo = await Proveedor.create(req.body);
    res.json(nuevo);
  } catch (error) {
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
    res.status(500).json({ error: 'Error al obtener el proveedor' });
  }
};

// Actualizar proveedor por ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Proveedor.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: 'Proveedor no encontrado' });

    const proveedorActualizado = await Proveedor.findByPk(req.params.id);
    res.json(proveedorActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el proveedor' });
  }
};

// Eliminar proveedor por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Proveedor.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: 'Proveedor no encontrado' });

    res.json({ mensaje: 'Proveedor eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el proveedor' });
  }
};