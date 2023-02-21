const { findById } = require("../Models/Tasks");
const task = require("../Models/Tasks");

//get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await task.find({});
    //console.log(tasks)
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const findOne = await task.findById(taskID).exec();
    if (!findOne) {
      return res.status(404).json({ msg: "id not found" });
    }
    res.status(200).json({ findOne });
  } catch (error) {
    res.json({ error });
  }
};

const createTasks = async (req, res) => {
  try {
    const cask = await task.create(req.body);
    res.json({ cask });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const { name, completed } = req.body;

    const findOne = await task.findById(taskID).exec();
    if (!findOne) {
      return res.status(404).json({ msg: "id not found" });
    }
    const updateTask = await task.updateMany(
      { _id: taskID },
      { name: name, completed: completed }
    );

    res.status(200).json({ updateTask });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const findOne = await task.findById(taskID).exec();
    if (!findOne) {
      return res.status(404).json({ msg: "id not found" });
    }
    const deleteTask = await task.deleteOne({ _id: taskID });
    res.status(200).json({ deleteTask });
  } catch (error) {
    res.status(404).json({ error });
  }
};

module.exports = {
  getAllTasks,
  getTasks,
  createTasks,
  updateTasks,
  deleteTasks,
};
