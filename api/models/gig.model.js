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
        default:0,
    },
    startNumber: {
        type: Number,
        default:0,

    },
    category: {
        type:String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    coverImg: {
        type: String,
        required:true
    },
    images: {
        type: [String],
        required:false
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
    },
    salesNumber: {
        type: Number,
        default:0
    }
}, {
    timestamps:true
})

export default mongoose.model("Gig", GigSchema)