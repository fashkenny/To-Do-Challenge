
import express, { Request, Response } from "express";
import authModel from "../model/authModel";
import bcrypt from "bcrypt";


export const createUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = await authModel.create({
          email, password: hash
        })

        return res.status(201).json({
            message: "user created",
            data: user
        })
    } catch (error: any) {
        return res.status(404).json({
           error: error.message
        })
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const user = await authModel.find()
        return res.status(200).json({
            message: "users found",
            data: user
        })
    } catch (error: any) {
        return res.status(404).json({
            message: "Error creating user",
            error
        });
    }
}

export const getOneUser = async (req: Request, res: Response) => {
    try {
        const { userID } = req.params
        const user = await authModel.findById(userID)

      

        return res.status(200).json({
            message: "A user gotten successfully",
            data: user
        })
    } catch (error: any) {
        return res.status(404).json({
            message: "Unable to get user",
            error
        })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { userID } = req.params
        const user = await authModel.findByIdAndDelete(userID)

        return res.status(201).json({
            message: "User deleted successfully",
            data: user
        })
    } catch (error: any) {
        return res.status(404).json({
            message: "Unable delete user",
            error
        })
    }
}

export const signInUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const user = await authModel.findOne({ email })

        if (user) {
            const checked = await bcrypt.compare(password, user?.password!)
            if (checked) {
                return res.status(201).json({
                    message: `Welcome back!! ${user.userName}`,
                    data: user.id
                })
            } else {

                return res.status(401).json({
                    message: "Invalid password",

                })
            }
        }

    } catch (error: any) {

        return res.status(404).json({
            message: "data not found in database ",
            error
        })
    }
}