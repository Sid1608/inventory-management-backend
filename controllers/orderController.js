

const Order= require("../models/Order")


// getting all order: for admin
export const allOrders=async function(req,res){
    
		Order.find(function (err, orders) {
			if (!err) {
				res.send(orders);
			}
			else {
				res.send(err);
			}
		})

}


// // getting all order History: for admin
// export const orderHistoryAll=async function(req,res){

// }


//getting specific user order History: for user
export const orderHistoryUser=async function(req,res){
    Order.find({user_id:req.body.user_id},(err,orders)=>{
        if(!err){
            res.send(orders);
        }else{
            res.send(err);
        }
    })
}



// for Serching order by ordername
export const searchOrder = async function(req,res){
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
export const recentOrder =async (req,res)=>{
    var query = {order_date: -1}; // we have to take the item_id of the item which we want to add into inventory. 
    Order.find().sort(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result[0]);
    });
}



//User order items :only user

export const orderItem =async (req,res)=>{
    const Order = new Article({
        item_id: req.body.item_id,
        item_count:req.body.item_count,
        remark:req.body.remark,
        order_date:req.body.order_data,
        total_cost:req.body.total_cost
    });
    Order.save(function (err) {
        if (!err) {
            res.send("Succesfully added a new Order");
        }
        else {
            res.send(err);
        }
    });

}