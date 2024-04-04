const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer.controller');
const validator = require('../validations')
const validate = require('../utils/validate');

// Define routes
router.get('/', controller.list);

router.get('/:id', controller.get);

router.post("/", validate(validator.customer.create), controller.create);

// router.put('/:id', controller.update);

// router.delete('/:id', controller.remove);

module.exports = router;