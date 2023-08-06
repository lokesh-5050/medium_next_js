import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import nodemailer from 'nodemailer';
module.exports = {
  sendEmail: async ({ email, emailType, userId }: any) => {
    try {
        // create a hased token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    const generatedOtp = Math.floor(100000 + Math.random() * 900000);

    //type of email to send
    switch (emailType) {
      case "Verificiation_Email":
        User.findOneAndUpdate(userId, {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        });
        break;
      case "Reset_Password":
        User.findOneAndUpdate(userId, {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000,
        });
      case "Send_Otp":
        User.findOneAndUpdate(userId, {
          otp: generatedOtp,
          otpExpiry: Date.now() + 3600000,
        });
        break;
      default:
        break;
    }

    //nodemailer transport
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "123f83012f974a",
        pass: "340162f9753ac2",
      },
    });

    const mailOptions = {
            from: 'mali.lokesh5050@gmail.com',
            to: email,
            subject: emailType === "Send_Otp" ? "Verification code" : "Reset your password",
            // html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            // or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            // </p>`
            html:`<p>The code for verification : ${generatedOtp}</p>`
        }


        const mailresponse = await transport.sendMail
        (mailOptions);
        return mailresponse;
    } catch (error:any) {
        throw new Error(error.message);
    }





  },
};
