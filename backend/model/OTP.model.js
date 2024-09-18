import otpTemplate from "../mails/verificationEmailTemplates.js";
import mailsender from "../utils/MailSender.js";
import mongoose from "mongoose";

const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    expireAt: {
        type: Date,
        default: Date.now(),
        expires: 5 * 60
    }
})

// pre hook for otp sending its always written inside the schema and above of model 

const verificationMail = async (email, otp) => {
    try {
        const mailResponse = await mailsender(email, 'E-Mail Verification', otpTemplate(otp));
        console.log(mailResponse)
    } catch (error) {
        console.log(error.message)
        throw error;
    }
}

OTPSchema.pre('save', async function (next) {
    console.log("new document saved to database");
    if (this.isNew) {
        await verificationMail(this.email, this.otp);

        next()
    }
})

export const OTP = mongoose.model("OTP", OTPSchema);



