import mongoose from "mongoose";
const {Schema} = mongoose

const GigSchema = new Schema({
    userId: {
        type: String,
        required:true,
    },
    title :{
        type: String,
        required:true
    },
    desc: {
        type: String,
        required:true
    },
    totalStars: {
        type: Number,
        required:true,
    },
    startNumber: {
        type: Number,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    cover: {
        type: String,
        required:true
    },
    images: {
        type: [String],
        required:true
    },
    shortTime: {
        type: String,
        required:true
    },
    shortDesc: {
        type: String,
        required:true 
    },
    deliverTime: {
        type: Number,
        required:true
    },
    revisionNumber: {
        type: Number,
        required:true
    },
    features: {
        type: [String],
        required:false
    }
}, {
    timestamps:true
})

export default mongoose.model("Gig", GigSchema)