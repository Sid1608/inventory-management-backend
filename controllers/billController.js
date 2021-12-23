const Bill=require("../models/Bill");


exports.viewBill=async (req,res)=>{
    try{
        var order_id=req.body.order_id
        var query1 = {order_id:order_id}; // we have to take the item_id of the item which we want to add into inventory. 
        Bill.find(query1).toArray(function (err, result1) {
            if (err) throw err;
            console.log(result1);
        });

    }catch(err){
        res.status(500).json({err});
    }
}