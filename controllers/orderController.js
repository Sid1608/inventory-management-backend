

const Order= require("../models/Order")


// getting all order: for admin
export const allOrders=async function(req,res){

}


// getting all order History: for admin
export const orderHistoryAll=async function(req,res){

}


//getting specific user order History: for user
export const orderHistoryUser=async function(req,res){

}



// for Serching order by ordername
export const searchOrder = async function(req,res){
    const orderName = res.body.order;
    Order.findOne({name : orderName},function(err,foundOrder){
    if(!err && !foundOrder){

    }
    else{

    }
})
}

//Getting Recent Orders
export const recentOrder =async (req,res)=>{
    var query = {order_date: -1}; // we have to take the item_id of the item which we want to add into inventory. 
    Order.find().sort(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result[0]);
    });
}



//User order items 

export const orderItem =async (req,res)=>{


    

}