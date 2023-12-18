import express from "express";
const router = express.Router();

import { welcome, preRegister, register } from "../controllers/auth.js";
router.get("/", welcome);
router.post("/pre-register", preRegister);
router.post("/register", register);
export default router;
