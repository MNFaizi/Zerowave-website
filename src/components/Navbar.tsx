import Image from "next/image"
import Link from "next/link"
import NavLink from "./NavLink"

const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Project', link: '/portofolio' },
    { name: 'Documentation', link: 'https://docs.zerowave.my.id' },
    { name: 'Explorer', link: '/explorer' }
]
export default function Navbar() {
    return (
        <>
            <nav className="sticky top-7 my-7">
                <div className="flex flex-wrap items-center justify-between mx-3 lg:px-24">
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
                    <NavLink/>
                </div>
            </nav>
        </>
    )
}