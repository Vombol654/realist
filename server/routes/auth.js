import express from "express";
const router = express.Router();

import { welcome } from "../controllers/auth.js";
router.get("/", welcome);
export default router;
