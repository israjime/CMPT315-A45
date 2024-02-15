import mongoose from "mongoose";

mongoose.set('strictQuery',true);

// connect with monsters database

export const connectDB = async() => {
    const url = 'mongodb://localhost:27017/A45';
    try{
        const connection = await mongoose.connect(url,{
            useUnifiedTopology: true,
        });
        console.log("Database Connected...");
    } catch (e) {
        console.log("Database Connection Failed...", e);
    }
};

