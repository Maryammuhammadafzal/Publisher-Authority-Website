import { Button } from '@/components/ui/button'
import { ArrowRightCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const FeaturesPage = () => {
    return (
        <section className='w-full h-auto flex justify-center lg:py-20 md:py-14 py-8 px-3 items-center'>
            <div className='w-[85%] h-auto flex flex-col gap-6'>
                <div className='w-full flex gap-3 justify-center items-center'>

                    {/* Image */}
                    <div className='w-1/2'>
                        <Image src={'/images/hero-image.png'} alt='Hero-Image' width={700} height={900} />
                    </div>

                    {/* Content */}
                    <div className='md:w-1/2 xl:pl-20 lg:pl-16 md:pl-8 w-full text-primary flex flex-col gap-8 justify-center'>
                        <h1 className='text-7xl font-medium leading-24'>
                            {/* Publisher Authority – */}
                            Connect Your Blog in Minutes
                        </h1>
                        <p className='text-lg max-w-xl'>
                            No coding, no hassle. Publisher Authority works seamlessly with WordPress, Ghost, and most CMS platforms.
                        </p>
                        <div className='featurres flex gap-6'>
                            <p className='text-lg max-w-xl flex gap-3'>
                                <ArrowRightCircle />
                                Earn from your blog without overwhelming your audience with ads. Publisher Authority helps you connect with brands, sponsors, and loyal readers — so you can grow with confidence.
                            </p>
                            <p className='text-lg max-w-xl flex gap-3'>
                                <ArrowRightCircle />
                                Earn from your blog without overwhelming your audience with ads. Publisher Authority helps you connect with brands, sponsors, and loyal readers — so you can grow with confidence.
                            </p>
                        </div>
                        <div>
                            <Button className='hover:bg-transparent hover:border hover:border-primary hover:text-primary h-12 text-base px-10'>Learn More</Button>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default FeaturesPage
