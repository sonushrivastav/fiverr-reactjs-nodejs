import express from "express";
import mongoose from "mongoose";
const app = express();
import dotenv from "dotenv"
const PORT = process.env.PORT || 8000

dotenv.config()

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connected to database!");
    } catch (error) {
        console.log(error)
    }
    
}


app.listen(PORT, () => {
    connect()
    console.log(`Backend is running on port no ${PORT}`);
})