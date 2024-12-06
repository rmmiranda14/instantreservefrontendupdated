'user client'

import Link from "next/link";
import { ModeToggle } from '@/components/modetoggle'
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, User } from 'lucide-react'
import validToken from '@/components/validtoken'
import { UserIcon } from '@/components/usericon'


export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b static top-0 left-0 right-0">
      <div className="flex items-center">
        <button className="text-3xl font-bold text-red-700">
          <Link href="/">InstantReserve</Link>
        </button>
      </div>
      <div className="flex-1 max-w-md mx-4">
        <ModeToggle />
      </div>
      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
        <Link href={`/restaurant-results`}>
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-red-300" />
        </Link>
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 bg-white border-red-200 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
          />
        </div>
      </div>
      <div className="flex items-center">
       <UserIcon />
      
      </div>
    </header>
  )
}
