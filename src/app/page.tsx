import SocialDiv from '@/components/SocialDiv'
import WhyStakeUs from '@/components/WhyStake'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container my-2">
        <div className='flex flex-col items-center container'>
          <Image
            src={'/Zerowave-Crop.png'}
            alt='Zerowave Logo'
            width={275}
            height={275}
          />
          <span 
            className='w-1/2 text-center my-2 font-semibold text-lg'
          >
            Welcome to our cutting-edge Validator Hub, the nucleus of blockchain validation and node operations. We specialize in fostering trust and efficiency in the blockchain realm through our expertly managed validators and seamless node running nexus. Join us in revolutionizing the future of blockchain technology.
          </span>
          <Link href='/portofolio' className='bg-zero-main-opposite rounded-md transition m-3 hover:scale-110 hover:bg-zero-secondary'>
            <button className='w-44 h-12 font-bold text-xl' style={{color: 'white'}}>Stake With Us</button>
          </Link>
          <span className="font-semibold text-3xl text-zero-secondary">Why Stake With Zerowave Validator</span>
          <WhyStakeUs/>
          <span className="font-semibold text-3xl text-zero-secondary">Our Social Media</span>
          <SocialDiv/>
        </div>
    </main>
  )
}
