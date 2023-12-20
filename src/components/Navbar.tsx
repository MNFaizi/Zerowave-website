import Image from "next/image"
import Link from "next/link"

const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Project', link: '/portofolio' },
    { name: 'Documentation', link: 'https://docs.zerowave.my.id' },
    { name: 'Contact', link: '/contact' }
]
export default function Navbar() {
    return (
        <>
            <nav className="sticky top-2 my-4 container">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src={'/Zerowave-Crop.png'}
                                alt="Zerowave Logo"
                                width={40}
                                height={40}
                            />
                        </Link>
                        <Link href="/">
                            <span className="mx-2 text-3xl font-semibold text-zero-secondary">ZeroWave</span>
                        </Link>
                    </div>
                    <ul className="flex flex-wrap font-medium">
                        {navLinks.map((navlink, index) => {
                            return (
                                <li key={index} className="px-4">
                                    <Link href={navlink.link} className="text-xl text-zero-main">{navlink.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
}