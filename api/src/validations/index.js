const { body } = require("express-validator");

module.exports = {
  customer: {
    create: [body("name").notEmpty()],
    update: [body("name").notEmpty()],
  },
  product: {
    create: [body("name").notEmpty()],
    update: [body("name").notEmpty()],
  },
  order: {
    create: [body("customer_id").notEmpty(), body("products").isArray()],
    update: [body("customer_id").notEmpty(), body("products").isArray()],
  },
};