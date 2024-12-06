import Image from 'next/image'
import Link from 'next/link'
import businessCollage from "@/app/businesscollage.jpg"
import RusticSpoon from "@/app/restaurant-results/Rustic Spoon.png"
import CineMark from "@/images/home/movietheatre.jpg"
import Spa from "@/images/home/spa.jpg"
import Entertainment from "@/images/home/entertainment.jpg"
import Discount from "@/images/home/sale.jpg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Search, Calendar, Star, Utensils, Film, Scissors, Music, Book } from 'lucide-react'


export default function Home() {

  return (
    
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <Image
          src= {businessCollage}
          alt="Various reservation experiences"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white space-y-6">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Book your next experience</h1>
          <p className="text-xl max-w-2xl mx-auto">Restaurants, entertainment, and more - all in one place</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl mx-auto px-4 text-black/40">
            <Input placeholder="What are you looking for" className="bg-white/70 w-full sm:w-auto" />
            <Input placeholder="Location" className="bg-white/70 w-full sm:w-auto" />
            <Input type="date" className="bg-white/70 w-full sm:w-auto" />
            <Button size="lg" className="w-full sm:w-auto">
            <Link href={`/restaurant-results`}>
              <Search className="mr-2 h-4 w-4" /> 
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6 ">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Restaurants", icon: Utensils },
              { name: "Movies & Theater", icon: Film },
              { name: "Salons & Spas", icon: Scissors },
              { name: "Live Music", icon: Music },
            ].map((category) => (
              <Card key={category.name} className="text-center hover:shadow-lg transition-shadow bg-white/40 ">
                <CardContent className="p-6 ">
                  <category.icon className="h-12 w-12 mx-auto mb-4 text-primary " />
                  <h3 className="font-semibold text-lg ">{category.name}</h3>
                </CardContent>
                <CardFooter className="pb-6 relative">
                  <Button asChild className="w-full">
                    <Link href={`/restaurant-results`}>
                      Explore
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="py-12 px-4 bg-red-100/40">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Featured Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "The Rustic Spoon", category: "Restaurant", rating: 4.5, image: RusticSpoon },
              { name: "City Theater", category: "Entertainment", rating: 4.7, image: CineMark},
              { name: "Zen Spa Retreat", category: "Spa", rating: 4.6, image: Spa },
            ].map((listing) => (
              <Card key={listing.name}>
                <Image
                  src={listing.image}
                  alt={listing.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{listing.name}</h3>
                  <p className="text-muted-foreground">{listing.category}</p>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{listing.rating}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild>
                    <Link href={`/restaurant-results`}>
                      Book Now
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="flex flex-col md:flex-row overflow-hidden">
              <Image
                src= {Discount}
                alt="Restaurant special"
                width={200}
                height={200}
                className="w-full md:w-1/3 object-cover"
              />
              <CardContent className="p-6 flex-1">
                <h3 className="font-semibold text-lg mb-2">20% Off Your First Booking</h3>
                <p className="text-muted-foreground mb-4">
                  New users get 20% off their first reservation. Valid for any category!
                </p>
                <Button>Claim Offer</Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col md:flex-row overflow-hidden">
              <Image
                src={Entertainment}
                alt="Entertainment special"
                width={200}
                height={200}
                className="w-full md:w-1/3 object-cover"
              />
              <CardContent className="p-6 flex-1">
                <h3 className="font-semibold text-lg mb-2">Buy One, Get One Free</h3>
                <p className="text-muted-foreground mb-4">
                  Book any entertainment event and get a second ticket free. Limited time offer!
                </p>
                <Button>View Events</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-red-100/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Why Choose Our Platform</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Wide Selection</h3>
              <p className="text-muted-foreground">Thousands of options across various categories</p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Easy Booking</h3>
              <p className="text-muted-foreground">Reserve your spot in seconds</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Verified Reviews</h3>
              <p className="text-muted-foreground">Read honest opinions from real customers</p>
            </div>
            <div className="flex flex-col items-center">
              <Book className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Exclusive Deals</h3>
              <p className="text-muted-foreground">Access to special offers and discounts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

