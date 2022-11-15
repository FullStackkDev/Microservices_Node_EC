import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
import { connectDB } from "./db/index.js";
import InventoryRouter from "./routes/inventory.routes.js";

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send({ message: "NodeJS API is running" });
});

app.use("/inventory", InventoryRouter);

app.listen(PORT, console.log(`server running on port ${PORT}`));

export default app;
