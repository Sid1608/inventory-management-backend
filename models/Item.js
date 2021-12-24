const mongoose=require('mongoose');

const ItemSchema =new mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
    },
    item_name:{
        type: String,
        required: true,
    },
    expected_cost:{
        type:Number,
        default:0,
       
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