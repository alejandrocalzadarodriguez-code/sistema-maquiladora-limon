const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Recepcion = sequelize.define('Recepcion', {
  idLote: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lote', // nombre de la tabla relacionada
      key: 'id'
    }
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  responsable: {
    type: DataTypes.STRING,
    allowNull: false
  },
  observaciones: {
    type: DataTypes.STRING // puedes usar TEXT si esperas textos largos
  }
}, {
  tableName: 'recepcion',
  timestamps: false
});

module.exports = Recepcion;