import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/userDB");
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Could not connect to MongoDB:", err);
        process.exit(1); // Exit process if connection fails
    }
};

export default connectDB;
