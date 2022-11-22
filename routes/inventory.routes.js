const express = require("express");
const router = express.Router();

const { getInventory } = require("../controllers/inventory.controllers");

router.get("/", getInventory);

module.exports = router;
