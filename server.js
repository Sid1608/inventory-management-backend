const express=require("express");
const app=express();
const mongoose=require('mongoose');
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
dotenv.config();
const authRoutes=require("./routes/auth.js"); 
const userRoutes=require("./routes/Users.js");
const adminRoutes=require("./routes/Admin.js");
mongoose.connect(process.env.MONGO_URL,(err)=>{
    if(err) {throw err;}
    console.log('conneted to mongodb')
})

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/auth",authRoutes)
app.use("/user",userRoutes)
app.use("/admin",adminRoutes)




app.get("/",(req,res)=>{
    res.send("welcome to home page")
})


app.listen(8080,()=>{
    console.log("Server started on port 8080");
})