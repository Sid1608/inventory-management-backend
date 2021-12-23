

const Order= require("../models/Order")


// getting all order: for admin
exports.allOrders=async function(req,res){
    
		Order.find(function (err, orders) {
			if (!err) {
				res.send(orders);
			}
			else {
				res.send(err);
			}
		})

}


//getting specific user order History: for user
exports.orderHistoryUser=async function(req,res){
    Order.find({user_id:req.body.user_id},(err,orders)=>{
        if(!err){
            res.status(200).json({orders:orders});
        }else{
            res.send(err);
        }
    })
}



// for Searching order by orderid and for Order Details
exports.searchOrder = async function(req,res){
    Order.findOne({order_id :req.body.order_id},function(err,foundOrder){
    if(!err){
        res.send(foundOrder);
    }
    else{
        res.send(err)
    }
})
}

//Getting Recent Orders: to be display in user dashboard
exports.recentOrder =async (req,res)=>{
    var query = {order_date: -1}; // we have to take the item_id of the item which we want to add into inventory. 
    Order.find().sort(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result[0]);
    });
}



//User order items :only user
exports.orderItem =async (req,res)=>{
    const order = new Order({
        item_id: req.body.item_id,
        item_count:req.body.item_count,
        remark:req.body.remark,
        order_date:req.body.order_data,
        total_cost:req.body.total_cost
    });
    order.save(function (err) {
        if (!err) {
            res.send("Succesfully added a new Order");
        }
        else {
            res.send(err);
        }
    });

}


//Reject Order  Request
exports.rejectOrder =(req,res)=>{
    Order.deleteOne({order_id:req.body.order_id},(err)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.status(200).json("order rejected successfully")
        }
    });
}



// Accept Order Request
exports.acceptOrder =(req,res)=>{
    Order.update({isVerified:true},(err)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.status(200).json("order verified successfully")
        }
    });
}

