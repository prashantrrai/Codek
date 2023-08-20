const express = require("express");
require("dotenv").config();
var cors = require('cors')
require("./connection/db");

const app = express();
const PORT = process.env.PORT || 4500;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())


const LoginRouter = require('./src/routes/login')
app.use(LoginRouter)

app.get("/", async (req, res) => {
    try{
        res.status(200).json({ success: true , message: "API is working"});
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server connected on port ${PORT}`);
});
