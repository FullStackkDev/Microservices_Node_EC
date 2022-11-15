import mongoose from "mongoose";

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
});

const InventoryModel = mongoose.model("inventories", InventorySchema);
export default InventoryModel;
