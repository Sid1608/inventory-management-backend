const mongoose=require('mongoose');

const InventorySchema =new mongoose.Schema({
    item_id:{
        type:mongoose.Schema.Types.ObjectId,
        require: true,
        unique:true,
        ref:'Item'
    },
    item_count:{
        type: Number,
        default:0,
    },
    issued_count:{
        type:Number,
        default:0,
        
    }
},
{
    timestamps: true
}

);

module.exports=mongoose.model("Inventory",InventorySchema);