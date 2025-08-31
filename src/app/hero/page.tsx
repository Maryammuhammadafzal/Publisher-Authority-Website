import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='lg:w-[90%] w-full flex gap-3 justify-center items-center'>
        {/* Content */}
        <div className='md:w-1/2 w-full text-primary flex flex-col gap-4 justify-center'>
          <h1 className='text-9xl'>
            Publisher Authority – Smarter Ways to Monetize Your Content
          </h1>
          <p>
            Earn from your blog without overwhelming your audience with ads. Publisher Authority helps you connect with brands, sponsors, and loyal readers — so you can grow with confidence.
          </p>
          <div className='buttons flex gap-4'>
            <Button className='bg-transparent text-primary border border-primary hover:text-secondary'>Login</Button>
            <Button className='hover:bg-transparent hover:border hover:border-primary hover:text-primary'>Get Started</Button>
          </div>
        </div>

        {/* Image */}
        <div className='w-1/2'>
          <Image src={'/images/hero-image.png'} alt='Hero-Image' width={300} height={300} />
        </div>
      </div>
    </div>
  )
}

export default HeroPage
