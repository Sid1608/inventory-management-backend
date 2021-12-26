const User=require("../models/User");
const Item=require("../models/Item");
const mongoose = require("mongoose")

exports.FSN1=async (req,res)=>{
    var query1 = {date_purchased: {$lt: new Date((new Date())-43800*60*60*1000)}}; // we have to take the item_id of the item which we want to add into inventory. 
    Item.find(query1,function (err,foundItems) {
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
    Item.find(query2,function (err, foundItems) {
        if (!err) {
            res.status(200).json({foundItems:foundItems});
        }
        else {
            res.send(err);
        }
    })
}
exports.inventory=async (req,res)=>{
    Item.find((err,items)=>{
        if(!err){
            res.send(items);
        }else{
            res.send(err);
        }
    })
   

}
exports.searchItem=async function(req,res){
    const item_id = req.params.itemId;
  
    Item.findOne({item_id: item_id},function(err,foundItem){
        if (err) throw err;
        console.log(foundItem);   
    })
    // Inventory.findOne({item_id: item_id}).populate("Item").exec(function(err,foundItem){
    //     if (err) throw err;
    //     res.status(200).json({item:foundItem});
    // })

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

exports.toInventory=async (req,res)=>{
    const item_id = req.body.item_id;
    Item.findOneAndUpdate({ item_id:item_id },{$inc:{item_count:1,issued_count:-1}},function(err,doc){
        if(err){
            console.log(err);
        }
        else{
            console.log(doc);
        }
    }
    )
}