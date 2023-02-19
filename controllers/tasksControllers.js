//get all tasks
const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const getTasks = (req, res) => {
  res.json({id:req.params.id});
};

const createTasks = (req, res) => {
  res.json(req.body);
};

const updateTasks = (req, res) => {
  res.send("update tasks");
};

const deleteTasks = (req, res) => {
  res.send("delete tasks");
};

module.exports = {
  getAllTasks,
  getTasks,
  createTasks,
  updateTasks,
  deleteTasks,
};
