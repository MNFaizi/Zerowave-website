import connectMongo from "@/lib/backend/connect";
import AuthCheck from "@/lib/backend/middleware";
import Project from "@/lib/backend/project.schema";
import { project } from "@/lib/backend/type";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const isAuthenticated = await AuthCheck(req)
        if (isAuthenticated === process.env.USER_MAIL as string) {
            await connectMongo();
            const getProject = await Project.findById(params.id);
            if (!getProject) {
                return NextResponse.json({success: false, message: "Project Not Found" });
            }
            const newData: project = await req.json();
            getProject.active = newData.active;
            getProject.save()
            return NextResponse.json({success: true, message: `${getProject.project_name} Success Updated`, getProject })
        }
        return NextResponse.json({success: false,  message: "Unauthorized" })
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({success: false, message: "Internal Server Error" })
    }
}