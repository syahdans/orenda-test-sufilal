const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");
const validator = require("../validations");
const validate = require("../utils/validate");

// Define routes
router.get("/", controller.getAll);

router.get("/:id", controller.get);

router.post("/", validate(validator.product.create), controller.create);

router.put("/:id", validate(validator.product.update), controller.update);

router.delete("/:id", controller.remove);

module.exports = router;
