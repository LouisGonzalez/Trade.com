const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion de modelo
const BusinessAccount = sequelize.define('BusinessAccount',{
    id_cuenta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: false        
    },
    empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mision: {
        type: DataTypes.TEXT
    },
    vision: {
        type: DataTypes.TEXT
    },
    descripcion: {
        type: DataTypes.TEXT
    }
} , {
        sequelize,
        modelName: 'BusinessAccount',
        tableName: 'CuentaEmpresarial',
        timestamps: false

});

module.exports = BusinessAccount;