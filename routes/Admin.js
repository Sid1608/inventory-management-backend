const router=require("express").Router();
const User=require("../models/User");
const bcrypt = require("bcrypt");//asynchronous function 
//update user
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
//delete User
router.delete("/deleteUser/:username",async (req,res)=>{
    
    User.deleteOne({username:req.params.username},function(err){
        if(!err){
            res.status(200).json("user deleted successfully");
        }else{
            res.status(500).json(err);
        }
    });
  
})


//Get All Users Route
// router.get("/allUsers")


// Get All Orders Route
// router.get("/orders")


//Inventory Route


//Order History Route

//Issued Items Route
module.exports=router;