const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Lote = sequelize.define('Lote', {
  idProveedor: {
    type: DataTypes.INTEGER,
    references: {
      model: 'proveedor', // nombre de la tabla relacionada
      key: 'id'
    }
  },
  fechaRecepcion: {
    type: DataTypes.DATE
  },
  cantidad: {
    type: DataTypes.INTEGER
  },
  estado: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'lote',
  timestamps: false
});

module.exports = Lote;