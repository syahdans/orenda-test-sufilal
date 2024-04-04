const { DataTypes } = require('sequelize');
const sequelize = require('../database');

module.exports = sequelize.define(
  "Customer",
  {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Customer",
    underscored: true,
  }
);