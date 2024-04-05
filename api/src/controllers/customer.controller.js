const httpStatus = require('http-status');
const { Customer } = require("../models");

/**
 * Get user list with pagination
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const response = await Customer.findAll();
    const result = await res.json(response);

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Get user list
 * @public
 */
exports.getAll = async (req, res, next) => {
  try {
    const response = await Customer.findAll();
    const result = await res.json(response);

    return res.json(result);
  } catch (error) {
    next(error);
  }
};


/**
 * Get user
 * @public
 */
exports.get = async(req, res) => {
    try {
      const response = await Customer.findByPk(req.params.id);
      const result = await res.json(response);

      return res.json(result);
    } catch (error) {
        console.error(error);
    }
};

/**
 * Create new user
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    await Customer.create(req.body);

    res.status(httpStatus.CREATED).json({ success: true });
  } catch (error) {
      next(error);
  }
};

/**
 * Update existing user
 * @public
 */
exports.update = async (req, res, next) => {
  try {
    await Customer.update(req.body, { where: { id: req.params.id } });

    res.status(httpStatus.OK).json({ success: true });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete user
 * @public
 */
exports.remove = async (req, res, next) => {
  try {
    await Customer.destroy({ where: { id: req.params.id } });

    res.status(httpStatus.OK).json({ success: true });
  } catch (error) {
    next(error);
  }
};
