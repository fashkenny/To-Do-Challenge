"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.readTask = exports.createTask = void 0;
const taskModel_1 = __importDefault(require("../model/taskModel"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, priority } = req.body;
        const tasked = yield taskModel_1.default.create({
            task,
            priority,
        });
        return res.status(201).json({
            message: "task created successfully",
            data: tasked
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Task creation failed",
        });
    }
});
exports.createTask = createTask;
const readTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskModel_1.default.find();
        return res.status(200).json({
            message: "Task read successfully",
            data: task
        });
    }
    catch (error) {
        return res.status(200).send({
            message: "Task read failed",
            data: error.message
        });
    }
});
exports.readTask = readTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskID } = req.params;
        const task = yield taskModel_1.default.findByIdAndDelete(taskID);
        return res.status(201).json({
            message: 'Task deleted successfully',
            data: task
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "unable to delete task",
            error
        });
    }
});
exports.deleteTask = deleteTask;
