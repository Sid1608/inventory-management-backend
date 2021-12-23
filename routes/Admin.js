const router=require("express").Router();
const User=require("../models/User");
const bcrypt = require("bcrypt");
const {updateUser,deleteUser,allUsers} = require("../controllers/userController")
const {allOrders,orderHistoryAll}=require("../controllers/orderController");
const {inventory}=require("../controllers/inventoryController");
const {issuedItems}=require("../controllers/itemController");
//1.Inventory Route
router.get("/inventory",inventory);

// 2.Get All Orders Route
router.get("/orders",allOrders);

//3.Issued Items Route
router.get("/issuedItems",issuedItems);

//4.Get All Users Route       
router.get("/users",allUsers);
//5.update user
router.patch("/updateUser",updateUser);
//6.Delete User
router.delete("/deleteUser/:username",deleteUser);



module.exports=router;