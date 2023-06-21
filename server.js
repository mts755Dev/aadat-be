import 'dotenv/config'
import cors from "cors";
import morgan from "morgan";
import session from 'express-session';
import express, { json } from "express";
import connectDB from "./src/config/db.js";
import authRouter from "./src/routes/api/auth.js";
import _initializePassport from './src/config/passport.js'
import { errorHandler } from "./src/middleware/errorHandler.js";

connectDB();

const app = express();

app.use(json({ extended: false }));
app.use(cors("*"));
app.use(morgan('tiny'));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}));

app.get('/', (req, res) => {
  res.send("API is running");
});

app.use('/api/auth', authRouter)

const PORT = process.env.PORT || 8564

app.listen(PORT, (req, res) => {
  console.log(`Listening on port: ${PORT}`)
})

app.use(errorHandler);
