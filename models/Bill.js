const mongoose=require('mongoose');

const BillSchema =new mongoose.Schema({
    bill_no:{
        type:String,
        require: true,
        unique:true
    },
    order_id:{
        type: String,
        required: true,
    },
    bill_amount:{
        type: Double,
        required: true,
    },
    bill_date:{
        type: Date,
        required: true,
    },
   
   
},
{
    timestamps: true
}

);

module.exports=mongoose.model("Bill",BillSchema);