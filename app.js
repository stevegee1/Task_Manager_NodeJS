const express= require ("express")
const app= express()
// setting up routes
const tasks= require("./routes/tasks.js")

const port = 50000
// setting up middleware functions

  app.use(express.json())
  app.use("/api/v/tasks",tasks)


//app.get("/", tasks)
app.listen(port, console.log(`app listening on port ${port}`))