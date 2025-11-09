const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Lote = sequelize.define('Lote', {
  id_lote: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_proveedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'proveedor', // nombre de la tabla relacionada
      key: 'id'
    }
  },
  fecha_recepcion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  peso: {
    type: DataTypes.DECIMAL(10, 2), // Ajuste para valores con decimales
    allowNull: false
  },
  unidad_medida: {
    type: DataTypes.STRING,
    allowNull: false
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
  tableName: 'lote',
  timestamps: false
});

module.exports = Lote;