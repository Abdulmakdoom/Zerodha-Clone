import mongoose, { Schema } from "mongoose";

const HoldingSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String
})

export const Holding = mongoose.model("Holding", HoldingSchema)