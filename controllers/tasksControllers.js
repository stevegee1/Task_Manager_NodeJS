const { findById, findOneAndUpdate } = require("../Models/Tasks");
const task = require("../Models/Tasks");
const asyncWrapper= require("../middleware/async")
//get all tasks
const getAllTasks = asyncWrapper (async (req, res) => {

    const tasks = await task.find({});
    console.log(tasks)
    //console.log(tasks)
    res.status(200).json({ nHbits: tasks.length })
});

const getTasks =asyncWrapper (async (req, res) => {

    const { id: taskID } = req.params;
    const findOne = await task.findById(taskID).exec();
    console.log(findOne)
    if (!findOne) {
      return res.status(404).json({ msg: "id not found" });
    }
    res.status(200).json({ nbHits: findOne.length });
 
});

const createTasks =asyncWrapper (async (req, res) => {

    const cask = await task.create(req.body);
    res.json({ cask });

    res.status(500).json({ error });
  
});

const updateTasks =asyncWrapper (async (req, res) => {
  
    const { id: taskID } = req.params;

    const { name, completed } = req.body;

    const updateTask = await task.findOneAndUpdate(
      { _id: taskID },
    req.body,{runValidators:true, overwrite:true}
    );
    console.log(updateTask)
    const {upsertedId}= updateTask

    // if (upsertedId===null) {
    //   return res.status(404).json({ msg: "id not found" });
    // }

    res.status(200).json({ task: req.body});


  
});

const deleteTasks =asyncWrapper (async (req, res) => {

    const { id: taskID } = req.params;
    //const findOne = await task.findById(taskID).exec();
   
    const deleteTask = await task.findOneAndDelete({ _id: taskID });
    console.log(deleteTask)
     if (!deleteTask) {
       return res.status(404).json({ msg: "id not found" });
     }
    res.status(200).json({ deleteTask });
 
   
  
});
const editTasks =asyncWrapper (async (req,res)=>{
  
    const {id: taskID}= req.params
    const task_edit= await task.findOneAndUpdate ({_id:taskID},req.body, {new:true,runValidators:true, overwrite:true})
    console.log(task_edit)
    res.status(200).json({msg: "success"})
 
})

module.exports = {
  getAllTasks,
  getTasks,
  createTasks,
  updateTasks,
  deleteTasks,
  editTasks
};
