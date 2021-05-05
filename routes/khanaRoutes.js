const express = require("express");
const {
    khanaIndex,
    khanaDescription,
} = require("../controller/khanaConroller");

const router = express.Router();

router.get("/", khanaIndex);

router.get("/:id", khanaDescription);

module.exports = router;