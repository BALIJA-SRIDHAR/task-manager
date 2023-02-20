const {model,Schema}=require("mongoose")

const  taskSchema= new Schema({
 task:{
    type:String,
    required:[true,"please enter task"],
    trim:true,
 },
 createdAt:{
    type:Date,
    default:Date.now()
 }
})

module.exports=model("tasks",taskSchema)
