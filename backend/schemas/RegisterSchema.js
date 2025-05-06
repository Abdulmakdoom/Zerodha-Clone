import mongoose, {Schema} from "mongoose";

const RegisterSchema = new Schema({
    username: String,
    email: String,
    password: Number
})

export const Register = mongoose.model("Register", RegisterSchema)