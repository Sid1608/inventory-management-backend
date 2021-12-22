const User=require("../models/User");
const Item=require("../models/Item");

export const searchItem=async function(req,res){
    const itemName = res.body.item;
  
    Item.findOne({name : itemName},function(err,foundItem){
    if(!err && !foundItem){
        res.send(foundItem);
    }
    else{
        res.send(err);
    }
})

}

export const issuedItems=async (req,res)=>{
    
}