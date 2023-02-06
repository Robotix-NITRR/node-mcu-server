const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./db");
// const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");
const dataRoutes = require("./routes/dataRoutes")

dotenv.config();
const app = express();

connectDB();
app.use(express.json());
app.use(cors());
app.use(express.json()); // to accpet json data

const PORT = process.env.PORT || 5000;

// api routes
app.use("/api/", dataRoutes); // route to authenticate user using Google OAuth2.0 and verify email
// app.use("/api/user", userRoutes); // route to cross check user and save data

const server = app.listen(
  PORT,
  console.log(`Server running on PORT : http://localhost:${PORT}`.yellow.bold)
);
