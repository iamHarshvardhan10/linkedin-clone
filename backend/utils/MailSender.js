/* eslint-disable no-undef */

import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config()

const mailsender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: process.env.SMTP_HOST,
            secure: false,
            auth: {
                user: process.env.USER_MAIL,
                pass: process.env.USER_PASS
            }

        })

        let info = await transporter.sendMail({
            from: `Likndin Social Media <${process.env.USER_MAIL}>`,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        })

        console.log(info.response)
        console.log("Email Sent Successfully", info)
    } catch (error) {
        console.log(error.message)
    }
}

export default mailsender;