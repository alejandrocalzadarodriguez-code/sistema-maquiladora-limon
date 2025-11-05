const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Inventario = sequelize.define('Inventario', {
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'producto', // nombre de la tabla relacionada
      key: 'id'
    }
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fechaActualizacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'inventario',
  timestamps: false
});

module.exports = Inventario;
