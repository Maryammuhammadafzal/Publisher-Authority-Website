'use client'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, Clock, Plus, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image'

const WebsitesPage = () => {
    const [statusFilter, setStatusFilter] = useState("all");
    const [activeTab, setActiveTab] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedNiche, setSelectedNiche] = useState("all")
    const [daRange, setDaRange] = useState([0, 100])
    const [priceRange, setPriceRange] = useState([0, 10000])
    const [trafficRange, setTrafficRange] = useState([0, 10000000]);
    const [showFilters, setShowFilters] = useState(false)
    const [selectedItem, setSelectedItem] = useState<any>(null)
    const [showPurchaseModal, setShowPurchaseModal] = useState(false)
    const [websites, setWebsites] = useState<any[]>([])

    useEffect(() => {
        const webs = [
            {
                name: 'Guset Post Now',
                url: 'https://guestpostnow.io',
                category: 'General',
                da: 22,
                dr: 55,
                traffic: '1M',
                status: 'pending',
                delivery: new Date(),
                currentPrice: 200
            }
        ];

        setWebsites(webs);

    }, [])
    console.log(websites);

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
    ];

    const parseTraffic = (traffic: any) => {
        if (!traffic || typeof traffic !== "string") return 0;

        const cleanTraffic = traffic.toLowerCase().replace(/[^0-9km.]/g, "");
        const multiplier = cleanTraffic.endsWith("m")
            ? 1000000
            : cleanTraffic.endsWith("k")
                ? 1000
                : 1;
        const number = parseFloat(cleanTraffic.replace(/[km]/g, ""));
        return isNaN(number) ? 0 : number * multiplier;
    };

    const formatTraffic = (value: any) => {
        if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
        if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
        return value.toString();
    };

    // Filter
    // const getFilteredWebsites = (tabCategory: string) => {
    const getFilteredWebsites = (statusFilter: string) => {
        // Ensure websites is always an array
        if (!Array.isArray(websites)) {
            return []
        }

        let filteredWebsites = [...websites]
        console.log(filteredWebsites);


        // Filter by tab category using section field
        // if (tabCategory === "standard") {
        //     filteredWebsites = filteredWebsites.filter((site) => site.section === "standard")
        // } else if (tabCategory === "premium") {
        //     filteredWebsites = filteredWebsites.filter((site) => site.section === "premium")
        // }
        if (statusFilter === "all") {

            filteredWebsites = filteredWebsites.filter((site) => site)
            console.log(filteredWebsites);
        } else if (statusFilter === "pending") {
            filteredWebsites = filteredWebsites.filter((site) => site.status === "pending")
        } else if (statusFilter === "active") {
            filteredWebsites = filteredWebsites.filter((site) => site.status === "active")
        } else if (statusFilter === "rejected") {
            filteredWebsites = filteredWebsites.filter((site) => site.status === "rejected")
        } else if (statusFilter === "deleted") {
            filteredWebsites = filteredWebsites.filter((site) => site.status === "deleted")
        }



        // Apply other filters
        // filteredWebsites = filteredWebsites.filter((website) => {
        //     const traffic = parseTraffic(website.traffic);
        //     const matchesSearch = website.name && website.name.toLowerCase().includes(searchTerm.toLowerCase())
        //     const matchesNiche =
        //         selectedNiche === "all" || website.niche === selectedNiche || website.category === selectedNiche
        //     const matchesDA = website.da >= daRange[0] && website.da <= daRange[1]
        //     const matchesPrice = website.doFollowPrice >= priceRange[0] && website.doFollowPrice <= priceRange[1]
        //     const matchesTraffic = traffic >= trafficRange[0] && traffic <= trafficRange[1];

        //     return matchesSearch && matchesNiche && matchesDA && matchesPrice && matchesTraffic
        // })

        // Limit items if maxItems is specified (for homepage preview)
        // if (maxItems && filteredWebsites.length > 0) {
        //     filteredWebsites = filteredWebsites.slice(0, maxItems)
        // }

        console.log(filteredWebsites);
        return filteredWebsites
    }


    const clearFilters = () => {
        setSearchTerm("")
        setSelectedNiche("all")
        setDaRange([0, 100])
        setPriceRange([0, 10000])
        setTrafficRange([0, 10000000]);
    }
    const hasActiveFilters =
        searchTerm ||
        selectedNiche !== "all" ||
        daRange[0] !== 0 ||
        daRange[1] !== 100 ||
        priceRange[0] !== 0 ||
        priceRange[1] !== 10000
    trafficRange[0] !== 0 ||
        trafficRange[1] !== 10000000;

    const WebsiteCard = ({ website }: { website: any }) => {
        const [selectedLinkType, setSelectedLinkType] = useState<"dofollow" | "nofollow">("dofollow")
        console.log(website);

        const currentPrice =
            website.section === "premium"
                ? selectedLinkType === "dofollow"
                    ? website.premiumDoFollowPrice || website.doFollowPrice
                    : website.premiumNoFollowPrice || website.noFollowPrice
                : website.standardPrice || website.doFollowPrice

        // Check if user is logged in for button state
        // let canPurchase;
        // if (isLoggedIn && userEmail) {
        //   canPurchase = isLoggedIn && userEmail && Math.abs(balance) >= Math.floor(currentPrice);
        // }

        return (
            <TableBody key={website.name} className="border-b border-primary/10">
                <TableRow>
                    <TableCell className="font-medium">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-primary font-semibold text-sm leading-tight mb-1">{website.name || "Website"}</h3>
                            <a
                                href={website.url || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                <p className="text-blue-500 text-sm hover:text-blue-400 truncate">{website.url.length > 20 ? website.url.slice(0, 19) + '...' : website.url || ""}</p>
                            </a>
                            <p className="text-gray-700 flex gap-1 hover:text-primary transition-colors flex-shrink-0 mt-2">
                                {selectedLinkType === "dofollow" ? "Do Follow" : "No Follow"}
                            </p>
                        </div>
                    </TableCell>
                    <TableCell className="text-center">
                        <p className="text-secondary bg-blue-500 mx-auto w-fit px-3 py-1 rounded-xl text-xs">{website.niche || website.category || "General"}</p>
                    </TableCell>
                    <TableCell className="text-center space-x-2 text-primary">
                        <div className="flex justify-center gap-1 items-center">
                            <Image src={'/images/da_logo.png'} alt="da_logo" width={24} height={24} />  {website.da || 0}
                        </div>
                    </TableCell>
                    <TableCell className="text-center text-primary">
                        {/* </div> */}
                        <div className="flex justify-center gap-2">
                            <Image src={'/images/dr_logo.jpeg'} alt="dr_logo" width={24} height={24} />
                            {website.dr || 0}
                        </div>
                    </TableCell>
                    <TableCell className="text-center"> <span className="text-primary font-medium">Traffic: {website.traffic || "N/A"}</span></TableCell>
                    <TableCell>
                        <div className="flex flex-col gap-1 items-center justify-between text-sm">
                            <span className="text-gray-400 flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                Delivery
                            </span>
                            <span className="text-primary">{website.delivery || "3-5 days"}</span>
                        </div>
                    </TableCell>
                    <TableCell className="text-right">
                        <div className="text-base font-bold text-blue-500">${(Math.floor(currentPrice) || 0).toLocaleString()}</div></TableCell>
                    <TableCell className="text-right">
                        <Button
                            //   onClick={() => handleBuyClick(website, selectedLinkType)}
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                            size="sm"
                        // disabled={!canPurchase}
                        >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Buy Now
                        </Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        )
    }

    const filteredWebsites = getFilteredWebsites(statusFilter)
    console.log(filteredWebsites);

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
                            <Card key={index} className="">
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
                            <CardContent className="flex flex-col justify-between items-center">

                                {/* Filters */}
                                <div className="filters w-full h-auto flex gap-3"></div>

                                {/* Websites Table */}

                                <div className="w-full overflow-x-auto">

                                    <div className="min-w-max">
                                        <Table className="min-w-max">
                                            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-[200px]">Websites</TableHead>
                                                    <TableHead className="text-center">Category</TableHead>
                                                    <TableHead className="text-center">Domain Authority</TableHead>
                                                    <TableHead className="text-center">Domain Rating</TableHead>
                                                    <TableHead className="text-center">Traffic</TableHead>
                                                    <TableHead className="w-[150px]">Delivery Time</TableHead>
                                                    <TableHead className="text-right w-[100px]">Price</TableHead>
                                                    <TableHead className="text-right">Action</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            {filteredWebsites.map((website, index) => (
                                                <>
                                                    {/* {console.log(website)} */}
                                                    <WebsiteCard key={`${index}`} website={website} />
                                                </>
                                            ))}
                                        </Table>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>


            </div>
        </DashboardLayout>
    )
}

export default WebsitesPage
