const Recepcion = require('../models/Recepcion');

exports.getAll = async (req, res) => {
  const items = await Recepcion.find();
  res.json(items);
};

exports.create = async (req, res) => {
  const newItem = new Recepcion(req.body);
  await newItem.save();
  res.json(newItem);
};

exports.getById = async (req, res) => {
  const item = await Recepcion.findById(req.params.id);
  res.json(item);
};

exports.update = async (req, res) => {
  const updatedItem = await Recepcion.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
};

exports.delete = async (req, res) => {
  await Recepcion.findByIdAndDelete(req.params.id);
  res.json({ message: 'Recepcion eliminado' });
};
