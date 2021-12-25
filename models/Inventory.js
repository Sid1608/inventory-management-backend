const mongoose=require('mongoose');

const InventorySchema =new mongoose.Schema({
    item_id:{
        type:String,
        require: true,
        unique:true
    },
    item_count:{
        type: Number,
        default:0,
    },
    issued_count:{
        type:Number,
        default:0,
        
    },
    date_purchased:{
        type:Date,
        require: true,
        unique:true

    }
},
{
    timestamps: true
}

);

module.exports=mongoose.model("Inventory",InventorySchema);