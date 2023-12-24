import SocialDiv from '@/components/home/SocialDiv'
import WhyStakeUs from '@/components/home/WhyStake'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="lg:container my-auto">
        <div className='flex flex-col items-center'>
          <Image
            src={'/Zerowave-Crop.png'}
            alt='Zerowave Logo'
            width={275}
            height={275}
          />
          <span
            className='w-3/4 lg:w-1/2 text-center my-2 font-semibold text-lg'
          >
            Welcome to our cutting-edge Validator Hub, revolutionizing blockchain trust and efficiency through expert node operations. Join us in shaping the blockchain future.
          </span>
          <Link href='/portofolio' className='bg-zero-main-opposite rounded-md transition m-3 hover:scale-110 hover:bg-zero-secondary'>
            <button className='w-44 h-12 font-bold text-xl' style={{ color: 'white' }}>Stake With Us</button>
          </Link>
          <span className="font-semibold text-3xl text-zero-secondary">Why Stake With Zerowave Validator</span>
          <WhyStakeUs />
          <span className="font-semibold text-3xl text-zero-secondary">Our Social Media</span>
          <SocialDiv />
        </div>
    </main>
  )
}
