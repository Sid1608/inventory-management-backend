const Inventory=require("../models/Inventory");




export const FNC=async (req,res)=>{
    var query1 = {date_purchased: {$lt: new Date((new Date())-43800*60*60*1000)}}; // we have to take the item_id of the item which we want to add into inventory. 
    Inventory.find(query1).toArray(function (err, result1) {
        if (err) throw err;
        console.log(result1);
    });
    var query2 = {date_purchased: {$lt: new Date((new Date())-2*43800*60*60*1000)}}; // we have to take the item_id of the item which we want to add into inventory. 
    Inventory.find(query2).toArray(function (err, result2) {
        if (err) throw err;
        console.log(result2);
    });
}


export const inventory=async (req,res)=>{

    
}