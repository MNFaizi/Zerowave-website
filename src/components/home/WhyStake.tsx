import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandHoldingDollar, faServer, faShieldHalved, faNetworkWired } from "@fortawesome/free-solid-svg-icons"
import MotionDiv from "../animation/div"
library.add(faHandHoldingDollar, faServer, faShieldHalved, faNetworkWired)

const whyDescripstions = [
    { type: 'secure', icon: faShieldHalved, description: 'Customized tools empower developers and node operators, fostering collaboration and growth.' },
    { type: 'commission', icon: faHandHoldingDollar, description: 'Consistently low rates ensure a reliable, budget-friendly experience without revenue cuts since inception.' },
    { type: 'server', icon: faServer, description: 'Servers globally partnered with top providers. Utilizing sentry and backup nodes plus 24/7 monitoring ensures over 99.9% uptime.' },
    { type: 'contributions', icon: faNetworkWired, description: 'Active in decentralized governance and DAO voting. Provide free education and technical services. Stake to support our ecosystem.' }
]

export default function WhyStakeUs() {
    return (
        <>
            <div className="container m-4 flex items-center">
                <div className="lg:grid lg:grid-cols-4">
                    {whyDescripstions.map((whyDescripstion, index) => {
                        return (
                            <div key={index}>
                                <MotionDiv index={index}>
                                    <div className="flex flex-col lg:h-40 items-center m-2 bg-zero-main rounded-3xl bg-opacity-80">
                                    <div className="m-2">
                                        <FontAwesomeIcon icon={whyDescripstion.icon} size="3x" color="#ffff" />
                                    </div>
                                    <span className="text-center font-medium p-2">
                                        {whyDescripstion.description}
                                    </span>
                                    </div>
                                </MotionDiv>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}