const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();
const InventoryModel = require("./models/inventory.models");
const InventoryData = require("./data/inventories.json");
const { connectDB } = require("./db");

connectDB();

const seedDB = async () => {
  await InventoryModel.deleteMany({});
  await InventoryModel.insertMany(InventoryData);
};

seedDB()
  .then(() => {
    mongoose.connection.close();
    console.log("Data seeded successfully");
  })
  .catch((err) => console.log(`Could not seed data due to ${err.message}`));