const express = require("express");
const router = express.Router();
const controller = require("../controllers/order.controller");
const validator = require("../validations");
const validate = require("../utils/validate");

// Define routes
router.get("/", controller.getAll);

router.get("/:id", controller.get);

router.post("/", controller.create);

module.exports = router;
