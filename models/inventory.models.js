const mongoose = require("mongoose");

const InventorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,  
  },
  category: {
    type: String,
    required: true,
  }
});

const InventoryModel = mongoose.model("inventories", InventorySchema);
module.exports = InventoryModel;
