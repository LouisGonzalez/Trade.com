const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

//Creacion del modelo

const Service = sequelize.define('Service', {
    id_post: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo_servicio: {
        type: DataTypes.STRING,
        allowNull: false
    }
} , {
    sequelize,
    modelName: 'Service',
    tableName: 'Servicio',
    timestamps: false
}); 

module.exports = Service;