import React from 'react'
import { Button } from './ui/button'

const CallTOAction = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center py-10 px-10'>
            <div className='w-full flex justify-center min-h-[150px] items-center py-10 px-10 relative'>
                <div className='absolute top-0 left-0 -z-10 w-full h-auto rounded-4xl bg-green-900/90 mix-blend-multiply'>
                    <div className='w-full h-auto grid-background-2 rounded-4xl min-h-[150px] flex justify-between items-center'>
                    </div>
                </div>
                <div className='absolute top-0 left-0 w-full h-full flex justify-between items-center z-10 px-20 py-6 mix-blend-normal'>
                    <h2 className='text-4xl text-white font-medium'>
                        Ready to manage finance easily?</h2>

                    <Button className='hover:bg-secondary/80 text-lg hover:border hover:border-secondary/80 hover:text-primary px-14 py-8 bg-secondary text-primary '>Get Started</Button>

                </div>
            </div>
        </div>
    )
}

export default CallTOAction
