import express, { Application } from "express"
import { dbConnect } from "./config/db";
import { mainApp } from "./mainApp";
import env from "dotenv"
env.config()





const port: number = parseInt(process.env.PORT!);
const app: Application = express();

mainApp(app);

const server = app.listen(port, () => {
  console.log(' server is now live and listening on port ', port);
  dbConnect();
});
process.on("uncaughtException", (error: Error) => {
  console.log("shutting down due to uncaughtException Error");


  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("shutting down due to unhandledRejection Error");
  console.log("Error: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
