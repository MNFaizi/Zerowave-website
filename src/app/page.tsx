"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SocialDiv from '@/components/home/SocialDiv'
import WhyStakeUs from '@/components/home/WhyStake'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ProjectCard, { ProjectProp } from "@/components/portofolio/Card";
import { getProject } from "@/lib/utils/getProject";
import Loading from './loading'

export default function Home() {
  const [datas, setDatas] = useState<ProjectProp []>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProject();
      setDatas(data);
      setIsLoading(false);
    }  
    fetchData()
  }, []);
  if(isLoading) return <Loading/>
  return (
    <>
      <Navbar />
      <main className="lg:container my-auto">
        <div className='flex flex-col items-center'>
          <Image
            src={'/Zerowave-Crop.png'}
            alt='Zerowave Logo'
            width={275}
            height={275}
            priority
          />
          <span
            className='w-3/4 lg:w-1/2 text-center my-3 font-semibold text-lg'
          >
            Welcome to our cutting-edge Validator Hub, revolutionizing blockchain trust and efficiency through expert node operations. Join us in shaping the blockchain future.
          </span>
          <Link href='#portofolio' className='bg-zero-main-opposite rounded-md transition m-3 hover:scale-110 hover:bg-zero-secondary'>
            <button className='w-44 h-12 font-bold text-xl' style={{ color: 'white' }}>Stake With Us</button>
          </Link>
          <span className="font-semibold text-3xl text-zero-secondary">Why Stake With Zerowave Validator</span>
          <WhyStakeUs />
          <span className="font-semibold text-3xl my-3 text-zero-secondary">Our Social Media</span>
          <SocialDiv />
        </div>
        <section id='portofolio'>
          <div className='container text-center'>
            <h1 className="text-4xl font-bold my-2">Portofolio Page</h1>
            <p className='text-xl text-opacity-40'>This is a collection of projects that I supported. You can find the source code and more information</p>
          </div>
            <div className="container my-8">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-sans font-semibold tracking-[4px]">Mainnet</h2>
                <div className="flex flex-wrap items-center justify-center bg-zero-main bg-opacity-40 rounded-2xl w-[90%] m-4">
                  {datas.map((data: ProjectProp, index: number) => {
                    return (
                      data.mainnet ?
                        <div key={data.project_name} className="lg:w-1/4">
                          <ProjectCard project={data} index={index} />
                        </div>
                        : null
                    )
                  })}
                </div>
                <h2 className="text-2xl font-sans font-semibold tracking-[4px]">Testnet</h2>
                <div className="flex flex-wrap bg-zero-main bg-opacity-40 items-center justify-center rounded-2xl w-[90%] m-6">
                  {datas.map((data: ProjectProp, index: number) => {
                    return (
                      data.mainnet === false ?
                        <div className="lg:w-1/4" key={data.project_name}>
                          <ProjectCard project={data} index={index} />
                        </div>
                        : null
                    )
                  })}
                </div>
              </div>
            </div>
        </section>
      </main >
      <Footer />
    </>
  )
}
