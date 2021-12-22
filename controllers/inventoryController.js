const Inventory=require("../models/Inventory");


//?
export const FNC1=async (req,res)=>{
    var query1 = {date_purchased: {$lt: new Date((new Date())-43800*60*60*1000)}}; // we have to take the item_id of the item which we want to add into inventory. 
    Inventory.find(query1).toArray(function (err, result1) {
        if (err) throw err;
        console.log(result1);
    });
    
}
export const FNC2=async (req,res){
    var query2 = {date_purchased: {$lt: new Date((new Date())-2*43800*60*60*1000)}}; // we have to take the item_id of the item which we want to add into inventory. 
    Inventory.find(query2).toArray(function (err, result2) {
        if (err) throw err;
        console.log(result2);
    });
}


export const inventory=async (req,res)=>{
    Inventory.find((err,items)=>{
        if(!err){
            res.send(items);
        }else{
            res.send(err);
        }
})

}

export const searchItem=async function(req,res){
    const item_id = res.body.item_id;
  
    inventory.findOne({item_id: item_id},function(err,foundItem){
        if (err) throw err;
        console.log(result1);   
})

}

export const toInventory=async (req,res)=>{
    var query = { item_id: "A02" }; // we have to take the item_id of the item which we want to add into inventory. 
        inventory.find(query).toArray(function (err, result) {
        if (err) throw err;
        const count = result[0].item_count

        var newvalues = { $set: { item_count: count + 25 } }; // here 25 is number of items which has to be added again to the inventory.
        inventory.updateOne(query, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            db.close();
        });
    });   
}