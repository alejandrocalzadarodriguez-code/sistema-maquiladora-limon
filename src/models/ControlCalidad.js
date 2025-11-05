
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ControlCalidad = sequelize.define('ControlCalidad', {
  idLote: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lote', // nombre de la tabla relacionada
      key: 'id'
    }
  },
  resultado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fechaEvaluacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  evaluador: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'controlcalidad',
  timestamps: false
});

module.exports = ControlCalidad;
