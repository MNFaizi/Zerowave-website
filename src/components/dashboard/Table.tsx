'use client'
import { project } from "@/lib/backend/type";
import { useRouter } from "next/navigation";
import { getToken } from "@/lib/utils/getToken";

export default function Table(data : any) {
    const router = useRouter();
    const token = getToken();
    const handleUpdate = async (event : boolean, id : string) => {
        const res = await fetch(`http://localhost:3000/api/projects/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body : JSON.stringify({'active' : event}),
        })
        const data = await res.json();
    }
    return (
        <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
            <thead className='bg-gray-50'>
                <tr>
                    <th scope='col' className='px-12 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400'>Project Name</th>
                    <th scope='col' className='px-12 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400'>Documentation</th>
                    <th scope='col' className='px-12 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400'>Tag</th>
                    <th scope='col' className='px-12 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400'>Type</th>
                    <th scope='col' className='px-12 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400'>Status</th>
                </tr>
            </thead>
            <tbody>
                {data.data.map((data: project, index: number) => {
                    return (
                        <tr key={index}>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">{data.project_name}</td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">{data.docs_url}</td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">{data.tags}</td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">{data.mainnet ? "Mainnet" : "Testnet"}</td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value=''
                                        className='sr-only peer'
                                        defaultChecked={data.active}
                                        onClick={(e) => {
                                            if(e.target instanceof HTMLInputElement){
                                                handleUpdate(e.target.checked, data.id)
                                            }
                                        }}
                                    />
                                    <div className="w-11 h-6 bg-zero-main-opposite hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zero-main hover:peer-checked:bg-indigo-700"></div>
                                </label>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}