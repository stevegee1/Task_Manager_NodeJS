//This module defines all the tasks we will be interacting with

const task = require("../Models/Tasks"); //  Instance of this model is a document in MongoDB
const asyncWrapper = require("../middleware/async"); // to handle asynchronous functions
const { createCustomError } = require("../error/error");

//getAllTasks- fetches all the documents saved in our mongoDB>>collection(GET method)
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await task.find({});
  console.log(tasks);
  //console.log(tasks)
  res.status(200).json({ success: tasks, nHbits: tasks.length });
});

//getTasks- fetches a single document specified by the ID(req.params)(GET method)

const getTasks = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const findOne = await task.findOne({ _id: taskID });
  console.log(findOne);
  if (!findOne) {
    const error = createCustomError("id not found", 404);
    return next(error);
    //return res.status(404).json({ msg: "id not found" });
  }
  res.status(200).json({message: findOne});
});

//createTasks- creates a single document using POST method

const createTasks = asyncWrapper(async (req, res) => {
  const cask = await task.create(req.body);
  res.json({ cask });
});

//updateTasks- updates a single document using PATCH method

const updateTasks = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  const updateTask = await task.findOneAndUpdate({ _id: taskID }, req.body, {
    runValidators: true,
  });
  console.log(updateTask);
  if (!updateTask) {
    const error = createCustomError("id not found", 404);
    return next(error);
  }

  res.status(200).json({ task: req.body });
});

//deleteTasks- deletes a single document using DELETE method
const deleteTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  //const findOne = await task.findById(taskID).exec();

  const deleteTask = await task.findOneAndDelete({ _id: taskID });
  console.log(deleteTask);
  if (!deleteTask) {
    const error = createCustomError("id not found", 404);
    return next(error);
  }
  res.status(200).json({ deleteTask });
});

//editTasks- updates a single document using PUT method
const editTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task_edit = await task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
    overwrite: true,
  });
  console.log(task_edit);
  if (!task_edit) {
    const error = createCustomError("id not found", 404);
    return next(error);
  }
  res.status(200).json({ msg: "success" });
});

module.exports = {
  getAllTasks,
  getTasks,
  createTasks,
  updateTasks,
  deleteTasks,
  editTasks,
};
