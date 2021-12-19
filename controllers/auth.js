const User=require("../models/User");
// const bcrypt = require("bcrypt");//asynchronous function 
// const jwt=require("jsonwebtoken")

// export const registerUser = async (req,res)=>{
    
//     try{
//         //generate new password
//         const salt=await bcrypt.genSalt(10);
//         const hashedPassword=await bcrypt.hash(req.body.password,salt);
//         //create new user
//         console.log(req.body.username);
//         const newUser= await new User({
//             username:req.body.username,
//             password:hashedPassword
//         })
//         //save user and respond
//         const user=await newUser.save();
//         const token=jwt.sign({
//             name:user.username,
//         },'secret123')
//         res.status(200).json({status: 'ok',user:token});
//     }catch(err){
//         console.log(err);
//         res.status(500).json({status: 'error',user:false,error:err});
//     }
// }
// export const loginUser=async (req,res)=>{
    
//         const username=req.body.username;
//         const password=req.body.password;
//         User.findOne({username: username},function(err,founduser) {
//             if(err){
//                 res.status(500).json(err);
//             }
//             else{
//                 if(founduser){
//                     if(founduser.password===password){
//                         if(founduser.username==='admin'){
//                             res.status(200).json({status: 'admin'});
//                         }
//                         else{
//                             res.status(200).json({status: 'user'});
//                         }
//                     }
//                     else{
//                         res.status(500).json(err);
//                     }
//                 }
//             }
      
    
//     })
    
// }