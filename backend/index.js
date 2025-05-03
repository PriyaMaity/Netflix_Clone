const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [process.env.CLIENT_URL, "http://localhost:5173"];

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS policy: origin ${origin} not allowed`));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/api/v1", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to db successfully"))
  .catch((err) => console.log("Error in connecting to db", err));

app.listen(PORT, (err) => {
  if (err) console.log(`Error in listening to Port : ${PORT}`);
  console.log(`Listening to Port : ${PORT}`);
});
