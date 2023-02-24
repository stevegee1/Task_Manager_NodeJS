const express = require("express");
const app = express();
require("dotenv").config();
const connecting = require("./db/connect");
// setting up routes
const tasks = require("./routes/tasks.js");
const TaskInterface = require("./Models/Tasks");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/errorHandler");

//This is the connection string to a particular database in MongoDB
const connectionString = `mongodb+srv://steve:${process.env.password}@nodeexpressjs.qoawcx2.mongodb.net/task_manager?retryWrites=true&w=majority`;

const port = process.env.PORT || 50000;
// setting up middleware functions

app.use(express.json());
app.use("/api/v/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

//this function connects our app to MongoDB 
const connectedDB = async () => {
  try {
    await connecting(connectionString);
    console.log("connected");

    app.listen(port, console.log(`app listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
connectedDB();
//app.get("/", tasks)
