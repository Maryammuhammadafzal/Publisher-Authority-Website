"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  Globe,
  User,
  LogOut,
  Menu,
  X,
  Wallet,
  Plus,
  DollarSign,
  PhoneCall,
  User2,
  MessageCircleMore,
} from "lucide-react"
import { toast } from "sonner"
import Image from "next/image"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Websites", href: "/dashboard/website", icon: Globe },
  { name: "payments", href: "/dashboard/payment", icon: DollarSign },
  { name: "Contact", href: "/dashboard/contact", icon: PhoneCall },
  { name: "Profile", href: "/dashboard/profile", icon: User },
]

interface DashboardUser {
  id: string
  name: string
  email: string
  avatar?: string
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const navItem = [
    {
      href: '/dashboard/websites',
      name: 'Websites'
    },
    {
      href: '/dashboard/payment',
      name: 'Payments'
    },
    {
      href: '/dashboard/blogs',
      name: 'Blogs'
    },
    {
      href: '/dashboard/contact',
      name: 'Contact'
    },
  ]
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<DashboardUser | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const userName = localStorage.getItem('name') as string;
    const userEmail = localStorage.getItem('email') as string;
    const userPassword = localStorage.getItem('password') as string;
  
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    // Load user data 
    // setIsLoading(true);
    // const fetchUser = async () => {
    //   const res = await fetch("https://guestpostnow.io/guestpost-backend/users.php", {
    //     method: "GET"
    //   });
    //   const userData = await res.json();
    //   if (userData) {
    //     setIsLoading(false);
    //     console.log(userData);
    //     const user_id = localStorage.getItem('user_id');
    //     const isLoggedIn = localStorage.getItem('isLoggedIn');
    //     // console.log(user_id);
    //     const getUser = userData.find((item: any) => item.user_email === user_id);
    //     console.log(getUser);

    //     if (getUser) {
    //       setUser(getUser);
    //       sessionStorage.setItem('loggedInUser', getUser);
    //     }
    //     if (isLoggedIn === 'true') {
    //       setUserLoggedIn(true);
    //     }

    //     // console.log(user);

    //   } else {
    //     // Redirect to login if no user data
    //     router.push("/login")
    //   }
    // }
    // // Load user data
    // fetchUser();

    if (userLoggedIn && userEmail) {
      setUser({
        ...user, name: userName, email: userEmail, id: userName
      })
    }


  }, [])

  const handleLogout = async () => {
    if (confirm("Are you sure you want to logout?")) {
      // Clear all user data
      //   try {
      //     const userEmail = localStorage.getItem("user_id") || user?.user_email; // Assuming stored during login
      //     if (!userEmail) throw new Error("User not logged in");

      //     const res = await fetch("https://guestpostnow.io/guestpost-backend/user-logout.php", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({ ID: user?.ID, balance: 0 }),
      //     });

      //     const data = await res.json();
      //     if (userEmail) {
      //       localStorage.removeItem("user_id")
      //       localStorage.removeItem("isLoggedIn")
      //       // localStorage.removeItem("user-balance")
      //       // localStorage.removeItem("userProfile")
      //       // localStorage.removeItem("userOrders")
      //       // localStorage.removeItem("userServiceOrders")
      //       // localStorage.removeItem("userFundRequests")
      //       toast.success("Logged out successfully. All data has been deleted.");
      //       // Redirect to home page
      //       router.push("/")
      //     } else {
      //       // throw new Error(data.message);
      //     }
      //   } catch (error: any) {
      //     // console.error("Logout error:", error);
      //     toast.error(`Logout failed:  ${error.message}`);
      //   }

      localStorage.removeItem('email')
      localStorage.removeItem('name')
      localStorage.removeItem('password')
    };
  }

  // const handleAddFunds = () => {
  //   router.push("/dashboard/funds")
  // }

  if (isLoading) {
    // console.log('user not found yet');

    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-400"></div>
      </div>
    )
  }

  // if (user)
  return (
    <div className="min-h-screen relative bg-green-50">

      {/* Header */}
      <header className="w-full bg-green-50/20 h-[70px] flex justify-center items-center p-3 shadow-md">
        <div className='w-full h-full flex justify-between gap-3 md:px-6 px-4 py-1 items-center'>

          <div className='w-auto h-auto flex justify-center items-center gap-10'>
            <div className='logo w-auto h-auto'>
              <Image src={'/images/logo.png'} alt='Logo' width={120} height={680} />
            </div>
            <nav className='h-auto w-auto md:block hidden'>
              <ul className='w-auto h-auto flex lg:gap-8 md:gap-4 items-center'>
                {
                  navItem.map((item, index) => (
                    <li key={index} className='font-medium text-sm hover:text-green-700 text-primary/70'>
                      <a href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </nav>

          </div>
          <div className='buttons flex gap-2 items-center'>
            {/* <Button className='hover:bg-transparent hover:border hover:border-primary hover:text-primary md:block hidden'> */}
            <div className="relative">
              <Link href='/dashboard/message'>
              <MessageCircleMore className="h-5 w-6 text-primary/80 font-semibold" />
              <div className="absolute h-3 w-3 rounded-full bg-green-700 text-white text-[9px] -top-1 right-0 text-center font-semibold">1</div>
            </Link>
            </div>
            {/* </Button> */}
            {/* <Button className='bg-transparent text-primary border border-primary hover:text-secondary'> */}
            <Link href='/dashboard/profile'>
            <div className="w-10 h-10 p-1 bg-green-100 flex justify-center items-center rounded-full">
              {user?.avatar ? <Image src='/images/user-avatar.png' alt="user image" /> :
                <User2 className="h-5 w-6 text-primary/80 font-semibold" />
              }

            </div>
            </Link>
            {/* </Button> */}
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

      <main className="py-8">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">{children}</div>
      </main>
    </div>
  )
}

