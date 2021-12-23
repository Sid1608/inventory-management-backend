


const mongoose=require('mongoose');

const OrderSchema =new mongoose.Schema({
    order_id:{
        type: String,
        unique:true,
    },
    user_id:{
        type:String,
        required:true,
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
        // required: true,
    },
    order_date:{
        type: Date,
        // required: true,
    },
    total_cost:{
        type:Number,
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

module.exports=mongoose.model("Order",OrderSchema);