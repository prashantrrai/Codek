const mongoose = require('mongoose')
require('dotenv').config()

const URL = process.env.MONGO_URL;

mongoose.connect(URL)
.then(() => {
    console.log("MongoDB Connected")
})
.catch((error) => {
    console.error("MongoDB Connection Failed",error)
})