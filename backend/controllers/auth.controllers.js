import { OTP } from '../model/OTP.model.js'
import { User } from '../model/User.model.js'
import otpGenerator from 'otp-generator';

// Controller for sending otp via email
export const sendOtp = async (req, res) => {
    try {
        // destructure from req.body
        const { email } = req.body;

        // check email is already present in db
        const emailPresent = await User.findOne({ email })

        if (emailPresent) {
            return res.status(401).json({
                message: "Email already exists",
                status: false
            })
        }
        // generate otp using optGenerator 
        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false
        })
        const result = await OTP.findOne({ otp: otp })
        // create otp till it not found on db
        while (result) {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false
            })
        }

        const otpBody = await OTP.create({ email, otp })
        console.log(otpBody)
        return res.status(400).json({
            message: "OTP sent successfully",
            status: true,
            otp,
        })

    } catch (error) {
        console.log(error.message)
    }
}