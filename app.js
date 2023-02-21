const express = require("express");
const app = express();
require("dotenv").config();
const connecting = require("./db/connect");
// setting up routes
const tasks = require("./routes/tasks.js");
const TaskInterface = require("./Models/Tasks")

const connectionString = `mongodb+srv://steve:${process.env.password}@nodeexpressjs.qoawcx2.mongodb.net/task_manager?retryWrites=true&w=majority`;

const port = 50000;
// setting up middleware functions

app.use(express.json());
app.use("/api/v/tasks", tasks);

const connectedDB = async () => {
  try {
    await connecting(connectionString);
    console.log("connected")
 
      app.listen(port, console.log(`app listening on port ${port}`));
    
    
  } catch (error) {
  console.log(error)
  }
  
};
connectedDB()
//app.get("/", tasks)
