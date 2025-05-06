import { Schema } from "mongoose";
import mongoose from "mongoose";

const UserSchema = new Schema({
    email : String,
    password: Number
})

export const User = mongoose.model("User", UserSchema)