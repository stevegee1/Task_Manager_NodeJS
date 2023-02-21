const mongoose= require("mongoose")

const TaskSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name must be added"],
        trim: true,
        maxlength: [20, "cannot exceed 20 characters of name "]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports= mongoose.model("Task",TaskSchema)