const Usuario = require('../models/Usuario');

// Obtener todos los usuarios
exports.getAll = async (req, res) => {
  try {
    const items = await Usuario.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

// Crear un nuevo usuario
exports.create = async (req, res) => {
  try {
    const newItem = await Usuario.create(req.body);
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// Obtener un usuario por ID
exports.getById = async (req, res) => {
  try {
    const item = await Usuario.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

// Actualizar un usuario por ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Usuario.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: 'Usuario no encontrado' });

    const updatedItem = await Usuario.findByPk(req.params.id);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

// Eliminar un usuario por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Usuario.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: 'Usuario no encontrado' });

    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};