/* eslint-disable no-undef */
import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/dbConnection.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000

// DataBase Connection 
dbConnection()






app.get('/' , (req , res) => {
    
    res.json({
        success:true,
        message : 'Hello User'
    })
})

app.listen(PORT , () => {
    console.log(`Server running on  ${PORT}`)
})

