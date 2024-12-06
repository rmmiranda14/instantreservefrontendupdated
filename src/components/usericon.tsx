'use client'

import Link from "next/link";
import validToken from "@/components/validtoken"
import Logout from '@/components/logout'
import { useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from 'lucide-react'
import { Header } from '@/components/header'

export function UserIcon(){ 
    if (validToken()) {
        return (
        <div className="flex items-left">
        <button>
        <Link href="/">
        Logout
        <Logout />
        </Link>

        </button>
        <Avatar>
            <button>
            <Link href="/protected-userpage">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="bg-red-200 text-red-600">
                <User className="h-4 w-4" />
              </AvatarFallback>
              </Link>
              </button>
        </Avatar>
        </div>
        )
      }
        return(
          <div className="flex items-center">
          <button className="text-1xl font-bold text-red-600">
            <Link href="/login-page">Login/SignUp</Link>
          </button>
        </div>
        )
      
}