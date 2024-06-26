"use client"
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"
import Image from 'next/image'

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token)
                router.push('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <main className="w-full max-w-sm m-auto overflow-hidden bg-zero-main/[.4] rounded-lg shadow-md dark:bg-gray-800">
            <div className="px-6 py-4">
                <div className="flex justify-center mx-auto">
                    <Image src={'/Zerowave-Crop.png'} width={70} height={70} alt="Zerowave Logo"/>
                </div>

                <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

                <form>
                    <div className="w-full mt-4">
                        <input 
                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" 
                            placeholder="Email Address" 
                            aria-label="Email Address" 
                            autoComplete="username"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="w-full mt-4">
                        <input 
                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" 
                            placeholder="Password" 
                            aria-label="Password" 
                            autoComplete="current-password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                        <button 
                            type='submit'
                            className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-zero-main-opposite shadow-lg rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" 
                            onClick={handleSubmit}>
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}