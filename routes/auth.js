const router=require("express").Router();
const User=require("../models/User");

// const {registerUser,loginUser} =require("../controllers/auth.js");
//Register
// router.post("/register",registerUser);

//Login Route
router.post("/login",async (req,res)=>{
    
    const username=req.body.username;
    const password=req.body.password;
    User.findOne({username: username},function(err,founduser) {
        if(err){
            res.status(500).json(err);
        }
        else{
            if(founduser){
                if(founduser.password===password){
                    if(founduser.username==='admin'){
                        res.status(200).json({status: 'admin'});
                    }
                    else{
                        res.status(200).json({status: 'user'});
                    }
                }
                else{
                    res.status(500).json(err);
                }
            }
        }
  

})

})


module.exports=router;