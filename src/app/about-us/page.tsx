import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Globe, Shield } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">About InstantReserve</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Simplifying reservations for businesses and customers worldwide
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="text-muted-foreground">
            Founded in 2018, InstantReserve was born out of a simple idea: to make reservations easy and accessible for everyone. Our founders, tech enthusiasts with a passion for problem-solving, recognized the need for a unified, user-friendly reservation system that could serve various industries.
          </p>
          <p className="text-muted-foreground">
            What started as a small startup has now grown into a global platform, serving thousands of businesses and millions of users across the world. Our journey is defined by continuous innovation and a commitment to improving the reservation experience for both service providers and customers.
          </p>
        </div>
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="InstantReserve team collaborating"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Our Mission</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto">
          At InstantReserve, our mission is to revolutionize the way people make and manage reservations. We strive to create a seamless, efficient, and enjoyable booking experience for every user, while empowering businesses with powerful tools to optimize their operations.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Calendar className="h-12 w-12 mb-4 text-primary" />
              <h3 className="font-semibold">Easy Booking</h3>
              <p className="text-sm text-muted-foreground">Streamlined reservation process for any service</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Clock className="h-12 w-12 mb-4 text-primary" />
              <h3 className="font-semibold">Time-Saving</h3>
              <p className="text-sm text-muted-foreground">Efficient management for businesses and customers</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Globe className="h-12 w-12 mb-4 text-primary" />
              <h3 className="font-semibold">Global Reach</h3>
              <p className="text-sm text-muted-foreground">Connecting services and customers worldwide</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Shield className="h-12 w-12 mb-4 text-primary" />
              <h3 className="font-semibold">Secure &amp; Reliable</h3>
              <p className="text-sm text-muted-foreground">Trustworthy platform with data protection</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">1</div>
            <h3 className="font-semibold">Choose a Service</h3>
            <p className="text-sm text-muted-foreground">Browse through our wide range of partnered businesses and services.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">2</div>
            <h3 className="font-semibold">Select Date and Time</h3>
            <p className="text-sm text-muted-foreground">Pick your preferred slot from the available options.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">3</div>
            <h3 className="font-semibold">Confirm Reservation</h3>
            <p className="text-sm text-muted-foreground">Complete your booking with just a few clicks.</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "Alex Johnson", role: "CEO & Co-founder", image: "/placeholder.svg?height=300&width=300" },
            { name: "Samantha Lee", role: "CTO & Co-founder", image: "/placeholder.svg?height=300&width=300" },
            { name: "Michael Chen", role: "Head of Customer Success", image: "/placeholder.svg?height=300&width=300" },
            { name: "Emily Rodriguez", role: "Lead Designer", image: "/placeholder.svg?height=300&width=300" },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative h-40 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted p-8 rounded-lg text-center space-y-4">
        <h2 className="text-3xl font-semibold">Join InstantReserve Today</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Whether you're a business looking to streamline your reservation process or a customer seeking hassle-free bookings, InstantReserve is here to simplify your life.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/">Look For Businesses</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contactus">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}