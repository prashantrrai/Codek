const express = require('express')
const userRouter = express.Router()
const { addHandler, getHandler, deleteHandler, updateHandler } = require('../controllers/user.controllers')
// , getHandler, updateHandler, deleteHandler
userRouter.post("/add", addHandler);
userRouter.get("/users", getHandler);
userRouter.put("/update/:id", updateHandler);
userRouter.delete("/delete/:id", deleteHandler);

module.exports = userRouter;