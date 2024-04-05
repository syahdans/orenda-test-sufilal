const { DataTypes } = require("sequelize");
const sequelize = require("../database");

module.exports = sequelize.define(
  "Product",
  {
    customer_id: DataTypes.INTEGER,
    discount: DataTypes.FLOAT,
    sub_total: DataTypes.BIGINT,
  },
  {
    sequelize,
    modelName: "Order",
  }
);
