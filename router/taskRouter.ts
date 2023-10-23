import express from "express";
import { createTask, deleteTask, readTask } from "../controller/taskController";


const router = express.Router()

router.route("/create-task").post(createTask)
router.route("/readTasks").get(readTask)
router.route("/:taskID/deleteTask").delete(deleteTask);

export default router;