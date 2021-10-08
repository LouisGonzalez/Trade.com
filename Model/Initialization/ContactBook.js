const { Model, DataTypes} = require('sequelize');
const sequelize = require('../Db');

const Contact = sequelize.define('Contact', {
    cuenta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cuenta_contacto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    nickname: {
        type: DataTypes.STRING(50)
    }
} , {
        sequelize,
        modelName: 'Contact',
        tableName: 'Agenda',
        timestamps: false 
});

module.exports = Contact;