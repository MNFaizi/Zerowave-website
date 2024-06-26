"use client"
import { project } from "@/lib/backend/type";
import { addProject } from "@/lib/utils/addProject";
import { getToken } from "@/lib/utils/getToken";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"

export default function ModalAddProject() {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [projName, setProjName] = useState('');
    const [logoUrl, setLogoUrl] = useState('');
    const [docUrl, setDocUrl] = useState('');
    const [stakeUrl, setStakeUrl] = useState('');
    const [tag, setTag] = useState('');
    const [mainnet, setMainnet] = useState(false);
    const [active, setActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const token = getToken();
    const newData : project = {
        'project_name': projName,
        'logo_url': logoUrl,
        'docs_url': docUrl,
        'stake_url': stakeUrl,
        'tags': tag,
        'mainnet': mainnet,
        'active': active,
    }
    const handleSubmit = async (e : FormEvent) => {
        e.preventDefault()
        const res = await addProject(token, newData);
        console.log(res)
        if(res.success === true){
            setShowModal(false);
            setTimeout(() => {
                window.location.reload()
            },100);
        }
    }
    return (
        <>
            <div className='flex items-center mt-4 gap-3'>
                <button
                    className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide transition-colors duration-200 bg-zero-main-opposite text-white rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                    data-modal-target='addProject'
                    data-modal-toggle="addProject"
                    onClick={() => setShowModal(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <span className='text-md'>Add Project</span>
                </button>
            </div>
            {showModal ? (
                <div className='flex bg-zero-secondary/20 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-0 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full'>
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-zero-main/[.8] rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Add New Project
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={() => setShowModal(false)}>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>

                            <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label htmlFor="Protype" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Project Name</label>
                                        <input type="text" name="Proname" id="Proname" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type project name" required={true}
                                        onChange={(e) => setProjName(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="Protype" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Project Type</label>
                                        <input type="text" name="Protype" id="Protype" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="WEB3" required={true} 
                                        onChange={(e) => setTag(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="price" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Logo URL</label>
                                        <input type="text" name="Protype" id="Protype" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="https://logourl" required={true} 
                                        onChange={(e) => setLogoUrl(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="logo_url" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Documentation URL</label>
                                        <input type="text" name="Protype" id="Protype" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="https://docurl" required={true} 
                                        onChange={(e) => setDocUrl(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="logo_url" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Stake URL</label>
                                        <input type="text" name="Protype" id="Protype" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="https://stakeurl" required={true} onChange={(e) => setStakeUrl(e.target.value)}/>
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="price" className="block mb-2 text-md font-medium text-white">Is Project Mainnet?</label>
                                        <label className="relative inline-flex items-center cursor-pointertext-white">
                                        <input
                                                type="checkbox"
                                                value=''
                                                className='sr-only peer'
                                                defaultChecked={mainnet}
                                                onChange={(e) => {
                                                    if (e.target instanceof HTMLInputElement) {
                                                        setMainnet(e.target.checked)
                                                    }
                                                }}
                                            />
                                            <div className="w-11 h-6 bg-zero-main-opposite hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zero-secondary hover:peer-checked:bg-indigo-700"></div>
                                        </label>
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="price" className="block mb-2 text-md font-medium text-white">Is Project Active?</label>
                                        <label className="relative inline-flex items-center cursor-pointertext-white">
                                        <input
                                                type="checkbox"
                                                value=''
                                                className='sr-only peer'
                                                defaultChecked={active}
                                                onChange={(e) => {
                                                    if (e.target instanceof HTMLInputElement) {
                                                        setActive(e.target.checked)
                                                    }
                                                }}
                                            />
                                            <div className="w-11 h-6 bg-zero-main-opposite hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zero-secondary hover:peer-checked:bg-indigo-700"></div>
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="text-white inline-flex items-center bg-zero-main-opposite hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={handleSubmit}
                                >
                                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                    Add new product
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}