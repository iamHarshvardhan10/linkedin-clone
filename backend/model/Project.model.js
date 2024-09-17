import mongoose from "mongoose";

const ProjectSchema = new mongoose({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    projectPhoto : {
        type : String,
        required : true
    },
    technologies : {
        type : [String],
        required : true
    },
    startDate : {
        type : Date,
        required:true
    },
    endDate:{
        type:Date
    },
    projectLink : {
        type : String
    }

})

export const Project = mongoose.model("Project" , ProjectSchema)