const router=require("express").Router();
const User=require("../models/User");

//update user
router.patch("/updateUser",async (req,res)=>{
    
    const username=req.body.username;
    const password=req.body.password;
    User.update({username:username},{$set: req.body},function(err){
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