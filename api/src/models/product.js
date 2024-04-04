const { DataTypes } = require("sequelize");
const sequelize = require("../database");

module.exports = sequelize.define(
  "Product",
  {
    name: DataTypes.STRING,
    unit: DataTypes.STRING,
    price: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Product",
    underscored: true,
  }
);