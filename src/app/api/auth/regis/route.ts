import connectMongo from "@/lib/connect";
import User from "@/lib/user.schema";
import { user } from "@/lib/type";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export async function POST (req: NextRequest){
    try {
        await connectMongo();
        const data : user = await req.json();
        const hashPassword = await bcrypt.hash(data.password, 10);
        data.password = hashPassword
        const insertData = await User.create(data)
        return NextResponse.json({message: "User Created"})
    } catch (error) {
        return NextResponse.json({message: "Internal Server Error"})
    }
}