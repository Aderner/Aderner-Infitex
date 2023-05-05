import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import tasksRouter from "./routers/tasks.js";
dotenv.config();
const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("connected to database"));

app.use(express.json());

app.use("/tasks", tasksRouter);

app.listen(3000, () => {
  console.log("server started on port 3000");
});
