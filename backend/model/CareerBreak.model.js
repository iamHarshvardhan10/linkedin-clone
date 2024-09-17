import mongoose from "mongoose";

const careerBreakSchema = new mongoose.Schema({
    type : {
        type : String,
        required : true
    },
    location : {
        type : String
    },
    startDate : {
        type : Date,
        required : true
    },
    endDate : {
        type : Date,
        required : true
    },
    description : {
        type : String
    }
})

export const CareerBreak = mongoose.model("CareerBreak" , careerBreakSchema)