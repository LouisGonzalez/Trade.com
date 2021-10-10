const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion de modelo
const StandardAccount = sequelize.define('StandardAccount', {
    id_cuenta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: false        
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_nacimiento: {
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