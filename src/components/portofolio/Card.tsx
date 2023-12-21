
import Image from "next/image"
import Link from "next/link"
import MotionDiv from "../animation/div";

export interface ProjectProp {
    name: string;
    project_name: string;
    logo_url: string;
    docs_url: string;
    stake_url: string;
    tags: string;
    mainnet: boolean;
}
interface Prop {
    project: ProjectProp,
    index: number
}

export default async function ProjectCard({ project, index }: Prop) {
    return (
        <MotionDiv index={index}>
            <article className="box-border rounded-2xl p-2 m-8" style={{ backgroundColor: 'white' }}>
                <div className="project-card flex flex-col items-center">
                    <div className="rounded-full my-4" style={{ backgroundColor: 'white' }}>
                        <Image
                            src={project.logo_url}
                            alt={project.project_name}
                            width={60}
                            height={60}
                            className="rounded-xl"
                        />
                    </div>
                    <h3 className="text-2xl font-bold my-2">{project.project_name}</h3>
                    <div className="my-8">
                        <Link href={project.docs_url} target="_blank" className="mx-4">
                            <button className="bg-zero-secondary bg-opacity-20 rounded-xl h-8 w-16 font-medium transition hover:scale-125">Docs</button>
                        </Link>
                        <Link href={project.stake_url} target="_blank" className="mx-4">
                            <button className="bg-zero-main-opposite rounded-xl h-8 w-16 font-medium transition hover:scale-125" style={{ color: 'white' }}>Stake</button>
                        </Link>
                    </div>
                </div>
            </article>
        </MotionDiv>
    )
}