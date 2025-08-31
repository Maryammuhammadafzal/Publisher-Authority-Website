import Image from 'next/image'
import React from 'react'

const TestimonialPage = () => {

    const TestimonialData = [
        {
            review: 'Publisher Authority gave me the freedom to monetize without compromising my content. My readers trust me more than ever.',
            image: '/images/customer-image1.jpg',
            name: 'Sofia',
            passion: 'Lifestyle Blogger'
        },
        {
            review: 'Clean, simple, and effective. I finally feel in control of my revenue.',
            image: '/images/customer-image2.avif',
            name: 'Daniel,',
            passion: 'Tech Blogger'
        },
        {
            review: 'Publisher Authority gave me the freedom to monetize without compromising my content. My readers trust me more than ever.',
            image: '/images/customer-image3.jpg',
            name: 'Sofia',
            passion: 'Lifestyle Blogger'
        },
        {
            review: 'Publisher Authority gave me the freedom to monetize without compromising my content. My readers trust me more than ever.',
            image: '/images/customer-image1.jpg',
            name: 'Sofia',
            passion: 'Lifestyle Blogger'
        },
        {
            review: 'Clean, simple, and effective. I finally feel in control of my revenue.',
            image: '/images/customer-image2.avif',
            name: 'Daniel,',
            passion: 'Tech Blogger'
        },
        {
            review: 'Publisher Authority gave me the freedom to monetize without compromising my content. My readers trust me more than ever.',
            image: '/images/customer-image3.jpg',
            name: 'Sofia',
            passion: 'Lifestyle Blogger'
        },
    ]
    return (
        <section className='about bg-background w-full h-auto flex justify-center items-center lg:py-20 md:py-14 py-8 relative'>
            {/* <div className='w-[200px] h-[200px] absolute right-0 top-0 bg-green-300/30 blur-[200]'></div> */}
            <div className='lg:w-[90%] flex flex-col gap-10 justify-center items-center'>
                <h2 className='text-6xl font-medium leading-20'>
                    Our Testimonial
                </h2>
                <div className='grid grid-cols-3 w-auto h-auto justify-center items-center'>
                    {TestimonialData.map((testimonial, index) => (
                        <div key={index} className='w-[350px] h-[300px] p-10 border-[1px] border-neutral-300 flex flex-col justify-between gap-4'>
                            <p className='text-lg italic'>
                                "{testimonial.review}"
                            </p>
                            <div className='flex gap-3 items-center'>
                                <Image src={testimonial.image} alt={testimonial.name} width={60} height={60} className='rounded-full' />
                                <div className='flex flex-col'>
                                    <h4 className='text-green-800 font-medium text-lg'>
                                        {testimonial.name}
                                    </h4>
                                    <p className='text-sm'>{testimonial.passion}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialPage
