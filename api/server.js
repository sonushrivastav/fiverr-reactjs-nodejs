import express from "express";
import mongoose from "mongoose";
const app = express();
import dotenv from "dotenv"
const PORT = process.env.PORT || 8000;
import userRoute from "./routes/user.route.js"
import conversationRoute from "./routes/conversation.route.js"
import gigRoute from "./routes/gig.route.js"
import orderRoute from "./routes/order.route.js"
import messageRoute from "./routes/message.route.js"
import reviewRoute from "./routes/review.route.js"

dotenv.config()

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connected to database!");
    } catch (error) {
        console.log(error)
    }
    
}

app.use("/api/users", userRoute)
app.use("/api/gigs", gigRoute)
app.use("/api/orders", orderRoute)
app.use("/api/conversations", conversationRoute)
app.use("/api/messages", messageRoute)
app.use("/api/reviews", reviewRoute)


app.listen(PORT, () => {
    connect()
    console.log(`Backend is running on port no ${PORT}`);
})