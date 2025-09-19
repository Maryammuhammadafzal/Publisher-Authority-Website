import { DashboardLayout } from '@/components/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const WebsitesPage = () => {
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

        {/* <Separator /> */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium">Job Overview</h2>
        </div>
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

        <div className="w-full"></div>
      </div>
    </DashboardLayout>
  )
}

export default WebsitesPage
