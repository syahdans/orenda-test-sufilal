const httpStatus = require("http-status");
const { Order, Product, OrderProduct } = require("../models");
const e = require("express");

/**
 * Get Order list
 * @public
 */
exports.getAll = async (req, res, next) => {
  try {
    const response = await Order.findAll();
    const result = await res.json(response);

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Get Order
 * @public
 */
exports.get = async (req, res) => {
  try {
    const response = await Order.findByPk(req.params.id);
    const result = await res.json(response);

    return res.json(result);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Create new Order
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    let products = await Product.findAll({
      attributes: ["id", "price"],
      where: {
        id: req.body.products.map((e) => e.product_id),
      },
    });

    let order_products = req.body.products.map((e) => {
      return {
        order_id: null,
        product_id: e.product_id,
        qty: e.qty,
        amount:
          e.qty *
          products
            .filter((item) => item.id == e.product_id)
            .map((item) => item.price)
            .reduce((a, b) => a + b, 0),
      };
    });

    let newOrder = await Order.create({
      customer_id: req.body.customer_id,
      discount: req.body.discount.toFixed(2),
      sub_total: order_products.map((e) => e.amount).reduce((a, b) => a + b, 0),
    });

    await OrderProduct.bulkCreate(
      order_products.map((e) => {
        return { ...e, order_id: newOrder.id };
      })
    );

    res.status(httpStatus.CREATED).json({ success: true });
  } catch (error) {
    console.log(error);

    next(error);
  }
};
