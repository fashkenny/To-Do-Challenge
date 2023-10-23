import mongoose from "mongoose";

interface iStep {
    assignedTask?: string
    assignedName?: string
    assignedAvatar?: string
    assignedPriority?: string
    task?: {}

}

interface iStepData extends iStep, mongoose.Document {}

const stepModel = new mongoose.Schema({
    assignedTask: {
        type: String,
    },

    assingedName: {
        type: String,
    },

    assignedPriority: {
        type: String,
    },

    assignedAvatar: {
        type: String,
    },

    task: {
        type: mongoose.Types.ObjectId,
        ref: "task",
    }
});

export default mongoose.model<iStepData> ("steps", stepModel);