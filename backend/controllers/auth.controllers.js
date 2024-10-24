
import { OTP } from '../model/OTP.model.js'
import { User } from '../model/User.model.js'
import otpGenerator from 'otp-generator';
import bcrypt from 'bcrypt'

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


// controller for create account <signup>

export const signup = async (req, res) => {
    try {
        // Destructure all fields from req.body
        const { firstName, lastName, email, password, confirmPassword, additionalName, pronouns, headline, industry, location, profilePicture, coverPicture, otp } = req.body;

        // check if all details there are present or not
        if (!firstName || !email || !password || !confirmPassword || !otp) {
            return res.status(400).json({
                message: "Please fill all the details",
                status: false

            })
        }
        // check if password and confirm password matches or not
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Password and Confirm Password does not match",
                status: false
            })
        }
        // check if user already exist or not
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                message: "User already exist",
                status: false
            })
        }

        // find the most recent OTP for mail
        const recentOTP = await OTP.findOne({ email }).sort({ createAt: -1 }).limit(1);
        console.log(recentOTP)
        if (recentOTP.length === 0) {
            return res.status(400).json({
                message: "Invalid OTP",
                status: false
            })
        }
        else if (otp !== recentOTP.otp) {
            return res.status(400).json({
                message: "Invalid OTP",
                status: false
            })
        }

        // hash the password 
        const hashPassword = await bcrypt.hash(password, 10)

        // create user 
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashPassword,
            additionalName,
            pronouns,
            headline,
            industry,
            location,
            profilePicture,
            coverPicture,
        })

        console.log(user)

        return res.status(200).json({
            message: "User created successfully",
            status: true,
            user
        })
    } catch (error) {
        console.log(error.message)
    }



}
