import express, { Request, Response, response } from "express"
import taskModel from "../model/taskModel";


export const createTask = async (req: Request, res: Response) => {
    try {
        const { task, priority } = req.body
        const tasked = await taskModel.create({
            task,
            priority,
        });
        return res.status(201).json({
            message: "task created successfully",
            data: tasked
        })
    } catch (error) {
        res.status(400).json({
            message: "Task creation failed",
        })
    }
}

export const readTask = async (req: Request, res: Response) => {
    try {
        const task = await taskModel.find()
        return res.status(200).json({
            message: "Task read successfully",
            data: task
        })
    } catch (error: any) {
        return res.status(200).send({
            message: "Task read failed",
            data: error.message
        })
    }


}

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const { taskID } = req.params
        const task = await taskModel.findByIdAndDelete(taskID)

        return res.status(201).json({
            message: 'Task deleted successfully',
            data: task
        })
    } catch (error: any) {
        return res.status(404).json({
            message: "unable to delete task",
            error
        })

    }
} 