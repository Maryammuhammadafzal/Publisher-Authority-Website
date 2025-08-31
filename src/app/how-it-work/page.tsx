import React from 'react'

const HowItWorkPage = () => {
    const processData = [
        {
            title: 'Sign Up Free',
            description: 'Join Publisher Authority and link your blog instantly.'
        },
        {
            title: 'Select Your Revenue Streams',
            description: 'Sponsorships, premium memberships, or reader contributions.'
        },
        {
            title: 'Grow & Get Paid',
            description: 'Focus on publishing while we help you maximize earnings.'
        },
    ]
    return (
        <section className='w-full h-auto bg-background flex justify-center lg:py-20 md:py-14 py-8 px-3 items-center'>
            <div className='lg:w-[85%] flex flex-col gap-10 text-center justify-center items-center'>
                <h2 className='text-6xl font-medium leading-20'>
                    How It Works?
                </h2>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-4 justify-between'>
                    {processData.map((item, index) => (
                        <div key={index} className='flex w-full flex-col gap-3 max-w-xs text-center items-center'>
                            <div className='w-10 h-10 my-4 bg-emerald-900 text-secondary flex justify-center items-center rounded-full text-lg font-medium'>
                                {index + 1}
                            </div>
                            <h3 className='text-xl font-medium'>{item.title}</h3>
                            <p className='text-sm px-10'>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default HowItWorkPage
