const Usuario = require('../models/Usuario');

exports.getAll = async (req, res) => {
  const items = await Usuario.find();
  res.json(items);
};

exports.create = async (req, res) => {
  const newItem = new Usuario(req.body);
  await newItem.save();
  res.json(newItem);
};

exports.getById = async (req, res) => {
  const item = await Usuario.findById(req.params.id);
  res.json(item);
};

exports.update = async (req, res) => {
  const updatedItem = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
};

exports.delete = async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ message: 'Usuario eliminado' });
};
