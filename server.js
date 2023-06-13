import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

dotenv.config();
connectDB();

const app = express();

app.use(json({ extended: false }))
app.use(cors("*"))
app.use(morgan('tiny'))
app.get('/', (req, res) => {
  res.send("API is running")
});

const PORT = process.env.PORT || 8564

app.listen(PORT, (req, res) => {
  console.log(`Listening on port: ${PORT}`)
})
