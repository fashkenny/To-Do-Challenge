import express, { Application,Request, Response } from "express";
import cors from "cors";
import auth from "./router/authRouter"
import task from "./router/taskRouter"


export const mainApp = (app: Application) => {
    app.use(express.json())
    .use(cors())

    .use("/api/v1", auth)
    .use("/api/v1", task);
    
    app.get("/", (req:Request, res:Response) => {
      try {
          console.log("Welcome on board!");
      } catch (error:any) {
           return res.status(404).json({
               message: "Error displaying default page",
               error
           });
      }
    })

    

}