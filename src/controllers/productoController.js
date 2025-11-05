const Producto = require('../models/Producto');

// Obtener todos los productos
exports.getAll = async (req, res) => {
  try {
    const items = await Producto.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

// Crear un nuevo producto
exports.create = async (req, res) => {
  try {
    const newItem = await Producto.create(req.body);
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

// Obtener un producto por ID
exports.getById = async (req, res) => {
  try {
    const item = await Producto.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

// Actualizar un producto por ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Producto.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: 'Producto no encontrado' });

    const updatedItem = await Producto.findByPk(req.params.id);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

// Eliminar un producto por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Producto.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: 'Producto no encontrado' });

    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};