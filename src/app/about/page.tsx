'use client'
import { usePathname } from 'next/navigation';
import React from 'react'
import TestimonialPage from '../testimonial/page';
import FAQPage from '../faq/page';

const AboutPage = () => {
    const pathName = usePathname()



    return (
        <section className='about bg-background w-full h-auto flex flex-col justify-center items-center lg:py-20 md:py-14 py-8 relative'>
            {/* <div className='w-[200px] h-[200px] absolute right-0 top-0 bg-green-300/30 blur-[200]'></div> */}
            {
                pathName === '/' ? (
                    <div className='lg:w-[90%] flex flex-col gap-8 text-center justify-center items-center'>
                        <h2 className='text-6xl font-medium leading-20'>
                            Why Choose Publisher Authority?
                        </h2>
                        <p className='text-lg max-w-4xl'>
                            At Publisher Authority, we believe great writing should be rewarded — without sacrificing the reader’s experience. That’s why we’ve built a platform that empowers publishers to monetize authentically, build authority in their niche, and create lasting relationships with their audience.
                        </p>
                    </div>

                ) : (
                    <>
                        <div className='lg:w-[90%] flex flex-col gap-8 text-center justify-center items-center'>
                            <h2 className='text-6xl font-medium leading-20'>
                                Why Choose Publisher Authority?
                            </h2>
                            <p className='text-lg max-w-4xl'>
                                At Publisher Authority, we believe great writing should be rewarded — without sacrificing the reader’s experience. That’s why we’ve built a platform that empowers publishers to monetize authentically, build authority in their niche, and create lasting relationships with their audience.
                            </p>
                        </div>
                        <TestimonialPage />
                        <FAQPage />
                    </>
                )
            }
        </section >
    )
}

export default AboutPage
