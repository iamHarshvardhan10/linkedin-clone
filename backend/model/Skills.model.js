import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    skillName: {
        type: String,
        required: true
    },
    endorsement: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})

export const Skill = mongoose.model("Skill", skillSchema)