const httpStatus = require("http-status");
const { Product } = require("../models");

/**
 * Get product list with pagination
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const response = await Product.findAll();
    const result = await res.json(response);

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Get product list
 * @public
 */
exports.getAll = async (req, res, next) => {
  try {
    const response = await Product.findAll();
    const result = await res.json(response);

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Get product
 * @public
 */
exports.get = async (req, res) => {
  try {
    const response = await Product.findByPk(req.params.id);
    const result = await res.json(response);

    return res.json(result);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Create new product
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    await Product.create(req.body);

    res.status(httpStatus.CREATED).json({ success: true });
  } catch (error) {
    next(error);
  }
};

/**
 * Update existing product
 * @public
 */
exports.update = async (req, res, next) => {
  try {
    await Product.update(req.body, { where: { id: req.params.id } });

    res.status(httpStatus.OK).json({ success: true });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete product
 * @public
 */
exports.remove = async (req, res, next) => {
  try {
    await Product.destroy({ where: { id: req.params.id } });

    res.status(httpStatus.OK).json({ success: true });
  } catch (error) {
    next(error);
  }
};
