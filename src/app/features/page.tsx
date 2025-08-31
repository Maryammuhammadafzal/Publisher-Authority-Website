import { Button } from '@/components/ui/button'
import { ArrowRightCircle, CornerDownRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const FeaturesPage = () => {
    const featuresData = [
        {
            title: 'Connect Your Blog in Minutes',
            description: 'No coding, no hassle. Publisher Authority works seamlessly with WordPress, Ghost, and most CMS platforms.',
            feature: [
                'Earn from your blog without overwhelming your audience with ads.',
                'Publisher Authority helps you connect with brands, sponsors, and loyal readers — so you can grow with confidence.'
            ],
            image: '/images/feature-image1.png'
        },
        {
            title: 'Earn Without Annoying Ads',
            description: 'Offer premium content, partner with trusted sponsors, and unlock direct reader support — all while keeping your blog clean and ad-free.',
            feature: [
                'Partner With trusted Sponsors.',
                'Unlock Direct Reader Support.'
            ],
            image: '/images/feature-image2.jpg'
        },
        {
            title: 'Insights to Help You Grow',
            description: 'Track your performance, earnings, and audience engagement in one powerful dashboard.',
            feature: [
                'Audience Engagement in powerfull dashboard.',
                'Track your performance & Earning Easily.'
            ],
            image: '/images/feature-image3.png'
        },
        {
            title: 'Built for Publishers Like You',
            description: "We protect your content and your reader's trust while giving you the tools to monetize smarter.",
            feature: [
                'Monetize Your Content Smarter.',
                'Protect Your Content with Trust'
            ],
            image: '/images/feature-image4.webp'
        },
    ]
    return (
        <section className='w-full h-auto bg-background flex justify-center lg:py-20 md:py-14 py-8 px-3 items-center'>
            <div className='w-[85%] h-auto flex flex-col gap-14'>
                {
                    featuresData.map((feature, index) => (
                        <div key={index} className={`w-full flex gap-3 justify-center items-center`}>
                            {/* Image */}
                            <div className={`${index === 1 || index === 3 ? 'order-2' : 'order-1'} w-1/2`}>
                                <Image src={feature.image} alt='Feature-Image' width={550} height={400} className={`${index === 3 && 'w-[430px] h-[450px]'}`} />
                            </div>

                            {/* Content */}
                            <div className={`${index === 1 || index === 3 ? 'order-1' : 'order-2'} md:w-1/2 md:pl-8 w-full text-primary flex flex-col gap-8 justify-center`}>
                                <h2 className='text-6xl font-medium leading-20 max-w-lg'>
                                    {/* Publisher Authority – */}
                                    {feature.title}
                                </h2>
                                <p className='text-lg max-w-lg'>
                                    {feature.description}
                                </p>
                                    <div key={index} className='featurres flex-col flex gap-3'>
                                {feature.feature.map((item, index) => (
                                        <p key={index} className='text-lg max-w-lg items-center flex gap-3'>
                                            <span className='text-2xl'>
                                                <ArrowRightCircle className='text-2xl' />
                                            </span>
                                            {item}
                                        </p>
                                ))}
                                    </div>
                                <div className='ml-3 mt-3'>
                                    <Button className='hover:bg-transparent hover:border hover:border-primary hover:text-primary h-12 text-base px-14'><CornerDownRight /> Learn More</Button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section >
    )
}

export default FeaturesPage
