import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true
    },
    phoneType: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    birthDay: {
        type: Date
    }
})

export const Contact = mongoose.model("Contact", contactSchema)