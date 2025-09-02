import React from 'react'
import CallTOAction from './call-to-action'

const Footer = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center pt-10 pb-6 px-6'>
            <div className='w-full h-auto flex justify-center flex-col gap-6 items-center rounded-4xl bg-primary/10'>
                <CallTOAction />

                <div className='w-full h-auto md:py-14 py-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>

                </div>
            </div>
        </div>
    )
}

export default Footer
