const router=require("express").Router();
const User=require("../models/User");
const {userDashboard} =require("../controllers/Users.js");
const {orderHistoryUser,orderItem} =require("../controllers/orderController");



//Dashboard Route
router.get("/dashboard",userDashboard);

// Order-Items Router
router.post("/orderItem",orderItem)

//Order History Route
router.get("/orderHistory",orderHistoryUser)



module.exports=router;