const Reporte = require('../models/Reporte');

// Obtener todos los reportes
exports.getAll = async (req, res) => {
  try {
    const items = await Reporte.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los reportes' });
  }
};

// Crear un nuevo reporte
exports.create = async (req, res) => {
  try {
    const newItem = await Reporte.create(req.body);
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el reporte' });
  }
};

// Obtener un reporte por ID
exports.getById = async (req, res) => {
  try {
    const item = await Reporte.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Reporte no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el reporte' });
  }
};

// Actualizar un reporte por ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Reporte.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: 'Reporte no encontrado' });

    const updatedItem = await Reporte.findByPk(req.params.id);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el reporte' });
  }
};

// Eliminar un reporte por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Reporte.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: 'Reporte no encontrado' });

    res.json({ message: 'Reporte eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el reporte' });
  }
};