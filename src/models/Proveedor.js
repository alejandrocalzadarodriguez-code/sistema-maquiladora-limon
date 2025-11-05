const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Proveedor = sequelize.define('Proveedor', {
  nombre: {
    type: DataTypes.STRING
  },
  direccion: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'proveedor',
  timestamps: false
});

module.exports = Proveedor;