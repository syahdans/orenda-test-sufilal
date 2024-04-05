const { DataTypes } = require("sequelize");
const sequelize = require("../database");

module.exports = sequelize.define(
  "Product",
  {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "order_product",
  }
);
