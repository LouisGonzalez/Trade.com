const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const Conversation = sequelize.define('Conversation', {
    cuenta_emisora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cuenta_receptora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anonimo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
} , {
        sequelize,
        modelName: 'Conversation',
        tableName: 'Conversacion',
        timestamps: false
});

module.exports = Conversation;