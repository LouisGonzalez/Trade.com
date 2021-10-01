const { Model, DataTypes } = require('sequelize');
const { primaryKeyAttribute } = require('../../../../COMERCIO ELECTRONICO/database/models/Account');
const sequelize = require('../db');

//Creacion del modelo

const Article = sequelize.define('Article', {
    id_post: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    minimo_stock: {
        type: DataTypes.INTEGER
    },
    invisible: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Article',
    tableName: 'Articulo',
    timestamps: false
});

module.exports = Article;