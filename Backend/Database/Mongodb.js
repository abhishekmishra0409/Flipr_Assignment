import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://websitehost:virtualcart@cluster0.8u5ecev.mongodb.net/Flipr?retryWrites=true&w=majority&appName=Cluster0');
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Database connection error:", err.message);
  }
};

export default connectDB;
