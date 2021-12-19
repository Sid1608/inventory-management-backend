const User=require("../models/User");


export const updateUser=async (req,res)=>{
    
    const username=req.body.username;
    const password=req.body.password;
    users.update(
        {username: req.params.username},
		{$set: req.body},
			function(err){
				if(!err){
					res.send("Successfully updated password.")
				}else{
					res.send(err);
				}
			}
    )
    // Users.findOne({username: username},function(err,founduser) {
    //     if(err){
    //         res.status(500).json(err);
    //     }
    //     else{
    //         if(founduser){
    //             if(founduser.password===password){
    //                 foundUser.update({password:password});
    //                 res.status(200).json("changed successfully");
    //             }
    //             else{
    //                 res.status(500).json(err);
    //             }
    //         }
    //     }
  

}

export const deleteUser=async (req,res)=>{
    
    const username=req.body.username;
    const password=req.body.password;
    User.deleteOne(
			
        {username:req.params.username,password:req.params.password},
        function(err){
        if(!err){
            res.send("Succesfully deleted Article the corresponding article");
        }else{
            res.send(err);
        }
    });
  
}