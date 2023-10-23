import mongoose from "mongoose";

interface iTask {
    task?: string;
    priority?: string;
    avatar?: string;
    name?: string;
    step?: {}[];
}

interface iTaskData extends iTask, mongoose.Document{}

 const taskModel = new mongoose.Schema({
   task: {
      type: String
   },
   priority: {
      type: String
   },
   name: {
      type: String
   },
   avatar: {
       type: String
   },

   step: {
       type: mongoose.Types.ObjectId,
       ref: "tasks",
   }
});

export default mongoose.model<iTaskData> ("tasks", taskModel)