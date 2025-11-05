const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reporte = sequelize.define('Reporte', {
  idRecepcion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'recepcion', // nombre de la tabla relacionada
      key: 'id'
    }
  },
  tipo: {
    type: DataTypes.ENUM('Recepción', 'Calidad', 'Inventario'),
    allowNull: false
  },
  fechaGeneracion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  generadoPor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuario', // nombre de la tabla relacionada
      key: 'id'
    }
  }
}, {
  tableName: 'reporte',
  timestamps: true
});

module.exports = Reporte;