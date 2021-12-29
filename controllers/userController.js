const User=require("../models/User");
const bcrypt = require("bcrypt");//asynchronous function 
const jwt=require("jsonwebtoken");

// Getting all users: only Admin
exports.allUsers =(req,res)=>{
		User.find(function (err, users) {
			if (!err) {
				res.status(200).json({users:users});
			}
			else {
				res.send(err);
			}
		})
}

// Updating users password :only admin
exports.updateUser = async (req,res)=>{
    
    const username=req.body.username;
    const password=req.body.password;
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt);
    const user={
        username:username,
        password:hashedPassword,
        department:req.body.department,
        name:req.body.name
    }
    User.updateOne({username:username},{$set: user},function(err){
				if(!err){
                    res.status(200).json("Successfully updated password.")
				}else{
					res.status(500).json(err);
				}
			}
    )

}

//Deleting User :only admin
exports.deleteUser= (req,res)=>{
    
    User.deleteOne({username:req.params.username},function(err){
        if(!err){
            res.status(200).json("user deleted successfully");
        }else{
            res.status(500).json(err);
        }
    });
  
}




