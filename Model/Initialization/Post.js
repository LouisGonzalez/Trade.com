const { Model, DataTypes} =  require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const Post = sequelize.define('Post', {
    cuenta: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING(30),
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