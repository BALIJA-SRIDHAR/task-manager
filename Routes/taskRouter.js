const express=require("express")
const { getTasks, createTask, getTask, updateTask, deleteTask } = require("../controller/taskController")

let router=express.Router()

// router.get("/",getTasks)
// router.post("/",createTask)
// router.get("/:id",getTask)
// router.put("/:id",updateTask)
// router.delete("/:id",deleteTask)

router.route("/").post(createTask).get(getTasks)
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask)

module.exports=router