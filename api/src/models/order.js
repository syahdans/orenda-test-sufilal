const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const OrderProduct = require('./order_product');
const Customer = require("./customer");

const Order = sequelize.define(
  "Order",
  {
    customer_id: DataTypes.INTEGER,
    discount: DataTypes.DECIMAL(5,2),
    sub_total: DataTypes.BIGINT,
  },
  {
    sequelize,
    modelName: "Order",
    underscored: true,
  }
);

// Order.belongsTo(Order);

// Order.hasMany(OrderProduct);

module.exports = Order;
