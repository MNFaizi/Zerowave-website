'use client'

import Link from "next/link"
import { useState } from "react"

const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Project', link: '/portofolio' },
    { name: 'Documentation', link: 'https://docs.zerowave.my.id' },
    { name: 'Explorer', link: '/explorer' }
]

export default function NavLink() {
    const [isOpen, setIsopen] = useState(false)
    const buttonOpen = () => {
        setIsopen(!isOpen)
    }
    const buttonClose = () => {
        setIsopen(!isOpen)
    }
    return (
        <>
            <button data-collapse-toggle="navbar-default" type="button" onClick={buttonOpen} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div className={`w-full lg:block ${isOpen ? 'block' : 'hidden'} md:w-auto`} id="navbar-default">
                <ul className="lg:flex lg:flex-wrap lg:font-medium text-center py-3">
                    {navLinks.map((navlink, index) => {
                        return (
                            <li key={index} className="px-4">
                                <Link href={navlink.link} onClick={buttonClose} className="text-xl text-zero-main hover:text-zero-main-opposite transition-all focus:text-zero-main-opposite focus:text">{navlink.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}