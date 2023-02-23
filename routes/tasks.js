const express= require("express")
const router= express.Router()
//const app= express()


const {
  getAllTasks,
  getTasks,
  createTasks,
  updateTasks,
  deleteTasks,
  editTasks,
}= require("../controllers/tasksControllers")
router.route("/").get(getAllTasks).post(createTasks)
router.route("/:id").get(getTasks).patch(updateTasks).delete(deleteTasks).put(editTasks)
module.exports= router