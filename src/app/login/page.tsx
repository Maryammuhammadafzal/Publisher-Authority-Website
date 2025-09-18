import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-neutral-300'>
            <div className='lg:w-[80%] md:w-[90%] w-full py-10 flex justify-between'>
                <div className="left flex w-1/2 py-10 px-6 h-full flex-col gap-10">
                    {/* Logo */}
                    <div className='flex gap-2'>
                        <div className='logo w-auto h-auto'>
                            <Image src={'/images/logo.png'} alt='Logo' width={150} height={680} />
                        </div>
                      <p className='font-semibold text-lg text-black'>Publisher Authority</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginPage
