/* eslint-disable no-undef */
import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/dbConnection.js';
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000

// DataBase Connection 
dbConnection()


// json()
app.use(express.json());

// cookie parser
app.use(cookieParser())


// cors
app.use(cors({
    origin: 'http://localhost:5173/',
    credentials: true
}))

app.get('/', (req, res) => {

    res.json({
        success: true,
        message: 'Hello User'
    })
})

app.listen(PORT, () => {
    console.log(`Server running on  ${PORT}`)
})

