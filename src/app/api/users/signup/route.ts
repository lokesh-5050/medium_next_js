import {connect} from "@/config/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
import { log } from "console";
import jwt from 'jsonwebtoken';

connect();


 export async function POST(request: NextRequest){
    try {
        console.log('______');
        
        const reqBody = await request.json();
        const {username, email, password} = reqBody;

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email});
        
        if(user){
            console.log(`${user} userExists`);
            return NextResponse.json({message: "User with this email already exists.",success:false},{status: 400});
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt);
        
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save()
        console.log(`Saved User ${savedUser}`);
        
        const token = jwt.sign({ userId: newUser.id }, 'your-secret-key', {
            expiresIn: '1h',
        });

        savedUser.reset_token = token;
        const savedUserWithToken = await savedUser.save();

        console.log("Saved User With Token",savedUserWithToken);

        //set-cookie
        NextResponse
        
        //send verification email
        await sendEmail({email, emailType: "Send_Otp", userId: savedUser._id})

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            body:savedUser
        },{
            status:200
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}