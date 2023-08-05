import { connect } from "@/config/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    console.log(reqBody);

    //check if user already exist
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User Already Exists!" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password,salt);


    //Creating a new user
    const newUser = new User({
      email:email,
      username:username,
      password:hashedPassword
    });

    const savedUser = await newUser.save();

    console.log("Created User",savedUser);

    //send verificatin email
    
    





  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
