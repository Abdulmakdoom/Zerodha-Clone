import { Schema } from "mongoose";
import mongoose from "mongoose";

const OrderSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    username: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

export const Order = mongoose.model("Order", OrderSchema)