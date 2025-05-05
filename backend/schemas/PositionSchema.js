import { Schema } from "mongoose";
import mongoose from "mongoose";

const PositionSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean
})

export const Position = mongoose.model("Position", PositionSchema)