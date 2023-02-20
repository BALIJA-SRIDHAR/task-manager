if(process.env.NODE_ENV!=="production"){
    require("dotenv").config()
}

const http=require("http")
const fs=require("fs")
const {engine}=require("express-handlebars")
const methodOverride=require("method-override")
const express=require("express")
const mongoose=require("mongoose")
const router=require("./Routes/taskRouter")

let app=express()
app.use(methodOverride("_method"))
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL,(err)=>{
    if(err) throw err
    console.log("db connected");
})

app.engine("handlebars",engine())
app.set("view engine","handlebars")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static(__dirname+"/public"))
app.use("/tasks",router)

app.listen(process.env.PORT||5000,(err)=>{
    if (err) throw err
    console.log("running task manager : 5000" );
})








