const { Model, DataTypes} =  require('sequelize');
const sequelize = require('../db');

//Creacion del modelo

const Post = sequelize.define('Post', {
    id_cuenta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_publicacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    costo: {
        type: DataTypes.DECIMAL(13,2),
        allowNull: false
    },
    divisa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    intercambio: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: 'Post',
    tableName: 'Post',
    timestamps: false
});

module.exports = Post;