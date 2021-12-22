const router=require("express").Router();
const User=require("../models/User");

const {orderHistoryUser,orderItem,recentOrder} =require("../controllers/orderController");



//Dashboard Route
router.get("/dashboard",recentOrder);

// Order-Items Router
router.post("/orderItem",orderItem)

//Order History Route
router.get("/orderHistory",orderHistoryUser)



module.exports=router;