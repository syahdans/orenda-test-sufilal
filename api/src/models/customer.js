const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Order = require("./order");

const Customer = sequelize.define(
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

// Customer.hasMany(Order);

module.exports = Customer;