const mongoose=require('mongoose');

const ItemSchema =new mongoose.Schema({
    item_id:{
        type:String,
        require: true,
        unique:true
    },
    item_name:{
        type: String,
        required: true,
    },
    expected_cost:{
        type:Double,
        default:0.0,
       
    },
    item_decription:{
        type:String,
        default:"",
       
    }
   
},
{
    timestamps: true
}

);

module.exports=mongoose.model("Item",ItemSchema);