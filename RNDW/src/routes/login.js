const express = require("express");
const LoginRouter = express.Router();
const signupModel = require("../models/schema");

LoginRouter.post("/signup", async (req, res) => {
    try {

        // console.log("Request Body:", req.body);
        const {name, email, phone, password} = req.body;

        if(!name || !email || !phone || !password){
            return res.status(400).json({ success: false, message: "All fields are Required"});
        }

        const availabledata = await signupModel.findOne({email});
        // console.log("14",availabledata)
        if(availabledata){
            return res.status(409).json({ success: false, message: "Email or Phone is Already Registered"});
        }

        const newUser = new signupModel({name, email, phone, password});
        const savedUser = await newUser.save();

        return res.status(200).json({ success: true, message: "Registration Success", savedUser});


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
