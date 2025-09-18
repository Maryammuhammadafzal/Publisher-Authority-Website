'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItem = [
        {
            href: '/',
            name: 'Home'
        },
        {
            href: '/about',
            name: 'About'
        },
        {
            href: '/features',
            name: 'Features'
        },
        {
            href: '/contact',
            name: 'Contact'
        },
    ]

    return (
        <header className='w-full bg-background h-[90px] shadow-sm z-10 relative'>
            <div className='w-full h-full flex justify-between gap-3 lg:px-12 md:px-6 px-4 py-1 items-center'>

                <div className='w-auto h-auto flex justify-center items-center gap-10'>
                    <div className='logo w-auto h-auto'>
                        <Image src={'/images/logo.png'} alt='Logo' width={150} height={680} />
                    </div>
                    <nav className='h-auto w-auto md:block hidden'>
                        <ul className='w-auto h-auto flex lg:gap-8 md:gap-4 items-center'>
                            {
                                navItem.map((item, index) => (
                                    <li key={index} className='font-medium hover:text-green-700'>
                                        <a href={item.href}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                </div>
                <div className='buttons flex gap-4'>
                    <Button className='bg-transparent text-primary border border-primary hover:text-secondary'>
                        <Link href='/login'>
                            Login
                        </Link>
                    </Button>
                    <Button className='hover:bg-transparent hover:border hover:border-primary hover:text-primary md:block hidden'>
                        <Link href='/signup'>
                            Get Started
                        </Link>
                    </Button>
                    <Button onClick={() => setIsOpen(true)} className='hover:bg-transparent hover:border hover:border-primary hover:text-primary md:hidden block'><Menu /></Button>
                </div>
            </div>

            <div className={` ${isOpen ? 'translate-x-135' : 'translate-x-200'} md:hidden block transition-transform space-y-10 duration-500 bg-secondary text-primary shadow-sm sidebar w-50 h-screen absolute top-0 left-0 py-10 px-4`}>
                <Button onClick={() => setIsOpen(false)} className='hover:bg-transparent hover:border hover:border-primary hover:text-primary md:hidden block'><X /></Button>
                <nav className='h-full flex w-auto'>
                    <ul className='w-auto h-auto flex flex-col gap-4'>
                        {
                            navItem.map((item, index) => (
                                <li key={index} className='font-medium hover:text-green-700'>
                                    <a href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
