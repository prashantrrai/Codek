const signupModel = require("../models/schema");


async function signupHandler (req, res) {
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
        const data = await newUser.save();

        return res.status(200).json({ success: true, message: "Registration Success", data});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: error.message });
    }
}


async function getdataHandler (req, res) {
    try {
        const data = await signupModel.find()
        // console.log("36",data);
        return res.json({success:true, data})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: error.message });
    }
}

async function loginHandler (req, res) {
    try {
        console.log(req.body);
        const {email_phone, password} = req.body
        // if(!email_phone && !password){
        //     return res.status(400).json({ success: false, message: "All  fields are required"});
        // }

        const user = await signupModel.findOne({$or: [{email: email_phone}, {phone: email_phone}]});
        // console.log("51",user)
        if (!user) {
            return res.json({success:false, message: "User Not Found, Kindly Register"});
        }

        if (user.password !== password){
            return res.status(200).json({success:false, message: "Incorrect Password"});
        }

        return res.status(200).json({success:true, message: "Login Successful"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: error.message });
    }
}

module.exports = {loginHandler, getdataHandler, signupHandler};