import connectMongo from "@/lib/backend/connect";
import User from "@/lib/backend/user.schema";
import { user } from "@/lib/backend/type";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest){
    const data : user = await req.json();
    try {
        await connectMongo()
        const checkUser = await User.findOne({email: data.email})
        if(!checkUser){
            return NextResponse.json({message : "User Not Found"}) 
        }
        const checkPassword = await bcrypt.compare(data.password, checkUser.password);
        if(!checkPassword){
            return NextResponse.json({message: "Invalid Credential"})
        }
        const token = jwt.sign({email: checkUser.email}, process.env.JWT_SECRET as string, {expiresIn: '6h'})
        return NextResponse.json({message: 'Login Succesfull', 'token' : token})
    } catch (error) {
        return NextResponse.json({message: "Internal Server Error"})
    }
}