'use client'
// import { useSession, signIn } from 'next-auth/react';
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Medal, Plus, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState<string | null>('')
  const [email, setEmail] = useState<string | null>('')
  // const { data: session, status } = useSession();

  // if (status === 'loading') {
  //   return <p>Loading...</p>;
  // }

  // if (!session) {
  //   signIn(); // Redirect to login page
  //   return null;
  // }

  useEffect(() => {
    const userName = localStorage.getItem('name')
    const userEmail = localStorage.getItem('email')
    setName(userName);
    setEmail(userEmail)
  }, [])

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
            <h1 className="text-4xl font-semibold">Welcome, {name}!</h1>
            <h3 className="level text-xl text-primary/60 pl-2 pt-1 flex gap-3">Bronze Level <Image src='/images/bronze-medal.png' alt="medal" height={20} width={30} /></h3>
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

        <Separator />
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
  );
}

{/* <h1>Welcome, {session.user?.name}</h1>
<p>Email: {session.user?.email}</p> */}
{/* <p>User ID: {session.user?.id}</p> */ }

// 🥇
// 🥈
// 🥉