const { Sequelize } = require('sequelize');
const { database } = require('../config');
const sequelize =  new Sequelize(

    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: "mysql"
/*        dialectOptions: {
            ssl: {
                required:true,
                rejectUnauthorized: false
            }
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }*/
    }
    
);

module.exports = sequelize;
