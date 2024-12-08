'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ModeToggle } from '@/components/modetoggle';
import { Search, User } from 'lucide-react';

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const checkToken = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await fetch('http://127.0.0.1:8000/users/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setIsLoggedIn(true);
          setUser(data);
        } else {
          localStorage.removeItem('token');
          setIsLoggedIn(false);
          setUser(null);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setUser(null);
      }
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  useEffect(() => {
    checkToken(); // Check on mount

    const handleStorageChange = () => checkToken();
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUser(null);
    window.dispatchEvent(new Event('storage')); // Trigger storage event
  };

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
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="text-1xl font-bold text-red-600"
          >
            Logout
          </button>
        ) : (
          <Link href="/login-page">
            <span className="text-1xl font-bold text-red-700">Login/SignUp</span>
          </Link>
        )}
      </div>
      {isLoggedIn && user && (
        <div className="flex items-center">
          <Avatar>
        <button className="flex items-center">
        <Link href="/userpage">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="bg-red-200 text-red-600">
            <User className="h-4 w-4" />
          </AvatarFallback>
          </Link>
          </button>
        </Avatar>
      </div>
      )}
    </header>
  );
}