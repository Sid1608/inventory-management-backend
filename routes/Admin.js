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
router.patch("/updateUser",async (req,res)=>{
    
    const username=req.body.username;
    const password=req.body.password;
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt);
    const user={
        username:username,
        password:hashedPassword,
        Department:req.body.Department,
    }
    User.update({username:username},{$set: user},function(err){
				if(!err){
                    res.status(200).json("Successfully updated password.")
				}else{
					res.status(500).json(err);
				}
			}
    )

});
//7.Delete User
router.delete("/deleteUser/:username",async (req,res)=>{
    
    User.deleteOne({username:req.params.username},function(err){
        if(!err){
            res.status(200).json("user deleted successfully");
        }else{
            res.status(500).json(err);
        }
    });
  
})













//Issued Items Route

module.exports=router;