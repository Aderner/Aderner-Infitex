import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Task", tasksSchema);
