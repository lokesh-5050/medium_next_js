import { connect } from "@/config/dbConfig";
import { NextRequest } from "next/server";

connect();

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { otp } = reqBody;

  

}
