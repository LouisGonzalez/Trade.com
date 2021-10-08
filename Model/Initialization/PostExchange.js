const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

const PostExchange = sequelize.define('PostExchange', {
    id_intercambio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    post: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
} , { 
        sequelize,
        modelName: 'PostExchange',
        tableName: 'Post_intercambio',
        timestamps: false
});

module.exports = PostExchange;