const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const OrderProduct = require("./order_product");

const Product = sequelize.define(
  "Product",
  {
    name: DataTypes.STRING,
    unit: DataTypes.STRING,
    price: DataTypes.BIGINT,
  },
  {
    sequelize,
    modelName: "Product",
    underscored: true,
  }
);

// Product.hasMany(OrderProduct);

module.exports = Product;