const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ControlCalidad = sequelize.define('ControlCalidad', {
  id_control: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_lote: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lote', // nombre de la tabla relacionada
      key: 'id'
    }
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tamano: {
    type: DataTypes.STRING,
    allowNull: true
  },
  frescura: {
    type: DataTypes.STRING,
    allowNull: true
  },
  resultado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_movimiento: {
    type: DataTypes.DATE,
    allowNull: true
  },
  usuario_responsable: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  fecha_actualizacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'control_calidad',
  timestamps: false
});

module.exports = ControlCalidad;