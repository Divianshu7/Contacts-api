import mongoose from "mongoose";
import { Schema } from "mongoose";
const userSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })
export default mongoose.model('Users', userSchema)