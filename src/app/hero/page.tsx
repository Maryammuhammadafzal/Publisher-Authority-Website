import { Button } from '@/components/ui/button'
import { ArrowUpRightFromCircle, MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='lg:w-[90%] w-full flex gap-3 justify-center items-center'>
        {/* Content */}
        <div className='md:w-1/2 xl:pl-20 lg:pl-16 md:pl-8 w-full text-primary flex flex-col gap-6 justify-center'>
          <h1 className='text-7xl font-medium leading-24'>
            {/* Publisher Authority – */}
             Smarter Ways to Monetize Your Content
          </h1>
          <p className='text-lg max-w-xl'>
            Earn from your blog without overwhelming your audience with ads. Publisher Authority helps you connect with brands, sponsors, and loyal readers — so you can grow with confidence.
          </p>
          <div className='buttons flex gap-6'>
            <Button className='hover:bg-transparent hover:border hover:border-primary hover:text-primary h-12 text-base px-10'>Get Started</Button>
            <Button className='bg-transparent text-primary border border-primary hover:text-secondary h-12 text-base px-10'>How It Works <ArrowUpRightFromCircle/> </Button>
          </div>
        </div>

        {/* Image */}
        <div className='w-1/2'>
          <Image src={'/images/hero-image.png'} alt='Hero-Image' width={800} height={800} />
        </div>
      </div>
    </div>
  )
}

export default HeroPage
