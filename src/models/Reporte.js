const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reporte = sequelize.define('Reporte', {
  id_reporte: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuario', // nombre de la tabla relacionada
      key: 'id_usuario'
    }
  },
  tipo_reporte: {
    type: DataTypes.STRING, // Podrías usar ENUM si quieres restringir valores
    allowNull: false
  },
  fecha_generacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
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
  tableName: 'reporte',
  timestamps: false
});

module.exports = Reporte;