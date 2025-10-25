import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nimharachalana:4039411@cluster0.dfgo7pj.mongodb.net/Food-Delivery-Ordering-Management-System').then(()=>console.log("DB Connected"));
}