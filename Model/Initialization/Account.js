const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion de modelo

const Account = sequelize.define('Account',{
    id_cuenta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: false        
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,       
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    extension: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_creacion_cuenta: {
        type: DataTypes.DATE,
        allowNull: false
    }
} , {
    sequelize,
    modelName: 'Account',
    tableName: 'Cuenta',
    timestamps: false
});

module.exports = Account;