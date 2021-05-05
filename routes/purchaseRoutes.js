const express = require("express");
const { purchaseIndex } = require("../controller/purchaseController");
const router = express.Router();

router.get("/", purchaseIndex);

module.exports = router;
