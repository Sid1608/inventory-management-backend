

const Order= require("../models/Order")
const mongoose = require("mongoose")

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
        res.status(200).json({order:result[0]});
    });
}



//User order items :only user
exports.orderItem =async (req,res)=>{
    try{
        const newOrder = await new Order({
            _id:new mongoose.Types.ObjectId(),
            user_id:req.body.user_id,
            item_id: req.body.item_id,
            item_count:req.body.item_count,
            remark:req.body.remark,
            order_date:Date.now(),
            total_cost:req.body.total_cost
            // items_issued=[{item_id,item_count}]
        });
        const order=await newOrder.save();
        res.status(201).json({status: 'Succesfully added a new Order',Order:order});
    }catch(err){
        console.log(err);
        res.status(500).json({status: 'Order Not Added Successfully',order:false,error:err});
    }


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
    const order_id=req.params.order_id;
    const order = new Order({
        _id:req.body.order_id,
        item_id: req.body.item_id,
        item_count:req.body.item_count,
        remark:req.body.remark,
        total_cost:req.body.total_cost,
        order_date:req.body.order_data,
        isVerified:true,
        // items_issued=[{item_id,item_count}]
    });
    Order.updateOne({order_id:req.body.order_id},{$set:order},(err)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.status(200).json("order verified successfully")
        }
    });
}

