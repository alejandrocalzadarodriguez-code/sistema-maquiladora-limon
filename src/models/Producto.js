const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('Producto', {
  nombre: {
    type: DataTypes.STRING
  },
  unidadMedida: {
    type: DataTypes.STRING
  },
  categoria: {
    type: DataTypes.STRING
  },
  precioUnitario: {
    type: DataTypes.FLOAT
  }
}, {
  tableName: 'producto',
  timestamps: false
});

module.exports = Producto;