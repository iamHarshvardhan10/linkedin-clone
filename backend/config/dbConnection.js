/* eslint-disable no-undef */
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDb Connected')
    } catch (error) {
        console.log(error.message)
    }
}

export default dbConnection;