const User=require("../models/User");

// Getting all users: only Admin
export const allUsers =async (req,res)=>{
		User.find(function (err, users) {
			if (!err) {
				res.send(users);
			}
			else {
				res.send(err);
			}
		})
}

// Updating users password :only admin
export const updateUser = async (req,res)=>{
    
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

}

//Deleting User :only admin
export const deleteUser=async (req,res)=>{
    
    User.deleteOne({username:req.params.username},function(err){
        if(!err){
            res.status(200).json("user deleted successfully");
        }else{
            res.status(500).json(err);
        }
    });
  
}




