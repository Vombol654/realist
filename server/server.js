import express from "express";
// const express = require("express");
// const morgan = reequire("morgan");
// const cors = require("cors");
import morgan from "morgan";
import cors from "cors";
// const mongoose = require("mongoose");
import mongoose from "mongoose";
import { DATABASE } from "./config.js";
import authRoutes from "./routes/auth.js";
const app = express();
// database
mongoose
  .connect(DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
// middleware
app.use("/api", authRoutes);
app.listen(8000, () => {
  console.log("server is  running on port no 8000");
});
