const ControlCalidad = require('../models/ControlCalidad');

// Obtener todos los registros
exports.getAll = async (req, res) => {
  try {
    const items = await ControlCalidad.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los registros' });
  }
};

// Crear un nuevo registro
exports.create = async (req, res) => {
  try {
    const newItem = await ControlCalidad.create(req.body);
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el registro' });
  }
};

// Obtener un registro por ID
exports.getById = async (req, res) => {
  try {
    const item = await ControlCalidad.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Registro no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el registro' });
  }
};

// Actualizar un registro por ID
exports.update = async (req, res) => {
  try {
    const [updated] = await ControlCalidad.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: 'Registro no encontrado' });

    const updatedItem = await ControlCalidad.findByPk(req.params.id);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el registro' });
  }
};

// Eliminar un registro por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await ControlCalidad.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: 'Registro no encontrado' });

    res.json({ message: 'ControlCalidad eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el registro' });
  }
};