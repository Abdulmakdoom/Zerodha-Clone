import { Schema } from "mongoose";
import mongoose from "mongoose";

const OrderSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String
})

export const Order = mongoose.model("Order", OrderSchema)