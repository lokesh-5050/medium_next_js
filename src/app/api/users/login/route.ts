import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { connect } from "@/config/dbConfig";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    console.log(reqBody);

    //check if the user exists
    const user = await User.findOne({email});


    if (!user) {
      return NextResponse.json(
        { message: "Unable to find User with credentials!" },
        { status: 400 }
      );
    }

    console.log("WE HAVE A USER");
    

    //check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password!);

    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid Password" },
        { status: 400 }
      );
    }

    //create-token-data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    //create-token
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    const response = NextResponse.json(
      {
        message: "Logged in successfully",
      },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
