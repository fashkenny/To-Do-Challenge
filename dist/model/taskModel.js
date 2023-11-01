"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const taskModel = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Types.ObjectId,
        ref: "tasks",
    }
});
exports.default = mongoose_1.default.model("tasks", taskModel);
