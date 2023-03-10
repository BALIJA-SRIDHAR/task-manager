const taskModel=require("../Models/Task")


const createTask = async (req,res)=>{
    let payload={ 
        task:await req.body.task
    }
    // console.log(payload);
    await taskModel.create(payload)
    res.redirect("/tasks")
}


 const  getTasks = async (req,res)=>{
    let data =await taskModel.find().lean()
    //console.log(data);
   res.render("home",{data,MSG:"manager"})
}


const getTask= async (req,res)=>{
    let id=await req.params.id
    let updateData=await taskModel.findOne({_id:id}).lean()
   // console.log(updateData);
    res.render("edit",{updateData})
  }


 const updateTask=async (req,res)=>{
let payload={
task: await req.body.task
}
 await taskModel.updateOne({_id:req.params.id},{$set:payload})
 res.redirect("/tasks")
 }


const deleteTask= async (req,res)=>{
   await taskModel.deleteOne({_id:req.params.id})
   res.redirect("/tasks")
 }


  module.exports={
     createTask,
     updateTask,
     getTask,
     getTasks,
     deleteTask
     }
 


