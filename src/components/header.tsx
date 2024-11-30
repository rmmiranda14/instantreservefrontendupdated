import Link from "next/link";
import { ModeToggle } from '@/components/modetoggle'
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, User } from 'lucide-react'

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-red-50 border-b border-red-100 static top-0 left-0 right-0">
      <div className="flex items-center">
        <button className="text-2xl font-bold text-red-600">
          <Link href="/">InstantReserve</Link>
        </button>
      </div>
      <div className="ThemePicker">
        <ModeToggle />
      </div>
      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-red-300" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 bg-white border-red-200 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
          />
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-1xl font-bold text-red-600">
          <Link href="/login-page">Login/Register</Link>
        </button>
      </div>
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="bg-red-200 text-red-600">
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
