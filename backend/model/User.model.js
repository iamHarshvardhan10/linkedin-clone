import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    additionalName: {
        type: String
    },
    pronouns: {
        type: String
    },
    headline: {
        type: String
    },
    industry: {
        type: String
    },
    location: {
        type: String
    },
    profilePicture: {
        type: String
    },
    coverPicture: {
        type: String
    },
    education: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Education'
        }
    ],
    experience: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Experience'
        }
    ],
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        }
    ],
    skills: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        }
    ],
    contact: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact'
    },
    careerBreak: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CareerBreak'
        }
    ],
    Certification: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Certification'
        }
    ],
    connection: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Connection'
        }
    ],
    recommendations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Recommendation'
        }
    ],
    savedItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SavedItem'
        }
    ],
    profileViews: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

});

export const User = mongoose.model("User" , UserSchema);