const { Sequelize } = require('sequelize');
const config = require('../configs/db.config')
const sequelize = new Sequelize(config.development);

module.exports = sequelize;