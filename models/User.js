const mongoose=require('mongoose');

const UserSchema =new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min:3,
        max:20,
        unique:true
    },
    password:{
        type: String,
        required: true,
        min:6
    },
    Department:{
        type:String,
        default:"",
       
    }
   
},
{
    timestamps: true
}

);

module.exports=mongoose.model("User",UserSchema);