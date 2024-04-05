const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Order = require("./order");
const Product = require("./product");

const OrderProduct = sequelize.define(
  "order_products",
  {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    amount: DataTypes.BIGINT,
  },
  {
    sequelize,
    modelName: "order_product",
    underscored: true,
  }
);

// OrderProduct.belongsTo(Product);

// OrderProduct.belongsTo(Order);

module.exports = OrderProduct;
