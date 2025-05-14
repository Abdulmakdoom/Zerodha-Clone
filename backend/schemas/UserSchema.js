import { Schema } from "mongoose";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"; 
import bcrypt from "bcrypt"

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
})

UserSchema.pre("save", async function (next) {
    if(!this.isModified("password"))return next();

   this.password = await bcrypt.hash(this.password, 10)
    next()
})

UserSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}

UserSchema.methods.generateAccessToken = function() {
    try {
        return jwt.sign({
            _id: this._id,
            email: this.email,
            username: this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY || '1h',
        }
    )
    } catch (error) {
        console.error("Error generating access token:", error); 
    }
}

export const User = mongoose.model("User", UserSchema)
