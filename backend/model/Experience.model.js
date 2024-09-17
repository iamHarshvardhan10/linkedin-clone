import mongoose from "mongoose";

const experienceSchemas = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    locationType: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    description: {
        type: String
    }
})


export const Experience = mongoose.model("Experience", experienceSchemas)