const Inventory = require("../models/inventory.models");

const getInventory = async (req, res) => {
  try {
    const data = await Inventory.find();
    return res.json({
      message: "Successfully fetched inventories",
      data,
    });
  } catch (err) {
    return res.json({
      message: `Failed to get data ${err.message}`,
      data: [],
    });
  }
};

module.exports = { getInventory };
