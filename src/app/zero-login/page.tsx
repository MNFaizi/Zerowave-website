"use client"
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e : FormEvent) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: "POST",
                body: JSON.stringify({email, password}),
                headers: {
                    'Content-Type' : 'application/json' 
                }
            });
            const data = await response.json();
            localStorage.setItem('token', data.token)
            // router.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <main className="m-auto min-[1vh] bg-zero-main/[.5] rounded-3xl w-1/4">
            <div className=" flex flex-col justify-center items-center w-full p-8 ">
                <h1 className=" w-full text-center m-4 font-semibold text-lg ">Login Page</h1>
                <form className=" flex w-full flex-col justify-center items-center " onSubmit={handleSubmit}>
                    <div className="flex flex-col w-full justify-center items-center gap-4 ">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email ID"
                            onChange={e => setEmail(e.target.value)} 
                            className="w-full border p-2 px-4 rounded outline-none"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                            className="w-full border p-2 px-4 rounded outline-none "
                        />
                        <button
                            type="submit"
                            className="border-blue-500 text-white p-2 px-4 w-full ease-in-out duration-100 rounded-md bg-zero-main hover:bg-zero-main-opposite tr"
                            onClick={handleSubmit}
                        >Login</button>
                    </div>
                </form>
            </div>
        </main>
    )
}