'use client'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, Plus } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const WebsitesPage = () => {
    const [statusFilter, setStatusFilter] = useState("all")

    let cardStats = [
        {
            title: 'Completed',
            description: `Jobs that you've completed.`,
            count: 22,
            amount: 900,
            icon: CheckCircle
        },
        {
            title: 'Completed',
            description: `Jobs that you've completed.`,
            count: 22,
            amount: 900,
            icon: CheckCircle
        },
        {
            title: 'Completed',
            description: `Jobs that you've completed.`,
            count: 22,
            amount: 900,
            icon: CheckCircle
        },
        {
            title: 'Completed',
            description: `Jobs that you've completed.`,
            count: 22,
            amount: 900,
            icon: CheckCircle
        },
    ]
    return (
        <DashboardLayout>
            <div className="w-full h-screen flex flex-col gap-6 p-6">

                <div className="flex justify-between gap-3 w-full">
                    <div className="flex flex-col max-w-lg">
                        <h1 className="text-4xl font-semibold">Websites</h1>
                        {/* <h3 className="level text-xl text-primary/60 pl-2 pt-1 flex gap-3">Bronze Level <Image src='/images/bronze-medal.png' alt="medal" height={20} width={30} /></h3> */}
                        {/* <p className="text-sm">We help grow sites by sending quality blog posts.</p> */}
                    </div>
                    <div className="">
                        <Button className='hover:bg-primary/90 hover:border hover:border-primary hover:text-secondary md:block hidden'>
                            <Link href='/dashboard/message' className="flex gap-2 items-center">
                                <Plus /> Add Website
                            </Link>
                        </Button>
                    </div>
                </div>

                <Separator className='my-3' />

                {/* Website Cards */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-medium">Overview</h2>
                    <div className="w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                        {cardStats.map((state, index) => (
                            <Card className="">
                                <CardHeader>
                                    <CardTitle className="w-full flex justify-between">
                                        {state.title} <state.icon className="h-4 w-4" />
                                    </CardTitle>
                                    <p className="text-primary/70 text-sm">{state.description}</p>
                                </CardHeader>
                                <CardContent className="flex justify-between items-center">
                                    <h2 className="font-semibold text-xl">{state.count}</h2>
                                    {/* <div className="flex gap-4">
              </div> */}
                                    <p className="text-primary/60 text-sm"> ${state.amount}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Website List */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-medium">Total Website (22)</h2>
                    <div className="w-full h-auto flex justify-center items-center">
                        <Card className=" w-full h-auto">
                            <CardHeader>
                                <div className='flex gap-3 w-full justify-between'>
                                    <div className='space-y-1'>
                                        <CardTitle className="w-full flex justify-between capitalize">
                                            {statusFilter} Websites
                                        </CardTitle>
                                        <p className="text-primary/70 text-sm">We help grow sites by sending quality blog posts.</p>
                                    </div>
                                    <div>
                                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                                            <SelectTrigger className="w-40 bg-primary border-white text-white">
                                                <SelectValue placeholder="Status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">All Sites</SelectItem>
                                                <SelectItem value="pending">Pending</SelectItem>
                                                <SelectItem value="active">Active</SelectItem>
                                                <SelectItem value="rejected">Rejected</SelectItem>
                                                <SelectItem value="deleted">Deleted</SelectItem>
                                            </SelectContent>
                                        </Select>

                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex justify-between items-center">

                                {/* Filters */}
                                <div className="filters w-full h-auto flex gap-3"></div>

                                {/* Websites Table */}
                            </CardContent>
                        </Card>

                    </div>
                </div>


            </div>
        </DashboardLayout>
    )
}

export default WebsitesPage
