'use client'

import { Search, ChevronLeft } from 'lucide-react'
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from 'react'
import Image1 from "@/app/restaurantinformation/Image1.jpeg"
import Image2 from "@/app/restaurantinformation/Image2.jpeg"

export function RestaurantInformation() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    // Here you would typically make an API call or filter results
  }

  const times = [
    '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
    '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header
      <header className="bg-primary p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Instant Reserve</h1>
              <p className="text-sm">Restaurants and Dining</p>
            </div>
            <form onSubmit={handleSearch} className="flex items-center gap-2 max-w-md w-full">
              <div className="relative flex-1">
                <Input
                  placeholder="Search"
                  className="pl-3 pr-10 bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Button type="submit" size="icon" variant="outline" className="rounded-full bg-white w-10 h-10">
                <span className="sr-only">Search</span>
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </header>
      */}

      {/* Navigation */}
      <Tabs defaultValue="location" className="max-w-7xl mx-auto w-full px-4 mt-10">
        <TabsList className="w-full grid grid-cols-4">
          <TabsTrigger value="location">Location</TabsTrigger>
          <TabsTrigger value="time">Time</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
          <TabsTrigger value="category">Category</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Location Name 1</h2>
          <p className="text-gray-600">Location address Contact Phone Number</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Video Player */}
            <div className="aspect-video bg-gray-100 rounded-lg border relative">
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-2 flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  ▶
                </Button>
                <div className="h-1 flex-1 bg-gray-200 rounded">
                  <div className="w-1/3 h-full bg-primary rounded" />
                </div>
                <span className="text-sm">0:00/3:53</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">What is this place?</h3>
              <p className="text-gray-600 mb-4">
                Some default text to fill some space, and something more so there is more text
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={Image1}
                alt="Restaurant image 1"
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
              <Image
                src={Image2}
                alt="Restaurant image 2"
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {times.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  className="w-full py-2"
                  onClick={() => handleTimeSelection(time)}
                >
                  {time}
                </Button>
              ))}
            </div>

            {selectedTime && (
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p className="text-center font-semibold">
                  You've selected {selectedTime} for your reservation.
                </p>
                <Button className="w-full mt-4">Confirm Reservation</Button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer 
      <footer className="bg-primary p-8 mt-8">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 text-center">
          <div>
            <p>1234 Address St</p>
            <p>San Diego, California</p>
            <p>619-123-4567</p>
          </div>
          <Button variant="link">Contact Us</Button>
          <Button variant="link">Privacy</Button>
          <Button variant="link">Support</Button>
        </div>
      </footer>
      */}
    </div>
  )
}

export default RestaurantInformation

