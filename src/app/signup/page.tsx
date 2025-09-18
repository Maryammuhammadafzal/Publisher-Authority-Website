'use client'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react';

interface SignupForm {
    email: string;
    password: string;
    name: string;
}

const SignupPage = () => {
    const [error, setError] = useState<null | string>(null);
    const [formData, setFormData] = useState<SignupForm>({
        email: '',
        password: '',
        name: ''
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        // const result = await signIn('credentials', {
        //     redirect: false,
        //     email: formData.email,
        //     password: formData.password,
        // });

        // if (result?.error) {
        //     setError(result?.error);
        // } else {
        //     window.location.href = '/dashboard'; // Redirect on success
        // }

        if (formData.name && formData.email && formData.password) {
            window.location.href = '/dashboard';
        }
    };

    return (
        <div className='w-full min-h-screen flex justify-center bg-primary/10'>
            <div className='lg:w-[80%] md:w-[90%] sm:w-[80%] w-full py-10 flex md:flex-row flex-col justify-between'>
                {/* Left */}
                <div className="left flex md:w-1/2 md:py-10 py-5 px-6 h-full flex-col gap-7">
                    {/* Logo */}
                    <div className='logo w-auto h-[110px]'>
                        <Image src={'/images/logo.png'} alt='Logo' width={150} height={680} />
                    </div>
                    <div className='space-y-4 max-w-md'>
                        <h1 className='sm:text-3xl text-2xl font-semibold'>
                            Sign up to Publisher Authority
                        </h1>
                        <p className='text-primary/70'>We collect awesome websites to help creatives find inspiration & motivation to do rad stuff.</p>
                    </div>
                </div>

                {/* Right */}
                <div className='right flex md:w-1/2 md:py-14 py-7 flex-col gap-3 px-5 h-auto justify-center items-center'>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className='w-full h-auto bg-secondary p-8 rounded-3xl'>
                        <form onSubmit={handleSubmit} className='w-full h-auto flex flex-col items-center gap-6'>
                            {/* Google Button */}
                            <Button className='w-full flex justify-center gap-3 items-center text-center h-10 text-primary bg-white hover:bg-secondary shadow-sm border border-primary/10'>
                            <Image src='/images/google-logo.png' alt='Google Logo' width={14} height={14} />  Continue With Google
                            </Button>

                            <p className='text-sm text-primary/70'>OR</p>

                            <div className='w-full flex flex-col gap-8'>

                                <div className="grid w-full items-center gap-3 ">
                                    <Label htmlFor="name">Full Name <address></address></Label>
                                    <Input type="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} id="name" placeholder="John Doe" className='bg-white h-10 shadow-sm' />
                                </div>
                                <div className="grid w-full items-center gap-3 ">
                                    <Label htmlFor="email">Email <address></address></Label>
                                    <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} id="email" placeholder="example123@gmail.com" className='bg-white h-10 shadow-sm' />
                                </div>
                                <div className="grid w-full  items-center gap-3">
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} id="password" placeholder="********" className='bg-white h-10 shadow-sm' />
                                </div>
                                {/* <div className='w-full px-5 text-sm'>
                                    <Link href='/forget-password' className='text-primary/70'>Forget Password?</Link>
                                </div>
                                <div className='items-center pl-3 flex gap-3'>
                                    <Checkbox id='save' className='border border-primary/20' />
                                    <Label htmlFor='save'>Remember me</Label>
                                </div> */}
                            </div>

                            <div className='w-full flex justify-end my-4 pr-3'>
                                <Button className='sign-in bg-green-800 hover:bg-green-700 text-secondary'>Sign Up</Button>
                            </div>
                        </form>
                    </div>
                    <div className='w-full px-5 text-sm'>
                        <p className='text-primary/70'>Already have an Account? <Link href='/login' className='text-green-700 hover:font-medium underline-offset-1 underline'>Sign in Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
