import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export async function GET(request:NextRequest){
    try {
        const token = request.cookies.get('token')?.value || '';
        console.log('The token is ',token);

        if(token!= ''){
            const {id} = await jwt.verify(token,process.env.SECRET_KEY);
            console.log('id in ',id);
            
            if(!id) return NextResponse.json({error:"Invalid Token please login again"});

            const userExists = await User.findById(id);
            console.log(userExists);
            
            if(!userExists) return NextResponse.json({error:"NO User FOund"})

            return NextResponse.json({isLoggedIn:true});

        }else{
            return NextResponse.json({error:"Token not found"});
        }
        
    } catch (error) {
        return NextResponse.json({error:error});
        
    }
}