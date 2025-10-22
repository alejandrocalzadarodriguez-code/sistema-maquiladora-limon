const Proveedor = require('../models/Proveedor');

exports.getAll = async (req, res) => {
  const proveedores = await Proveedor.find();
  res.json(proveedores);
};

exports.create = async (req, res) => {
  const nuevo = new Proveedor(req.body);
  await nuevo.save();
  res.json(nuevo);
};

exports.getById = async (req, res) => {
  const proveedor = await Proveedor.findById(req.params.id);
  res.json(proveedor);
};

exports.update = async (req, res) => {
  const proveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(proveedor);
};

exports.delete = async (req, res) => {
  await Proveedor.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Proveedor eliminado' });
};
