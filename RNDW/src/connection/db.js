const mongoose = require("mongoose");
require('dotenv').config()
let url = process.env.URL;

mongoose.connect(url)
  .then(
    console.log("MongoDB Connected")
  )
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });