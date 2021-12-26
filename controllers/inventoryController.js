const Inventory=require("../models/Inventory");
exports.FSN1=async (req,res)=>{
    var query1 = {date_purchased: {$lt: new Date((new Date())-43800*60*60*1000)}}; // we have to take the item_id of the item which we want to add into inventory. 
    Inventory.find(query1,function (err,foundItems) {
        if (!err) {
            res.status(200).json({foundItems:foundItems});
        }
        else {
            res.send(err);
        }
    })
    
}
exports.FSN2=async (req,res)=>{
    var query2 = {date_purchased: {$lt: new Date((new Date())-2*43800*60*60*1000)}}; // we have to take the item_id of the item which we want to add into inventory. 
    Inventory.find(query2,function (err, foundItems) {
        if (!err) {
            res.status(200).json({foundItems:foundItems});
        }
        else {
            res.send(err);
        }
    })
}


exports.inventory=async (req,res)=>{
    Inventory.find((err,items)=>{
        if(!err){
            res.send(items);
        }else{
            res.send(err);
        }
})

}

exports.searchItem=async function(req,res){
    const item_id = req.params.itemId;
  
    Inventory.findOne({item_id: item_id},function(err,foundItem){
        if (err) throw err;
        console.log(foundItem);   
})

}

exports.toInventory=async (req,res)=>{
    const item_id = req.body.item_id;
    Inventory.findOneAndUpdate({ item_id:item_id },{$inc:{item_count:1,issued_count:-1}},function(err,doc){
        if(err){
            console.log(err);
        }
        else{
            console.log(doc);
        }
    }
    )
}