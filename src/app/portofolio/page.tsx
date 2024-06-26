import ProjectCard, { ProjectProp } from "@/components/portofolio/Card";
import { getProject} from "@/lib/utils/getProject";

export default async function Portofolio() {
    const datas = await getProject()
    return (
        <>
            <div className=" container text-center">
                <h1 className="text-4xl font-bold my-2">Portofolio Page</h1>
                <p className='text-xl text-opacity-40'>This is a collection of projects that I supported. You can find the source code and more information</p>
            </div>
            <div className="container my-8">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-sans font-semibold tracking-[4px]">Mainnet</h2>
                    <div className="flex flex-wrap items-center justify-center bg-zero-main bg-opacity-40 rounded-2xl w-[90%] m-4">
                        {datas.map((data: ProjectProp, index : number) => {
                            return (
                                data.mainnet ?
                                    <div key={data.project_name} className="lg:w-1/4">
                                        <ProjectCard project={data} index={index} />
                                    </div>
                                    : null
                            )
                        })}
                    </div>
                    <h2 className="text-2xl font-sans font-semibold tracking-[4px]">Testnet</h2>
                    <div className="flex flex-wrap bg-zero-main bg-opacity-40 items-center justify-center rounded-2xl w-[90%] m-6">
                        {datas.map((data: ProjectProp, index : number) => {
                            return (
                                data.mainnet === false ?
                                    <div className="lg:w-1/4" key={data.project_name}>
                                        <ProjectCard project={data} index={index} />
                                    </div>
                                    : null
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}