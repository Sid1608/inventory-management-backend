const User=require("../models/User");
const Item=require("../models/Item");

exports.searchItem=async function(req,res){
    const itemName = res.body.item;
      Item.findOne({name : itemName},function(err,foundItem){
        if(!err){
            res.send(foundItem);
        }
        else{
            res.status(500).json(err);
        }
    })

}

// exports.issuedItems=async (req,res)=>{
    
// }
exports.itemCost =async (req,res)=>{
    var query = {expected_cost: -1}; // we have to take the item_id of the item which we want to add into inventory. 
    Item.find().sort(query).toArray(function (err, result) {
        if (err) throw err;
        res.status(200).json({order:result[0]});
    });
}