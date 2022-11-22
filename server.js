const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const { connectDB } = require("./db");
const InventoryRouter = require("./routes/inventory.routes");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send({ message: "NodeJS API is running" });
});

app.use("/inventory", InventoryRouter);

app.listen(PORT, console.log(`server running on port ${PORT}`));

module.exports = app;
