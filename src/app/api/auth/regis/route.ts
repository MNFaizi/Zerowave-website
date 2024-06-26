import connectMongo from "@/lib/backend/connect";
import User from "@/lib/backend/user.schema";
import { user } from "@/lib/backend/type";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export async function POST (req: NextRequest){
    try {
        await connectMongo();
        const data : user = await req.json();
        const hashPassword = await bcrypt.hash(data.password, 10);
        data.password = hashPassword
        const insertData = await User.create(data)
        return NextResponse.json({success : true, message: "User Created"})
    } catch (error) {
        return NextResponse.json({sucess: false, message: "Internal Server Error"})
    }
}