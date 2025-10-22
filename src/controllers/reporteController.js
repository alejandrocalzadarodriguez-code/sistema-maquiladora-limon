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
