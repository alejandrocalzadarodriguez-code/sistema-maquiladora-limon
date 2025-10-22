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
