import mongoose from "mongoose";


const educationSchemas = new mongoose.Schema({
    school: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true

    },
    grade: {
        type: String,
    },
    activities: {
        type: String,
    },
    description: {
        type: String,
    }
})

export const Education = mongoose.model("Education", educationSchemas)