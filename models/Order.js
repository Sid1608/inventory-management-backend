


const mongoose=require('mongoose');

const ItemSchema =new mongoose.Schema({
    order_id:{
        type: String,
        required: true,
        unique:true,
    },
    item_id:{
        type:String,
        require: true,
        unique:true
    },
    item_count:{
        type:Number,
        default:0,
    },
    remark:{
        type: String,
        required: true,
    },
    Order_date:{
        type: Date,
        required: true,
    },
    total_cost:{
        type:Decimal,
        default:0.0,
    },
    isVerified:{
        type:Boolean,
        default:false,
    }
   
   
},
{
    timestamps: true
}

);

module.exports=mongoose.model("Item",ItemSchema);