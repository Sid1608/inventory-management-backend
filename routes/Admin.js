const router=require("express").Router();
const User=require("../models/User");
const bcrypt = require("bcrypt");//asynchronous function 
const {updateUser,deleteUser,allUsers} = require("../controllers/userController")
const {allOrders,orderHistoryAll}=require("../controllers/orderController");
const {issuedItems}=require("../controllers/issuedItems");
const {inventory}=require("../controllers/inventoryController");

//1.Inventory Route
router.get("/inventory",inventory);


// 2.Get All Orders Route
router.get("/allOrders",allOrders);




//3.Order History Route
router.get("/orderHistory",orderHistoryAll);




//4.Issued Items Route
router.get("/issuedItems",issuedItems)



//5.Get All Users Route
          // router.get("/allUsers")
router.get("/allUsers",allUsers);





//6.update user
router.patch("/updateUser",updateUser);
//7.Delete User
router.delete("/deleteUser/:username",deleteUser)













//Issued Items Route

module.exports=router;