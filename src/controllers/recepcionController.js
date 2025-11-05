const Recepcion = require('../models/Recepcion');

// Obtener todas las recepciones
exports.getAll = async (req, res) => {
  try {
    const items = await Recepcion.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las recepciones' });
  }
};

// Crear una nueva recepción
exports.create = async (req, res) => {
  try {
    const newItem = await Recepcion.create(req.body);
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la recepción' });
  }
};

// Obtener una recepción por ID
exports.getById = async (req, res) => {
  try {
    const item = await Recepcion.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Recepción no encontrada' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la recepción' });
  }
};

// Actualizar una recepción por ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Recepcion.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: 'Recepción no encontrada' });

    const updatedItem = await Recepcion.findByPk(req.params.id);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la recepción' });
  }
};

// Eliminar una recepción por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Recepcion.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: 'Recepción no encontrada' });

    res.json({ message: 'Recepción eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la recepción' });
  }
};