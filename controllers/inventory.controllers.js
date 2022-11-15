import Inventory from "../models/inventory.models.js";

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

export { getInventory };
