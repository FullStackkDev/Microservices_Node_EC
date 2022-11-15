import express from "express";
const router = express.Router();

import { getInventory } from "../controllers/inventory.controllers.js";

router.get("/", getInventory);

export default router;
