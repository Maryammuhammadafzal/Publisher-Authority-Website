import React from 'react'
import CallTOAction from './call-to-action'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center pt-10 pb-6 px-6'>
            <div className='w-full h-auto flex justify-center flex-col gap-6 items-center rounded-4xl bg-primary/10'>
                <CallTOAction />

                <div className='flex flex-col w-full h-auto justify-center items-center px-3'>
                    <div className='lg:w-[90%] w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='left flex flex-col gap-3'>
                            <div className='logo w-auto h-[70px] flex items-center'>
                                <Image src={'/images/logo.png'} alt='Logo' width={150} height={100} />
                            </div>

                            <p className=''>Earn from your blog without overwhelming your audience with ads. Publisher Authority helps you connect with brands, sponsors, and loyal readers — so you can grow with confidence.</p>
                        </div>
                        <div className="middle w-full flex justify-center">
                            <div className='flex flex-col gap-3 pt-4 mx-auto w-fit'>
                                <h4 className='text-2xl font-medium'>Quick Links</h4>

                                <ul className='w-auto'>
                                    <li className='space-y-1'>Home</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='copy-right flex justify-center items-center py-8'>
                        <p className='text-primary'>Copyright © 2025 <span className='underline'>Publisher Authority</span>. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
