const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

//Creacion de modelo
const StandardAccount = sequelize.define('StandardAccount', {
    id_cuenta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_creacion_cuenta: {
        type: DataTypes.DATE,
        allowNull: false
    }
} , {    
    sequelize,
    modelName: 'StandardAccount',
    tableName: 'CuentaEstandar',
    timestamps: false
});

module.exports = StandardAccount;