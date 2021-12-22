const router=require("express").Router();
const User=require("../models/User");
const bcrypt = require("bcrypt");//asynchronous function 

const {registerUser,loginUser} =require("../controllers/authController.js");

//1.Register
router.post("/register",registerUser);

//2.Login Route
router.post("/login",loginUser);



module.exports=router;