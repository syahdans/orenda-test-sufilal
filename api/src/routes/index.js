const express = require('express');

const customerRoutes = require('./customer.route');
const productRoutes = require('./product.route');
const orderRoutes = require("./order.route");

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
// router.use('/docs', express.static('docs'));

router.use('/customers', customerRoutes);
router.use('/products', productRoutes);
router.use('/orders', orderRoutes);

module.exports = router;