import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export async function GET(request:NextRequest){
    try {
       console.log('Curren User =>',request.user);
       
        NextResponse.json({user:request.user},{status:200});
        
    } catch (error) {
        return NextResponse.json({error:error});
        
    }
}