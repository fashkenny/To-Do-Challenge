"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const stepModel = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Types.ObjectId,
        ref: "task",
    }
});
exports.default = mongoose_1.default.model("steps", stepModel);
