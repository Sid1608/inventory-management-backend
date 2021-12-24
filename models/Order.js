


const mongoose=require('mongoose');

const OrderSchema =new mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
        
    },
    item_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required:true,
    },
    item_count:{
        type:Number,
        default:0,
    },
    remark:{
        type: String,
        default:""
        // required: true,
    },
    order_date:{
        type: Date,
        // required: true,
    },
    total_cost:{
        type:Number,
        default:0,
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