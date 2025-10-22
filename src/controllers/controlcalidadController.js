const ControlCalidad = require('../models/ControlCalidad');

exports.getAll = async (req, res) => {
  const items = await ControlCalidad.find();
  res.json(items);
};

exports.create = async (req, res) => {
  const newItem = new ControlCalidad(req.body);
  await newItem.save();
  res.json(newItem);
};

exports.getById = async (req, res) => {
  const item = await ControlCalidad.findById(req.params.id);
  res.json(item);
};

exports.update = async (req, res) => {
  const updatedItem = await ControlCalidad.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
};

exports.delete = async (req, res) => {
  await ControlCalidad.findByIdAndDelete(req.params.id);
  res.json({ message: 'ControlCalidad eliminado' });
};
