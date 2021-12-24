const User=require("../models/User");
const Item=require("../models/Item");
const mongoose = require("mongoose")
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

// add Item : Only Admin
exports.addItem=async (req,res)=>{
    try{
        const newItem= await new Item({
            _id: new mongoose.Types.ObjectId(),
            item_name:req.body.item_name,
            expected_cost:req.body.expected_cost,
            item_description:req.body.item_description,
            item_count:req.body.item_count
        })
        const item = await newItem.save();
        res.status(200).json({status: 'Item Added Successfully',item:item});
    }catch(err){
        console.log(err);
        res.status(500).json({status: 'Item Not Added Successfully',item:false,error:err});
    }

}


exports.itemCost =async (req,res)=>{
    var query = {expected_cost: -1}; // we have to take the item_id of the item which we want to add into inventory. 
    Item.find().sort(query).toArray(function (err, result) {
        if (err) throw err;
        res.status(200).json({order:result[0]});
    });
}