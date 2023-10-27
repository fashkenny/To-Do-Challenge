import mongoose from "mongoose";
import env from "dotenv"
env.config()


const URL = process.env.MONGO_STRING!;

export const dbConnect =  async () => {
    mongoose.connect(URL).then(() => {
        console.log("Connected to database");
    });
};