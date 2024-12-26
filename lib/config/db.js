import mongoose from "mongoose";

export const ConnectDB=async()=>{
    
        await mongoose.connect("mongodb+srv://mohammedabdellah580:qHRewSEV38B6qUCp@cluster0.i71fk.mongodb.net/blog-app");
        console.log("MongoDB Connected...");

}