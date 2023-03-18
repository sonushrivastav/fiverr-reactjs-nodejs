import mongoose from "mongoose";
const { Schema } = mongoose

const ConversationSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique:true
    },
    sellerId: {
        type: String,
        required:true
    },
    buyerId: {
        type: String,
        required:true
    },
    readbyBuyer: {
        type: Boolean,
        required:true
    },
    readbySeller: {
        type: Boolean,
        required:true
    },
    lastMessage: {
        type: String,
        requred:false
    }
}, {
    timestamps:true
})

export default mongoose.model("Conversation",ConversationSchema)