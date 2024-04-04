const httpStatus = require('http-status');

const { Customer } = require("../models");
const { validationResult } = require('express-validator');

/**
 * Get user list
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
    const customer = await Customer.create(req.body);

    res.status(httpStatus.CREATED).json(req.body);
  } catch (error) {
      next(User.checkDuplicateEmail(error));
  }
};

/**
 * Replace existing user
 * @public
 */
// exports.replace = async (req, res, next) => {
//     try {
//         const { user } = req.locals;
//         const newUser = new User(req.body);
//         const ommitRole = user.role !== 'admin' ? 'role' : '';
//         const newUserObject = omit(newUser.toObject(), '_id', ommitRole);

//         await user.updateOne(newUserObject, { override: true, upsert: true });
//         const savedUser = await User.findById(user._id);

//         res.json(savedUser.transform());
//     } catch (error) {
//         next(User.checkDuplicateEmail(error));
//     }
// };

/**
 * Update existing user
 * @public
 */
// exports.update = (req, res, next) => {
//     const ommitRole = req.locals.user.role !== 'admin' ? 'role' : '';
//     const updatedUser = omit(req.body, ommitRole);
//     const user = Object.assign(req.locals.user, updatedUser);

//     user.save()
//         .then((savedUser) => res.json(savedUser.transform()))
//         .catch((e) => next(User.checkDuplicateEmail(e)));
// };

/**
 * Delete user
 * @public
 */
// exports.remove = (req, res, next) => {
//     const { user } = req.locals;

//     user.remove()
//         .then(() => res.status(httpStatus.NO_CONTENT).end())
//         .catch((e) => next(e));
// };
