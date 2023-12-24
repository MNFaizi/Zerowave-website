import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram, faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link"
library.add(faEnvelope, faGithub,faTelegram, faTwitter, faDiscord, faMedium)

const socialLinks = [
    { name: 'github', link: 'https://github.com/ZerowaveTech/', icon: faGithub },
    { name: 'twitter', link: 'https://twitter.com/Zerowavee', icon: faTwitter },
    { name: 'telegram', link: 'https://t.me/ZerowaveTech', icon: faTelegram },
    { name: 'discord', link: 'https://discordapp.com/users/1056595684536623114', icon: faDiscord },
    { name: 'medium', link: 'https://medium.com/@zerowave.tech', icon: faMedium },
    { name: 'email', link: 'mailto:zerowave.tech@gmail.com', icon: faEnvelope }
]
export default function SocialDiv() {
    return (
        <>
            <div className="flex mx-6 my-4">
                {socialLinks.map((social) => {
                    return (
                        <div key={social.name} className="p-3 bg-zero-main rounded-full transition m-0.5 lg:m-3 hover:scale-125">
                            <Link href={social.link} target="_blank">
                                <FontAwesomeIcon icon={social.icon} size="2x" color="white"/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}