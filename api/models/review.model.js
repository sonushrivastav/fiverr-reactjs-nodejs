import mongoose from "mongoose";
const { Schema } = mongoose

const reviewSchema = new Schema({
    gigId: {
        type: String,
        required:true
    },
    userId: {
        type: Number,
        required:true,
    },
    star: {
        type: Number,
        default:0
    }

    
}, {
    timestamps:true
})

export default mongoose.model("Review",reviewSchema)