const express = require("express");
const LoginRouter = express.Router();
const signupModel = require("../models/schema");
const {loginHandler, getdataHandler, signupHandler} = require("../controller/login")

LoginRouter.post("/signup", signupHandler);

LoginRouter.get("/getdata", getdataHandler);

LoginRouter.post("/login", loginHandler);



module.exports = LoginRouter;
