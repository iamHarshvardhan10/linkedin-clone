import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    issuingOrg: {
        type: String,
        required: true
    },
    issuingDate: {
        type: Date
    },
    expiryDate: {
        type: Date
    },
    credentialId: {
        type: String
    },
    credentialUrl: {
        type: String
    }

})

export const Certification = mongoose.model("Certification", certificationSchema)