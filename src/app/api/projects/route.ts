import Project from '@/lib/backend/project.schema'
import connectMongo from '@/lib/backend/connect'
import { NextRequest, NextResponse } from 'next/server'
import { project } from '@/lib/backend/type';
import AuthCheck from '@/app/middleware';

export const dynamic = "force-dynamic";

export async function GET () {
    try {
        await connectMongo();
        const project = await Project.find();
        return NextResponse.json({success: true, data: project});
    } catch (error) {
        console.log(error)
        return NextResponse.json({success: false, error});
    }
}
export async function POST (req : NextRequest) {
    try {
        await connectMongo();
        const isAuthenticated = await AuthCheck(req)
        if(isAuthenticated === process.env.USER_MAIL as string){
            const data: project = await req.json()
            if(data){
                const insertProject = await Project.create(data);
                return NextResponse.json({
                    success: true,
                    message: "Project created successfully",
                    insertProject,
                });
            }
            return NextResponse.json({success: false, message: 'Project is missing'})
        }
        return NextResponse.json({success: false,message: 'Unauthorized'})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({success: false, message : "Internal Server Error"})
    }
}