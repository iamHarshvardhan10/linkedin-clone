/* eslint-disable no-undef */
import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000


app.get('/' , (req , res) => {
    
    res.json({
        success:true,
        message : 'Hello User'
    })
})

app.listen(PORT , () => {
    console.log(`Server running on  ${PORT}`)
})

