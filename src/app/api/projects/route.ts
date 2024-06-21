import Project from '@/lib/project.schema'
import connectMongo from '@/lib/connect'
import { NextRequest, NextResponse } from 'next/server'
import { project } from '@/lib/type';
import AuthCheck from '@/lib/middleware';

export async function GET () {
    try {
        await connectMongo();
        const project = await Project.find();
        return NextResponse.json({data: project});
    } catch (error) {
        console.log(error)
        return NextResponse.json({error});
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
                    message: "Project created successfully",
                    insertProject,
                });
            }
            return NextResponse.json({message: 'Project is missing'})
        }
        return NextResponse.json({message: 'Unauthorized'})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({message : "Internal Server Error"})
    }
}