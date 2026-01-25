const Lote = require('../models/Lote');

// Obtener todos los lotes
exports.getAll = async (req, res) => {
  try {
    const items = await Lote.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los lotes' });
  }
};
/*
// Crear un nuevo lote
exports.create = async (req, res) => {
  try {
    const newItem = await Lote.create(req.body);
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el lote' });
  }
};*/


exports.create = async (req, res) => {
  try {
    const newItem = await Lote.create(req.body);
    return res.status(201).json(newItem);
  } catch (error) {
    console.error('❌ Error REAL al crear lote:', error);

    return res.status(500).json({
      error: 'Error al crear el lote',
      name: error?.name,
      message: error?.message,
      pg: {
        code: error?.parent?.code,
        detail: error?.parent?.detail,
        table: error?.parent?.table,
        constraint: error?.parent?.constraint
      }
    });
  }
};


// Obtener un lote por ID
exports.getById = async (req, res) => {
  try {
    const item = await Lote.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Lote no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el lote' });
  }
};

// Actualizar un lote por ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Lote.update(req.body, {
      where: { id_lote: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: 'Lote no encontrado' });

    const updatedItem = await Lote.findByPk(req.params.id);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el lote' });
  }
};

// Eliminar un lote por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Lote.destroy({
      where: { id_lote: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: 'Lote no encontrado' });

    res.json({ message: 'Lote eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el lote' });
  }
};