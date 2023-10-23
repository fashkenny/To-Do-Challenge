import mongoose from "mongoose";


const URL = "mongodb://0.0.0.0:27017/TaskDB";

export const dbConnect =  async () => {
    mongoose.connect(URL).then(() => {
        console.log("Connected to database");
    });
};