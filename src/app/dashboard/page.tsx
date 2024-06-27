"use client"
import ModalAddProject from '@/components/dashboard/ModalAddProject'
import SideAdmin from '@/components/dashboard/Sidebar'
import Table from '@/components/dashboard/Table'
import { getProject } from '@/lib/utils/getProject'
import { getToken } from '@/lib/utils/getToken'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Loading from '../loading'


export default function Dashboard() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = getToken();

    useEffect(() => {
        if(!token){
            router.push('/')
        }
        getProject()
            .then((res) => {
                setData(res)
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }, [router, token])
    
    return (
        <div className='flex h-screen'>
            <SideAdmin />
            <main className='flex-1'>
                <section id='table project' className='container px-4 mx-auto'>
                    <div className='flex items-center justify-between'>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-2xl font-medium ">Projects</h2>
                            <span className="px-3 py-1 text-sm text-white bg-zero-main rounded-full">{data.length} Projects</span>
                        </div>
                        <ModalAddProject />
                    </div>
                    <div className='mt-6 md:flex md:items-center md:justify-between'>
                        <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                            <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                                View all
                            </button>

                            <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                                Active
                            </button>

                            <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                                Non-Active
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col mt-6'>
                        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                                <div className='overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg'>
                                    {loading ? <Loading/> : <Table data={data} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}