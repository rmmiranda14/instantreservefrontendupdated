'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  const handleCancel = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header
      <header className="bg-[#f4a7a1] p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Instant Reserve</h1>
              <p className="text-sm">Contact Us</p>
            </div>
            <div className="flex items-center gap-2 max-w-md w-full">
              <div className="relative flex-1">
                <Input
                  placeholder="Search"
                  className="pl-3 pr-10 bg-white"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full bg-white w-10 h-10"
              >
                <span className="sr-only">User menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      */}

      {/* Navigation
      <Tabs defaultValue="location" className="max-w-7xl mx-auto w-full px-4 mt-10">
        <TabsList className="w-full grid grid-cols-4">
          <TabsTrigger value="location">Location</TabsTrigger>
          <TabsTrigger value="time">Time</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
          <TabsTrigger value="category">Category</TabsTrigger>
        </TabsList>
      </Tabs>
      */}

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-2 mt-2">Contact Us</h2>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 p-6 border rounded-lg">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="min-h-[150px]"
              required
            />
          </div>
          
          <div className="flex justify-between pt-4">
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              Submit
            </Button>
            <Button type="button" onClick={handleCancel} variant="outline" className="bg-blue-500 hover:bg-blue-600 text-white">
              Cancel
            </Button>
          </div>
        </form>
      </main>

      {/* Footer
      <footer className="bg-[#f4a7a1] p-8 mt-8">
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

