const express = require("express");
const LoginRouter = express.Router();
const signupModel = require("../models/schema");

LoginRouter.post("/signup", async (req, res) => {
    console.log("Request Body:", req.body);
    const data = req.body;

    try {
        // const newUser = new signupModel(data);
        // const savedUser = await newUser.save();

        res.status(200).json({ success: true, message: "Registration Success", data});
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
});

LoginRouter.post("/login", (req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.log(error);
    }
});

module.exports = LoginRouter;
