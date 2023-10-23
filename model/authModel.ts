import mongoose, { Schema } from "mongoose";

interface iAuth {
    userName?: string;
    email?: string;
    password?: string;
    avatar?: string;
}

interface AuthData extends iAuth, mongoose.Document{}

const authModel = new mongoose.Schema ({
    userName: {
        type: String

    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true
    },

    password: {
        type: String
    }
});


export default mongoose.model<iAuth> ("auths", authModel)